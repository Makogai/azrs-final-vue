<template>
  <div>
    <section class="banner-area relative" id="home">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row fullscreen d-flex align-items-center justify-content-center" style="height: 475px;">
          <div class="banner-content col-lg-10">
            <h1 class="banner-title">About Us</h1>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="about-content">
            <h2 class="section-title">Our Story</h2>
            <p class="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis semper turpis. Integer consequat, mi
              at hendrerit faucibus, elit turpis vestibulum nisi, a volutpat odio enim non nisi. Proin facilisis mauris
              eu interdum ullamcorper. Mauris consequat elementum ante vel fringilla. Proin ultricies libero mauris,
              quis luctus arcu placerat et. Nam semper sapien sed metus aliquet, ut efficitur erat vulputate.
            </p>

            <h2 class="section-title">Our Mission</h2>
            <p class="section-description">
              Quisque id urna semper, vulputate mi in, scelerisque metus. Nam sed dignissim ipsum. Proin a ante nunc.
              Fusce sollicitudin magna nunc, id interdum metus facilisis ac. Proin eu rutrum felis, ac dapibus ligula.
              Nam non ligula est. Sed elementum finibus nunc, nec tincidunt tellus feugiat ut.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.banner-area {
  margin-top: -56px;
  border-radius: 10px;
  background: url("~@/assets/img/placeholder.png") center no-repeat;
  background-size: cover;
}

.banner-title {
  font-size: 3rem;
  color: #fff;
  text-align: center;
}

.about-content {
  margin-top: 50px;
}

.section-title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.section-description {
  font-size: 1.2rem;
  line-height: 1.6;
  color: #666;
}
</style>
