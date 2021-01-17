<template>
  <div class="image-input">
    <picture-input
      ref="pictureInput"
      width="600"
      height="600"
      :crop="false"
      margin="16"
      accept="image/jpeg,image/jpg,image/png"
      size="10"
      button-class="btn"
      :custom-strings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Drag an image'
      }"
      @change="onChange"
    >
    </picture-input>
  </div>
</template>

<script>
import PictureInput from "vue-picture-input"

export default {
  name: "image-input",
  // props: {
  //   cocoModel: Promise
  // },
  components: {
    PictureInput
  },
  methods: {
    async onChange(image) {
      if (image) {
        // const model = await this.cocoModel
        // console.log("Picture loaded.")

        // model.dispose()
        // modelPromise = cocoSsd.load({ base: image })
        // console.log("Model updated.")

        this.$store.commit("SET_IMAGE", image)
      } else {
        console.log("FileReader API not supported: use the <form>, Luke!")
      }
    }
  }
}
</script>
