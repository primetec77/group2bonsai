<template>
  <div class="container">
    <div class="mb-4"> <h3 class="text-center">Bonsai care category</h3></div>
    <div class="row" >
        <div class="col-md-4 mb-3" v-for="care in cares" :key="care.id">
          <div class="card">
            <img :src="`https://tbhpwebdevapi.azurewebsites.net${care.productImage}`" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-text">{{ care.id }}</h5>
              <h5 class="card-text">{{ care.productTitle }}</h5>
              <h5 class="card-text">{{ care.productPrice }}</h5>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CareView',
  data () {
    return {
      cares: [],
      error: ''
    }
  },
  async mounted () {
    try {
      const result = await fetch('https://tbhpwebdevapi.azurewebsites.net/api/BonsaiV2/Category?category=care')
      const data = await result.json()
      console.log(data)
      this.cares = data
    } catch (error) {
      this.error = error
    }
  }
}
</script>
