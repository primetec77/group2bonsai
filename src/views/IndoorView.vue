<template>
  <div class="container">
    <div class="mb-4"> <h3 class="text-center">Bonsai indoor category</h3></div>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="indoorItem in indoorData" :key="indoorItem.id">
        <div class="card">
          <img :src="`https://tbhpwebdevapi.azurewebsites.net${indoorItem.productImage}`" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-text">{{ indoorItem.id }}</h5>
            <h5 class="card-text">{{ indoorItem.productTitle }}</h5>
            <h5 class="card-text">{{ indoorItem.productPrice }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndoorView',
  data () {
    return {
      indoorData: [],
      error: ''
    }
  },
  async mounted () {
    try {
      const result = await fetch('https://tbhpwebdevapi.azurewebsites.net/api/BonsaiV2/Category?category=indoor')
      const data = await result.json()
      console.log(data)
      this.indoorData = data
    } catch (error) {
      this.error = error
    }
  }
}
</script>
