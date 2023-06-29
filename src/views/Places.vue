<template>
  <div>
    <section class="banner-area relative" id="home">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row fullscreen d-flex align-items-center justify-content-center" style="height: 475px;">
          <div class="banner-content col-lg-10">
            <h1>
              Places
            </h1>
          </div>
        </div>
      </div>
    </section>

    <div class="locations mt-4 rounded" style="border-radius: 10px!important; overflow: hidden">
      <l-map :zoom="8" :center="getMapCenter" style="height: 400px; z-index:1;">
        <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; AZRS"
        ></l-tile-layer>
        <l-marker v-for="place in places" :key="place.id" :lat-lng="[place.lat, place.lng]" @click="markerClicked(place.id)"></l-marker>
      </l-map>
    </div>

          <section class="portfolio-area section-ga" id="portfolio">
            <div class="container">
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
          <!-- Pager -->
          <!-- <div class="clearfix">
            <a class="btn btn-primary float-right mb-3" href="#">Older Posts &rarr;</a>
          </div> -->
        </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { getAllPlaces } from '@/api';
import { latLng } from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import { Icon } from 'leaflet';
export default {
  name: "HomeView",
  components: {
    HelloWorld,
    LMap,
    LTileLayer,
    LMarker,
  },

  data() {
    return {
      places: null,
      filteredPlaces: [],
      activeFilter: null,
    };
  },
  computed: {
    getMapCenter() {
      if (this.places && this.places.length > 0) {
        const centerPlace = this.places[Math.floor(this.places.length / 2)];
        return [centerPlace.lat, centerPlace.lng];
      }
      return [51.505, -0.09]; // Default center if no places or places is null
    },
  },

  mounted() {
    delete Icon.Default.prototype._getIconUrl;
    Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });
    getAllPlaces().then((res) => {
      this.places = res.data.data;
      this.filteredPlaces = [...this.places];
    });
  },

  methods: {
    getImageUrl(place) {
      return place.images.length > 0 ? place.images[0].url : require('@/assets/img/placeholder.png');
    },
    markerClicked(id) {
      // Handle marker click event here
      // For example, you can navigate to the place route using the router:
      this.$router.push({ name: 'place', params: { id: id } });
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

<style>
@import '~leaflet/dist/leaflet.css';
.home_places{
  aspect-ratio: 1/1;
  object-fit: cover;
}

.list-enter-active, .list-leave-active {
  transition: all 0.5s ease;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
body {
  font-size: 20px;
  color: #212529;
  font-family: Lora, 'Times New Roman', serif
}

.footer-area {
  padding-top: 100px !important;
  background: url("~@/assets/img/footer2-bg.jpg") center !important;
  background-size: cover !important;
}


.banner-area {
  margin-top: -56px;
  border-radius: 10px;
  background: url("~@/assets/img/blog2-bg.jpeg") center no-repeat !important;
  background-size: cover !important;

}</style>
