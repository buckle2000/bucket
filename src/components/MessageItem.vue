<template lang="pug">
  div.v-component
    span {{ content }} @ {{ createdAt | fromNow }} # {{ id }}
    button(@click="deleteThis") Delete
</template>

<script>
export default {
  props: {
    id: String,
    content: String,
    createdAt: Number
  },
  data() {
    return {}
  },
  methods: {
    deleteThis() {
      this.$store.dispatch("deleteMessage", this.id)
    }
  }
}
</script>
