<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data () {
    return {
      visible: false,
      arr: [1, 3, 4],
    }
  },
  created () {},
  methods: {
    // 哈哈
    test (a, b) {
      let c = a + b
    },
    test2 () {},
  },
}
</script>

<style></style>
