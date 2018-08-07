/* global Vue: false, VueRecaptcha: false */
// eslint-disable-next-line no-new
new Vue({
  el: '#root',
  data: {
    sitekey: '6Ld23WgUAAAAALpzO52FeoMon7fdsYv66VfLnzMO'
  },
  components: {
    'vue-recaptcha': VueRecaptcha
  },
  methods: {
    onSubmit: function () {
      this.$refs.invisibleRecaptcha.execute()
    },
    onVerify: function (response) {
      console.log('Verify: ' + response)
    },
    onExpired: function () {
      console.log('Expired')
    },
    resetRecaptcha () {
      this.$refs.recaptcha.reset() // Direct call reset method
    }
  }
})
