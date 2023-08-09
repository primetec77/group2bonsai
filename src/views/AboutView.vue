<template>
  <div class="mt-4">
    <About/>
  <section  id="contact" class="mt-4 bg-dark p-4 text-light ">
      <div class="container">
          <div class="row">
              <div class="col-lg-8 text-center mx-auto">
                  <h2 class="section-heading">Let's Get In Touch!</h2>
                  <hr class="my-4">
                  <p class="mb-5">Ready to purchase your bonsai products from us? That's great! Give us a call or send us an email and we will get back to you as soon as possible!</p>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-4 text-center ms-auto"><i class="fa fa-phone fa-3x mb-3 sr-contact" data-aos="zoom-in" data-aos-duration="300" data-aos-once="true"></i>
                  <p>+234-0903-917-7752</p>
              </div>
              <div class="col-lg-4 text-center me-auto">
                  <p><router-link to="#" class="nav-link">michaeladokwu77@gmail.com</router-link></p>
                  <router-view/>
              </div>
          </div>
          <div class="text-center mt-5">
            <h6>Copyright and reserved @ 2023 OTA hackathon project</h6>
        </div>
      </div>
  </section>
  </div>
</template>

<script>
import About from '@/components/About.vue'
export default {
  name: 'AboutView',
  components: {
    About
  }
}
</script>
