import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import $ from 'jquery';
// import 'bootstrap';

// Ensure jQuery is recognized globally.
window.$ = window.jQuery = $;

// Then import your CSS files
import "./assets/css/linearicons.css";
import "./assets/css/font-awesome.min.css";
import "./assets/css/bootstrap.css";
import "./assets/css/magnific-popup.css";
import "./assets/css/nice-select.css";
import "./assets/css/animate.min.css";
// import "./assets/css/owl.carousel.css";
import "./assets/css/main.css";

// Then import other libraries that require jQuery
// Ensure they are also installed via npm
// import 'other-library';

// Then import your JS files
// import './assets/js/other-js-file.js';
import "./assets/js/vendor/bootstrap.min.js";
import "./assets/js/easing.min.js";
import "./assets/js/jquery.ajaxchimp.min.js";
import "./assets/js/jquery.magnific-popup.min.js";
import "./assets/js/owl.carousel.min.js";
import "./assets/js/jquery.sticky.js";
import "./assets/js/jquery.nice-select.min.js";
import "./assets/js/parallax.min.js";
import "./assets/js/mail-script.js";
// import "./assets/js/isotope.pkgd.min.js";
// Ensure isotope is imported before main.js
import "./assets/js/main.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
