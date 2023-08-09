<template>
    <div class="container-fluid bg-dark text-light py-2">
        <div class="row">
            <div class="col-md-4 mb-3">
                <h2>Links</h2>
                <div class="mt-2">
                    <router-link to="/about" class="nav-link">About Us</router-link>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <h2>Bonsai Categories</h2>
                <div class="mt-2">
                    <router-link to="/care" class="nav-link">Care</router-link>
                </div>
                <div class="mt-2">
                    <router-link to="/outdoor" class="nav-link">Outdoor Bonsai</router-link>
                </div>
                <div class="mt-2">
                    <router-link to="/indoor" class="nav-link">Indoor Bonsai</router-link>
                </div>
            </div>
            <!-- form section -->
            <div class="col-md-4 mb-3">
                <h2>Contacs Us</h2>
                <form>
                    <div class="mt-2"><label for="name" class="form-label">Name</label></div>
                    <div class="mt-2"><input type="text" class="form-control" placeholder="Ente your name" required></div>
                    <div class="mt-2"><label for="email" class="form-label">Email</label></div>
                    <div class="mt-2"><input type="email" class="form-control" placeholder="Ente your Email" required></div>
                    <div class="mt-3"><textarea name="message" id="" cols="30" rows="10" class="form-control" placeholder="write to us"></textarea></div>
                    <div class="mt-3 text-center"><a src="mailto:michaeladokwu77@gmail.com" class="btn btn-primary form-control" type="submit">Submit</a></div>
                </form>
            </div>
        </div>
        <div class="text-center mt-5">
            <h6>Copyright and reserved @ 2023 OTA hackathon project</h6>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>
