<template>
  <div>
    <section class="banner-area relative" id="home">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row fullscreen d-flex align-items-center justify-content-center" style="height: 975px;">
          <div class="banner-content col-lg-10">
            <h5 class="text-uppercase">Be the part of this Wonderful Journey</h5>
            <h1>
              Shape your unique Montenegro story
            </h1>
            <a href="#" class="primary-btn text-uppercase">Explore Now</a>
          </div>
        </div>
      </div>
    </section>


    <section class="portfolio-area section-gap" id="portfolio">
      <div class="container">
        <div class="row d-flex justify-content-center">
          <div class="menu-content col-lg-10">
            <div class="title text-center">
              <h1 class="mb-10">Explore Montenegro</h1>
              <p>Start your adventure</p>
            </div>
          </div>
        </div>

        <div class="filters">
          <ul>
            <li class="active" data-filter="*">All</li>
            <li data-filter=".corporate">North</li>
            <li data-filter=".personal">Central</li>
            <li data-filter=".agency">North-Eastern</li>
            <li data-filter=".portal">South</li>
          </ul>
        </div>

        <div class="filters-content">
          <div class="row grid" >
            <div class="single-portfolio col-sm-4 all corporate" v-for="place in places">
              <div class="item">
                <img class="home_places" :src="place.images[0].url" alt="Work 1">
                <div class="p-inner">
                  <h4><a href="./Pages-inside/GoldenTemple-Info.html">{{place.name}}</a></h4>
                  <div class="cat">Punjab</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { getPlaces, getPlace } from '@/api';
export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },

  data() {
    return {
      places: null,
    };
  },

  mounted() {
    getPlaces().then((res) => {
      this.places = res.data.data;
    });
    
    getPlace(1).then((res) => {
      console.log(res)
    }) 
  }
};
</script>

<style scoped>

.home_places{
  aspect-ratio: 1/1;
  object-fit: cover;
}

.banner-area {
  margin-top: -56px;
  border-radius: 10px;
  background: url("~@/assets/img/header-bg.jpg") center no-repeat!important;
  background-size: cover !important;
}


</style>

<style>
.footer-area {
  padding-top: 100px !important;
  background: url("~@/assets/img/footer-bg.png") center !important;
  background-size: cover !important;
}

</style>