<template>
  <div id="app">
    <Navbar/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
body{
  padding: 0;
  margin: 0;
}
  #app{
    width: 100%;
  }
</style>
