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
            <li :class="{ 'active': activeFilter === null }" data-filter="*" @click="filterPlaces(null)">All</li>
            <li :class="{ 'active': activeFilter === 2 }" data-filter=".corporate" @click="filterPlaces(2)">North</li>
            <li :class="{ 'active': activeFilter === 5 }" data-filter=".personal" @click="filterPlaces(5)">Central</li>
            <li :class="{ 'active': activeFilter === 3 }" data-filter=".agency" @click="filterPlaces(3)">East</li>
            <li :class="{ 'active': activeFilter === 4 }" data-filter=".portal" @click="filterPlaces(4)">West</li>
            <li :class="{ 'active': activeFilter === 1 }" data-filter=".portal" @click="filterPlaces(1)">South</li>
          </ul>
        </div>

        <div class="filters-content">
          <transition-group name="list" tag="div" class="row grid">
            <div class="single-portfolio col-sm-4 all corporate" v-for="place in filteredPlaces" :key="place.id">
              <router-link :to="{name: 'place', params: {id: place.id}}">
              <div class="item">
                <img class="home_places" :src="getImageUrl(place)" alt="Work 1">
                <div class="p-inner">
                  <h4>{{place.name}}</h4>
                </div>
              </div>
              </router-link>
            </div>
          </transition-group>
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
      filteredPlaces: [],
      activeFilter: null,
    };
  },

  mounted() {
    getPlaces().then((res) => {
      this.places = res.data.data;
      this.filteredPlaces = [...this.places];
    });
  },
  methods: {
    getImageUrl(place) {
      return place.images.length > 0 ? place.images[0].url : require('@/assets/img/placeholder.png');
    },
    filterPlaces(categoryId) {
      this.activeFilter = categoryId;
      if (categoryId) {
        this.filteredPlaces = this.places.filter(place => place.cetagory_id == categoryId);
      } else {
        this.filteredPlaces = [...this.places];
      }
    }
  }
};
</script>

<style scoped>
.list-enter-active, .list-leave-active {
  transition: all 0.5s ease;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
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
