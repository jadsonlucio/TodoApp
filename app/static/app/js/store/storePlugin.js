import store from './store.js'
export default {
  store,
  install (Vue, options) {
    Vue.prototype.$store = store
  }
}