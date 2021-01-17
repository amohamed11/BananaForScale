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
  data() {
    return {}
  },
  components: {
    PictureInput
  },
  methods: {
    onChange(image) {
      console.log("New picture selected!")
      if (image) {
        console.log("Picture loaded.")
        console.log(image)
        this.$store.commit("SET_IMAGE", image)
      } else {
        console.log("FileReader API not supported: use the <form>, Luke!")
      }
    }
  }
}
</script>
