<template>
  <div>
    <section class="banner-area relative" id="home">
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row fullscreen d-flex align-items-center justify-content-center" style="height: 475px;">
          <div class="banner-content col-lg-10">
            <h1 class="banner-title">Contact Us</h1>
          </div>
        </div>
      </div>
    </section>

    <div class="container mb-4">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="contact-form">
            <h2 class="section-title">Get in Touch</h2>
            <p class="section-description">
              Have any questions or want to get in touch with us? Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="formData.name" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="formData.email" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="formData.message" class="form-control" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Mock submit function
      console.log('Form submitted:', this.formData);
      // Reset form data
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
      this.$toast.success("successfully sent!", {
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

.contact-form {
  margin-top: 30px;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #212529;
}

.section-description {
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: #212529;
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: 600;
  color: #212529;
}

.form-control {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  color: #212529;
}

textarea {
  resize: vertical;
  color: #212529;
}

.btn-primary {
  padding: 10px 20px;
  font-weight: 600;
  background-color: #8DA3FF;
  border: none;
  border-radius: 0;
  color: #fff;
}
</style>


