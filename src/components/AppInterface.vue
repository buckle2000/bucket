<template lang="pug">
  div.v-component
    h2 tig
    div
      input(
        type="text"
        v-model="newMessage"
        @keydown.enter="commitMessage"
        placeholder='enter some text here')
      button(@click="commitMessage") Submit
      button(@click="clearMesssage") Clear
      button(@click="wipe") Wipe Data
    div(v-for="message in messages" :key="message.id")
      MessageItem(v-bind="message")
</template>

<script>
import MessageItem from './MessageItem'

export default {
  components: { MessageItem },
  data() {
    return {
      newMessage: '',
    }
  },
  computed: {
    messages() { return this.$store.state.messages }
  },
  methods: {
    commitMessage() {
      this.$store.dispatch('addMessage', this.newMessage)
      this.newMessage = ''
    },
    clearMesssage() {
      this.newMessage = ''
    },
    wipe() {
      this.$store.dispatch('wipeMessages')
    }
  }
}
</script>

<style lang="stylus">

</style>
