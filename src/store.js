import Vue from 'vue'
import Vuex from 'vuex'
import Horizon from '@horizon/client'

Vue.use(Vuex)

let hz = null

// TODO lock app when connection is down

const store = window.store = new Vuex.Store({
  state: {
    messages: [],
    horizonStatus: 'unknown'
  },
  mutations: {
    updateProperty(state, { key, value }) {
      state[key] = value
    }
  },
  actions: {
    deleteMessage(context, messageId) {
      hz('messages').remove(messageId)
    },
    addMessage(context, messageContent) {
      hz('messages').store({
        content: messageContent,
        createdAt: Date.now()
      })
    },
    wipeMessages(context) {
      hz('messages').fetch().subscribe(o => hz('messages').remove(o))
    }
  }
})

let taskReconnect = null

function onReady() {
  store.commit("updateProperty", {
    key: 'horizonStatus',
    value: 'connected'
  })
  hz('messages').order('createdAt', 'descending').watch()
    .subscribe(messages => {
      store.commit("updateProperty", {
        key: 'messages',
        value: messages
      })
    }, onError)
}

function onDisconnected() {
  store.commit("updateProperty", {
    key: 'horizonStatus',
    value: 'disconnected'
  })
  taskReconnect = setTimeout(reconnect, 1000)
}

function onError(error) {
  // TODO handle error
}

function reconnect() {
  hz = window.hz = new Horizon()
  hz.onReady(onReady)
  hz.onDisconnected(onDisconnected)
  hz.connect()
}

reconnect() // init!

export default store