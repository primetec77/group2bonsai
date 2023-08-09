<template>
  <div class="container">
    <div class="mb-4"> <h3 class="text-center">Bonsai outdoor category</h3></div>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="product in products" :key="product.id">
        <div class="card">
          <img :src="`https://tbhpwebdevapi.azurewebsites.net${product.productImage}`" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-text">{{ product.id }}</h5>
            <h5 class="card-text">{{ product.productTitle }}</h5>
            <h5 class="card-text">{{ product.productPrice }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OutdoorView',
  data () {
    return {
      products: [],
      error: ''
    }
  },
  async mounted () {
    try {
      const data = await fetch('https://tbhpwebdevapi.azurewebsites.net/api/BonsaiV2/Category?category=outdoor')
      const result = await data.json()
      console.log(result)
      this.products = result
    } catch (error) {
      this.error = error
    }
  }
}
</script>
