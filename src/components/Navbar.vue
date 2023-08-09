<template>
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
              <h3 class="navbar-brand">bonsai world</h3>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link active" aria-current="page" href="#">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/about" class="nav-link active" href="#">About Us</router-link>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Bonsai Categories
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><router-link to="/care" class="dropdown-item" href="#">Care</router-link></li>
                      <li><router-link to="/outdoor" class="dropdown-item" href="#">Outdoor</router-link></li>
                      <li><router-link to="/indoor" class="dropdown-item" href="#">Indoor</router-link></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <router-link to="/login" class="nav-link active" href="#">Login</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/register" class="nav-link active" href="#">Register</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <router-view/>
    </div>
</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style scoped>
.navbar-brand{
    text-transform: uppercase;
    font-size: 25px;
    word-spacing: 2px;
    letter-spacing: 4px;
}
</style>
