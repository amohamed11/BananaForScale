<template>
  <div class="home columns">
    <div class="is-four-fifths column">
      <image-input />
    </div>
    <div class="column">
      <b-button v-on:click="analyze" type="is-primary">Analyze</b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ImageInput from "@/components/ImageInput.vue"
import { Button } from "buefy"

export default {
  name: "Home",
  components: {
    ImageInput
  },
  data() {
    return {}
  },
  methods: {
    analyze() {
      this.$store.dispatch("analyzeImage")
    }
  }
}
</script>

<style lang="scss">
.home {
  padding-top: 2em;
}
</style>
