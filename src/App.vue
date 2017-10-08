<template lang="pug">
  #app.v-component
    h1 hello world
    p Horizon status: {{horizonStatus || 'ss'}}
    div
    AppInterface(v-if="horizonStatus === 'connected'")
</template>

<script>
import AppInterface from './components/AppInterface'

export default {
  components: {
    AppInterface
  },
  computed: {
    horizonStatus() { return this.$store.state.horizonStatus }
  }
}
</script>
