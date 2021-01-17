<template>
  <div class="home ">
    <div class="is-full column">
      <image-input />
    </div>
    <div class="column">
      <b-button v-on:click="analyze" type="is-primary">Analyze</b-button>
    </div>
    <canvas id="canvas" width="600" height="400"></canvas>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageInput from "@/components/ImageInput.vue"
import { Button } from "buefy"
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
      model: null,
      baseModel: "mobilenet_v2"
    }
  },
  mounted() {
    cocoSsd.load({ base: this.baseModel }).then(model => {
      this.model = model
    })
  },
  methods: {
    analyze() {
      const c = document.getElementsByTagName("canvas")[0]
      const ctx = c.getContext("2d")
      this.model.detect(c, 2, 0.2).then(predictions => {
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
          ctx.strokeStyle = "#00FFFF"
          ctx.lineWidth = 4
          ctx.strokeRect(x, y, width, height)
          // Draw the label background.
          ctx.fillStyle = "#00FFFF"
          const textWidth = ctx.measureText(prediction.class).width
          const textHeight = parseInt(font, 10) // base 10
          ctx.fillRect(x, y, textWidth + 4, textHeight + 4)
        })

        predictions.forEach(prediction => {
          const x = prediction.bbox[0]
          const y = prediction.bbox[1]
          // Draw the text last to ensure it's on top.
          ctx.fillStyle = "#000000"
          ctx.fillText(prediction.class, x, y)
        })
      })
    }
  }
}
</script>

<style lang="scss">
.home {
  padding-top: 2em;
}
</style>
