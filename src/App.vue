<template lang="pug">
#app
  h1 hello world
  div
    button(@click="wipe")="Wipe & restart"
  Cinterface(:c="db.get('messages')")
</template>

<script>
import Cinterface from './components/interface'
import Gun from 'gun'

const db = window.db = new Gun({
  peers: [`https://gunjs.herokuapp.com/gun`]
}).get('sun-seminary/bucket')

export default {
  components: {
    Cinterface
  },
  data() {
    return {
      db
    } 
  },
  methods: {
    wipe() {
      localStorage.clear()
      window.location.reload()
    }
  }
}
</script>

<style lang="stylus">
  #app
    border 2px solid black
</style>
