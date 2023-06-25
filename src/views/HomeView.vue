<template>
  <section class="portfolio-area section-gap" id="portfolio">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="menu-content col-lg-10">
          <div class="title text-center">
            <h1 class="mb-10">You'll fall in love with India</h1>
            <p>Explore India from Kashmir to Kaniyakumari</p>
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
        <div class="row grid" style="position: relative; height: 1792.98px;">
          <div class="single-portfolio col-sm-4 all corporate" style="position: absolute; left: 0%; top: 0px;">
            <div class="item">
              <img src="img/p1.jpg" alt="Work 1">
              <div class="p-inner">
                <h4><a href="./Pages-inside/GoldenTemple-Info.html">Golden Temple</a></h4>
                <div class="cat">Punjab</div>
              </div>
            </div>
          </div>
          <div class="single-portfolio col-sm-4 all personal" style="position: absolute; left: 33.2724%; top: 0px;">
            <div class="item">
              <img src="img/p2.jpg" alt="Work 1">
              <div class="p-inner">
                <h4>Gwalior Fort</h4>
                <div class="cat">Madhya Pradesh</div>
              </div>
            </div>
          </div>
          <div class="single-portfolio col-sm-4 all agency" style="position: absolute; left: 66.6362%; top: 0px;">
            <div class="item">
              <img src="img/p9.jpg" alt="Work 1">
              <div class="p-inner">
                <h5>Twang</h5>
                <div class="cat">Arunachal Pradesh</div>
              </div>
            </div>
          </div>
          <div class="single-portfolio col-sm-4 all portal" style="position: absolute; left: 66.6362%; top: 444px;">
            <div class="item">
              <img src="img/p12.jpg" alt="Work 1">
              <div class="p-inner">
                <h5>Alleppey</h5>
                <div class="cat">Kerala</div>
              </div>
            </div>
          </div>

          <div class="single-portfolio col-sm-4 all corporate" style="position: absolute; left: 0%; top: 448px;">
            <div class="item">
              <img src="img/p5.jpg" alt="Work 1">
              <div class="p-inner">
                <h4>Camel Safari</h4>
                <div class="cat">Rajasthan</div>
              </div>
            </div>
          </div>
          <div class="single-portfolio col-sm-4 all personal" style="position: absolute; left: 33.2724%; top: 449px;">
            <div class="item">
              <img src="img/p6.jpg" alt="Work 1">
              <div class="p-inner">
                <h4>Sanchi Stupa</h4>
                <div class="cat">Madhya Pradesh</div>
              </div>
            </div>
          </div>
          <div class="single-portfolio col-sm-4 all agency" style="position: absolute; left: 66.6362%; top: 889px;">
            <div class="item">
              <img src="img/p7.jpg" alt="Work 1">
              <div class="p-inner">
                <h5>Umngot river</h5>
                <div class="cat">Meghalaya</div>
              </div>
            </div>
          </div>
          <div class="single-portfolio col-sm-4 all portal" style="position: absolute; left: 33.2724%; top: 897px;">
            <div class="item">
              <img src="img/p10.jpg" alt="Work 1">
              <div class="p-inner">
                <h5>Vivekananda Rock Memorial</h5>
                <div class="cat">Tamil Nadu</div>
              </div>
            </div>
          </div>
          <div class="single-portfolio col-sm-4 all corporate" style="position: absolute; left: 0%; top: 898px;">
            <div class="item">
              <img src="img/p4.jpg" alt="Work 1">
              <div class="p-inner">
                <h4>Mehrangarh Fort</h4>
                <div class="cat">Rajasthan</div>
              </div>
            </div>
          </div>
          <div class="single-portfolio col-sm-4 all personal" style="position: absolute; left: 66.6362%; top: 1335px;">
            <div class="item">
              <img src="img/p3.jpg" alt="Work 1">
              <div class="p-inner">
                <h4>Hampi</h4>
                <div class="cat">Karnataka</div>
              </div>
            </div>
          </div>
          <div class="single-portfolio col-sm-4 all agency" style="position: absolute; left: 33.2724%; top: 1343px;">
            <div class="item">
              <img src="img/p8.jpg" alt="Work 1">
              <div class="p-inner">
                <h5>Mon</h5>
                <div class="cat">Myanmar</div>
              </div>
            </div>
          </div>
          <div class="single-portfolio col-sm-4 all portal" style="position: absolute; left: 0%; top: 1347px;">
            <div class="item">
              <img src="img/p11.jpg" alt="Work 1">
              <div class="p-inner">
                <h5>Colva Beach</h5>
                <div class="cat">Goa</div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import {getPlaces, getUser} from '@/api';
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
  }
};
</script>
