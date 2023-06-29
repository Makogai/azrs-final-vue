<template>
  <div>
    <section class="banner-area relative" id="home"
             v-if="place"
             :style="`background: url(${getImageUrl(place)}) no-repeat center center!important; background-size: cover!important;`"
    >
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row fullscreen d-flex align-items-center justify-content-center" style="height: 475px;">
          <div class="banner-content col-lg-10">
            <h1 style="font-size: 3rem!important;">
              {{ place.name }}
            </h1>
          </div>
        </div>
      </div>
    </section>

    <div class="container mt-5" v-if="place">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="details-block">
            <h2 class="details-title">{{ place.name }}</h2>
            <p class="details-description mt-2">{{ place.description }}</p>
            <p class="details-category"><b>Category:</b> {{ place.cetagory.name }}</p>
            <p class="details-price"><b>Price:</b> {{ place.price }}</p>
            <div class="rating-container">
              <h3 class="rating-title mb-2">Rating</h3>
              <star-rating :rating="place.total_rating" :read-only="true" :star-size="25"></star-rating>
            </div>
            <div class="gallery-container">
              <h3 class="gallery-title">Gallery</h3>
              <div class="gallery">
                <img v-for="(image, index) in place.images" :key="index" :src="image.url" @click="openImage(image.url)" class="gallery-image">
              </div>
            </div>
          </div>

          <div class="reviews-container">
            <h3 class="mb-4">Reviews:</h3>
            <div v-for="review in place.reviews" :key="review.id" class="review-card">
              <h4 class="review-title">{{review.title}}</h4>
              <p class="review-description">{{review.description}}</p>
              <div class="review-rating">
                <star-rating :rating="review.rating" :read-only="true" :star-size="20"></star-rating>
              </div>
            </div>
          </div>

          <div id="map" v-if="place.lat != '' && place.lng != ''" class="add-review-container">
            <h3 class="mb-4">Location</h3>
            <l-map :zoom="8" :center="getMapCenter" style="height: 300px">
              <l-tile-layer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; AZRS"
              ></l-tile-layer>
              <l-marker :lat-lng="getMarkerPosition"></l-marker>
            </l-map>
          </div>

        </div>
      </div>

      <div class="row mb-4">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="add-review-container">
            <h3>Add Review</h3>
            <form @submit.prevent="submitReview">
              <div class="form-group">
                <input class="form-control" v-model="newReview.title" type="text" placeholder="Title" required>
              </div>
              <div class="form-group">
                <textarea class="form-control" v-model="newReview.description" placeholder="Description" required></textarea>
              </div>
              <div class="form-group">
                <star-rating v-model="newReview.rating" :star-size="20" :increment="0.5"></star-rating>
              </div>
              <div class="form-group">
                <button class="submit-button" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div v-if="showModal" class="modal" @click="closeModal" @keydown="handleKeyboardNavigation">
      <span class="close" @click="closeModal">&times;</span>
      <img class="modal-content" :src="currentImage">

      <!-- Previous button -->
      <button @click="changeImage(-1, $event)" class="prev-button" :disabled="!hasPreviousImage">
        &lt;
      </button>

      <!-- Next button -->
      <button @click="changeImage(1, $event)" class="next-button" :disabled="!hasNextImage">
        &gt;
      </button>
    </div>

  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { getPlace } from '@/api';
import API from '@/api.js'
import CoolLightBox from 'vue-cool-lightbox'
import { latLng } from 'leaflet';
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

import StarRating from 'vue-star-rating'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css' // Don't forget to import the styles
import { Icon } from 'leaflet';
export default {
  name: "SinglePlace",
  components: {
    HelloWorld,
    'cool-lightbox': CoolLightBox,
    'star-rating': StarRating,
    LMap,
    LTileLayer,
    LMarker,
  },

  data() {
    return {
      place: null,
      newReview: {
        title: '',
        description: '',
        rating: 0
      },
      showModal: false,
      currentImage: '',
      map: null,
      marker: null
    };
  },
  mounted() {
    delete Icon.Default.prototype._getIconUrl;
    Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });
    getPlace(this.$route.params.id).then((res) => {
      this.place = res.data.data;
    });
  },
  computed: {
    getMapCenter() {
      if (this.place) {
        return latLng(this.place.lat, this.place.lng);
      }
      return null;
    },
    getMarkerPosition() {
      if (this.place) {
        return latLng(this.place.lat, this.place.lng);
      }
      return null;
    },
    hasPreviousImage() {
      const currentIndex = this.place.images.findIndex(image => image.url === this.currentImage);
      return currentIndex > 0;
    },
    hasNextImage() {
      const currentIndex = this.place.images.findIndex(image => image.url === this.currentImage);
      return currentIndex < this.place.images.length - 1;
    },
  },


  methods: {
    getImageUrl(place) {
      if (place)
        return place.images.length > 0 ? place.images[0].url : require('@/assets/img/placeholder.png');
    },
    getSummary(content) {
      return content.substring(0, 120) + "...";
    },
    openImage(url) {
      this.currentImage = url;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    handleKeyboardNavigation(event) {
      if (event.key === "ArrowLeft") {
        // Left arrow key
        this.changeImage(-1, event);
      } else if (event.key === "ArrowRight") {
        // Right arrow key
        this.changeImage(1, event);
      }
    },

    changeImage(direction, event) {
      event.stopPropagation();

      const currentIndex = this.place.images.findIndex(image => image.url === this.currentImage);
      const newIndex = currentIndex + direction;

      if (newIndex >= 0 && newIndex < this.place.images.length) {
        this.currentImage = this.place.images[newIndex].url;
      }
    },
    submitReview() {
      this.newReview.location_id = this.place.id;
      API.post('add-review', this.newReview)
          .then(response => {
            this.place.reviews.push(response.data);
            this.newReview = {
              location_id: null,
              title: '',
              description: '',
              rating: 0,
            };
            this.$toast.success("successfully added review!", {
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
          })
          .catch(error => {
            console.error(error);
            this.$toast.error("There was a problem submitting your review", {
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
          });
    },
  },

};
</script>

<style>
@import '~leaflet/dist/leaflet.css';
.modal {
  /* Existing styles... */

  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  /* Existing styles... */

  max-height: calc(100% - 60px);
  width: auto;
  max-width: 80%;
}

.close {
  /* Existing styles... */

  position: absolute;
  top: 10px;
  right: 10px;
}

.prev-button,
.next-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  transition: opacity 0.3s;
}

.prev-button {
  left: 10px;
}

.next-button {
  right: 10px;
}

.prev-button:disabled,
.next-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.add-review-form {
  border: 1px solid #ccc;
  padding: 15px;
  margin-top: 30px;
}
.review-container {
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 15px;
}

.review-title {
  font-size: 1.2em;
  font-weight: bold;
}

.review-description {
  margin: 10px 0;
}

.review-rating {
  margin-bottom: 10px;
}
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.gallery-image {
  width: calc(33% - 20px);
  margin-bottom: 30px;
  cursor: pointer;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.9);
}

.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

.close {
  position: absolute;
  top: 71px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
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
}

.details-block {
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.rating-container, .gallery-container {
  margin-top: 20px;
}

.reviews-container {
  background-color: #f8f9fa;
  padding: 30px;
  border-radius: 15px;
}

.review-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.add-review-container {
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-control {
  border: none;
  border-bottom: 2px solid #6c757d;
  border-radius: 0;
}

.form-control:focus {
  box-shadow: none;
  border-color: #007bff;
}

.submit-button {
  background-color: #8DA3FF;
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 0px;
  cursor: pointer;

}

.submit-button:hover {
  background-color: #0056b3;
}


.map-container {
  margin-top: 20px;
}

.map {
  height: 400px;
  width: 100%;
}

.map-title {
  margin-bottom: 20px;
}
</style>
