<template lang="pug">
  div
    h2 tig
    div
      input(
        type="text"
        v-model="newMessage"
        @keydown.enter="addMessage"
        placeholder='enter some text here')
      button(@click="addMessage") Submit
      button(@click="clear") Clear
    table
      tr(v-for="m, mid in messages")
        td {{m}}
        td {{mid}}
</template>

<script>
import Vue from 'vue'

export default {
  props: ['c'],
  data() {
    return {
      messages: {},
      newMessage: ''
    }
  },
  methods: {
    addMessage() {
      if (this.newMessage === '') return
      this.c.set(this.newMessage)
      this.newMessage = ''
    },
    updateMessage(value, key) {
      console.log('Update:', value, key)
      if (value === null)
        Vue.delete(this.messages, key)
      else
        Vue.set(this.messages, key, value)
    },
    clear() {
      console.groupCollapsed('Clear')
      for (const key of Object.keys(this.messages)) {
        this.c.get(key).put(null)
      }
      console.groupEnd()
    }
  },
  created() {
    this.c.map().on(this.updateMessage.bind(this))
  }
}
</script>

<style lang="stylus">

</style>
