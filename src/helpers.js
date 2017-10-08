import Vue from 'vue'
import moment from 'moment'

Vue.filter('fromNow', time => moment(time).fromNow())

export {}