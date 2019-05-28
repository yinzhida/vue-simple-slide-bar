<template>
  <div id="app">
    <vue-simple-slide-bar
      :speed="0"
      :beanStyles="{backgroundColor: 'orange'}"
      :processStyles="{backgroundColor: 'red'}"
      :trackStyles="{backgroundColor: 'green'}"
      :wrapStyles="{padding: '6px 0'}"
    ></vue-simple-slide-bar>
  </div>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
