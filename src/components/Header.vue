<template>
        <section class="car-section">
           <div class="container">
                <h3 class="h-title">welcome to Bonsai world</h3>
                <p class="h-text">your satisfaction is our ultimate priority</p>
           </div>
        </section>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
    .car-section{
        background-image: url('../assets/images/bon1.jpg');
        width: 100%;
        height: 450px;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .container{
        text-align: center;
        color: white;
    }
    .h-title{
        padding-top:200px;
        text-transform: uppercase;
        letter-spacing: 7px;
    }
    #h-text{
        padding: 220px;
        text-transform: capitalize;
    }
</style>
  