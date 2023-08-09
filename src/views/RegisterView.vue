<template>
  <div class="container-fluid">
      <div class="row" id="">
          <div class="col-md-3"></div>
          <div class="col-md-6" id="reg-bg">
              <h4 class="text-center" id="reg-text">welcome to registration page</h4>
                <div class="mb-3" >
                  <div><h2 class="text-center" style="color:blue;">Register</h2></div>
                  <input type="text" v-model="formData"  class="form-control" placeholder="Enter your username" id="username" aria-describedby="textHelp" required>
                </div>
                <button v-on:click="register" type="submit" class="btn btn-primary form-control">Register</button>
              <div class="mt-4">
                <p class="text-center"><router-link to="/login" class="text-decoration-none">Login</router-link></p>
                <router-view/>
              </div>
              <div class="text-center text-light mt-5"><p class="h6">copyright@2023 OTA</p></div>
          </div>
          <div class="col-md-3"></div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'RegisterView',
  data () {
    return {
      formData: ''
    }
  },
  methods: {
    async register () {
      const result = await axios.post('https://tbhpwebdevapi.azurewebsites.net/api/BonsaiV2/RegisterUser?username', { formData: this.formData }) //   Api link
      console.log(result)
    }
  }
}
</script>

<style scoped>
  #reg-bg{
      background-image: url('../assets/images/bon5.jpg');
      background-position: center;
      background-size: cover;
      height: 80vh;
  }
  #reg-text{
      margin-top: 270px;
      color: white;
      text-transform: uppercase;
  }
</style>
