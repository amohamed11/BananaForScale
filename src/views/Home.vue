<template>
  <div class="home columns">
    <div class="is-three-quarters column" v-if="!isLoading">
      <image-input />
    </div>
    <div class="column" v-if="!isLoading">
      <b-button v-on:click="analyze" type="is-primary">Analyze</b-button>
      <b-message
        title="Measured Dimensions (Severe Approximations)"
        type="is-primary"
        aria-close-label="Close message"
        v-if="isMeasured"
      >
        Height: {{ measuredDimensions.height.toFixed(2) }}cm<br />
        Width: {{ measuredDimensions.width.toFixed(2) }}cm
      </b-message>
    </div>
    <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="true"></b-loading>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageInput from "@/components/ImageInput.vue"
import * as cocoSsd from "@tensorflow-models/coco-ssd"
import * as cpu from "@tensorflow/tfjs-backend-cpu"
import * as webgl from "@tensorflow/tfjs-backend-webgl"

export default {
  name: "Home",
  components: {
    ImageInput
  },
  data() {
    return {
      isLoading: false,
      isMeasured: false,
      model: {},
      baseModel: "mobilenet_v2",
      measuredDimensions: {
        height: 0,
        width: 0
      }
    }
  },
  created() {
    this.isLoading = true
  },
  mounted() {
    cocoSsd.load({ base: this.baseModel }).then(model => {
      this.model = model
      this.isLoading = false
    })
  },
  methods: {
    measureDimensions(predictions) {
      const actualBananaHeight = 17.0
      const actualBananaWidth = 3.78
      let banana = null
      let objectToMeasure

      predictions.forEach(prediction => {
        if (prediction.class == "banana") {
          banana = prediction
        } else {
          objectToMeasure = prediction
        }
      })

      if (banana) {
        const widthMultiplier = actualBananaWidth / banana.bbox[2]
        const heightMultiplier = actualBananaHeight / banana.bbox[3]

        const actualObjectWidth = objectToMeasure.bbox[2] * widthMultiplier
        const actualObjectHeight = objectToMeasure.bbox[3] * heightMultiplier

        this.measuredDimensions = { width: actualObjectWidth, height: actualObjectHeight }
        this.isMeasured = true
      } else {
        const error = "Banana was not detected, please try again with a different picture."
        this.onError(error)
      }
    },
    analyze() {
      const c = document.getElementsByTagName("canvas")[0]
      const ctx = c.getContext("2d")
      this.model.detect(c, 2).then(predictions => {
        // Font options.
        const font = "16px sans-serif"
        ctx.font = font
        ctx.textBaseline = "top"

        predictions.forEach(prediction => {
          const x = prediction.bbox[0]
          const y = prediction.bbox[1]
          const width = prediction.bbox[2]
          const height = prediction.bbox[3]
          // Draw the bounding box.
          ctx.strokeStyle = "#2fff00"
          ctx.lineWidth = 4
          ctx.strokeRect(x, y, width, height)
          // Draw the label background.
          ctx.fillStyle = "#2fff00"
          const textWidth = ctx.measureText(prediction.class).width
          const scoreWidth = ctx.measureText(prediction.score.toFixed(2).toString()).width
          const textHeight = parseInt(font, 10) // base 10
          ctx.fillRect(x, y, textWidth + 4, textHeight + 4)
          ctx.fillRect(x, y + height - textHeight - 4, scoreWidth + 4, textHeight + 4)
          // Draw the text last to ensure it's on top.
          ctx.fillStyle = "#000000"
          ctx.fillText(prediction.class, x, y)
          ctx.fillText(prediction.score.toFixed(2), x, y + height - textHeight)
        })

        this.measureDimensions(predictions)
      })
    },
    onError(errorMsg) {
      this.$buefy.toast.open({
        duration: 6000,
        message: errorMsg,
        position: "is-bottom",
        type: "is-danger"
      })
    }
  }
}
</script>

<style lang="scss">
.home {
  padding-top: 2em;
  text-align: left;

  .message {
    max-width: 600;
    margin-top: 1em;
  }
}
</style>
