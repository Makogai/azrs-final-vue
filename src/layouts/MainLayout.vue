<template>
  <div class="protfolio-wrap">
    <!-- Start Header Area -->
    <div id="undefined-sticky-wrapper" class="sticky-wrapper" style="height: 56px;">
      <header class="default-header" style="">
        <nav class="navbar navbar-expand-lg  navbar-light">
          <div class="container">
            <router-link class="navbar-brand" :to="{name: 'home'}">
              <img src="~@/assets/img/logo.png" alt="">
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="text-white lnr lnr-menu"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end align-items-center" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li>
                  <router-link active-class="active" :to="{ name: 'blogs' }" exact>Blog</router-link>
                </li>
                <li>
                  <router-link active-class="active" :to="{ name: 'places' }" exact>Places</router-link>
                </li>
                <li>
                  <router-link active-class="active" :to="{ name: 'about' }" exact>About Us</router-link>
                </li>
                <li>
                  <router-link active-class="active" :to="{ name: 'contact' }" exact>Contact</router-link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>

    <slot name="content"/>

    <!-- start footer Area -->
    <footer class="footer-area section-gap">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <h6>About Us</h6>
              <p>
                We Provide Tour Plans for your most comfortable travel ever. Let yourself dive into the Beauty, Culture
                &amp; festivals of India. Have You're Good time exploring Montenegro.
              </p>
              <p class="footer-text">
                Copyright ©2023 All rights reserved - MFN
              </p>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-6">
            <div class="single-footer-widget">
              <h6>Newsletter</h6>
              <p>Stay update with our latest</p>
              <div class="" id="mc_embed_signup">
                <form @submit.prevent="subscribeNewsletter" class="form-inline" novalidate="true">
                  <input class="form-control" name="EMAIL" placeholder="Enter Email" onfocus="this.placeholder = ''"
                         onblur="this.placeholder = 'Enter Your Email Here '" required="" type="email">
                  <button class="click-btn btn btn-primary" type="submit"><i class="fa fa-long-arrow-right"
                                                                             aria-hidden="true"></i></button>

                  <div class="info"></div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-6 social-widget">
            <div class="single-footer-widget">
              <h6>Follow Us</h6>
              <p>Let us be social</p>
              <div class="footer-social d-flex align-items-center">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-snapchat"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- End footer Area -->
  </div>
</template>

<script>
export default {
  name: 'MainLayout',
  methods: {
    subscribeNewsletter() {
      // Perform mock function
      this.$toast.info("This feature is WIP", {
        position: "top-center",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    }
  }
}
</script>

<style scoped>
.active {
  color: white;
  text-decoration: underline !important;
}

footer {
  color: white !important;
}

.btn-primary {
  background-color: #8DA3FF;
  border-color: #8DA3FF;
}

.btn-primary:hover,
.btn-primary:focus {
  background-color: #8DA3FF !important;
  border-color: #8DA3FF !important;
}

</style>
