<template>
  <div id="app">
    <the-header/>
    <router-view />
    <the-footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    'the-header': Header,
    'the-footer': Footer
  }
}
</script>

<style>

</style>
