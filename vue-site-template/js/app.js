var app = new Vue({
  el: '#app',
  props: {
    source: String,
  },
  vuetify: new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#ff00ff',
          secondary: '#00ffff',
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

