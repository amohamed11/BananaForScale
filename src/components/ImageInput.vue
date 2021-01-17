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
  components: {
    PictureInput
  },
  methods: {
    async onChange(image) {
      if (image) {
        this.$store.commit("SET_IMAGE_LOADED")
        console.log("Picture loaded.")
      } else {
        console.log("FileReader API not supported: use the <form>, Luke!")
      }
    }
  }
}
</script>
