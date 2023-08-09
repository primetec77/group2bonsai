<template>
<div class="home">
  <Header/>
  <BonsaiCategories />
  <Footer/>
</div>

</template>

<script>
import Header from '@/components/Header.vue'
import BonsaiCategories from '@/components/BonsaiCategories.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    Header, BonsaiCategories, Footer
  }
  // mounted () {
  //   const user = localStorage.getItem('user-info')
  //   if (!user) {
  //     this.$router.push({ name: 'home' })
  //   }
  // }
}
</script>

<style>
  .home{
    background-color: lightgray;
  }
</style>
