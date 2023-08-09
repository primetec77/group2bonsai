<template>
  <div class="container-fluid">
      <div class="row" id="">
        <div class="col-md-3"></div>
          <div class="col-md-6" id="log-bg">
              <h4 class="text-center" id="log-text">welcome to Login page</h4>
              <div class="mb-3" >
                <div><h2 class="text-center" style="color:blue;">Login</h2></div>
                <input v-model="username" type="text" class="form-control" id="username" placeholder="Enter your username" aria-describedby="textHelp" required>
              </div>
              <button v-on:click="login" class="btn btn-primary form-control">Login</button>
              <div class="mt-4">
                <p class="text-center"><router-link to="/Register" class="text-decoration-none">Register</router-link></p>
                <router-view/>
              </div>
          <div class="text-center text-light mt-5"><p class="h6">copyright@2023 OTA</p></div>
          </div>
          <div class="col-md-3">
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LoginView',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    async login () {
      const result = await axios.get('', { username: this.username }) //   Api link
      if (result.Code === 200 && result.data > 0) {
        alert('Login succesful')
        // to redirectio use to the homepage
        this.$router.push({ name: 'home' })
      }
    }
  }
}
</script>

<style scoped>
  #log-bg{
      background-image: url('../assets/images/bon2.jpg');
      background-position: center;
      background-size: cover;
      height: 80vh;
  }
  #log-text{
      margin-top: 270px;
      color: white;
      text-transform: uppercase;
  }
</style>
