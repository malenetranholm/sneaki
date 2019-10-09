var app = new Vue({
  el: '#app',
  props: {
    source: String,
  },
  vuetify: new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#ffffff',
          secondary: '#1D2B45',
          accent: '#8c9eff',
          error: '#b71c1c',
        },
      },
    },
  }
  ),
  data: {
    drawer: null,
  }
})

