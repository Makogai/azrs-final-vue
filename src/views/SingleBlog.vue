<template>
  <div v-if="blog">
    <section class="banner-area relative" id="home"
             :style="`background: url(${getImageUrl(blog)}) no-repeat center center!important; background-size: cover!important;`"
    >
      <div class="overlay overlay-bg"></div>
      <div class="container">
        <div class="row fullscreen d-flex align-items-center justify-content-center" style="height: 475px;">
          <div class="banner-content col-lg-10">
            <h1 style="font-size: 3rem!important;">
              {{ blog.title }}
            </h1>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <p v-html="blog.content"></p>

          <div class="blog-info">
            <p class="blog-author">
              <span>Posted by:</span> {{ blog.user.name }}
            </p>
            <p class="blog-date">
              <span>Posted on:</span> {{ formatDate(blog.created_at) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script>
import { getBlog } from '@/api';

export default {
  name: "SingleBlog",
  data() {
    return {
      blog: null,
    };
  },

  mounted() {
    getBlog(this.$route.params.id).then((res) => {
      this.blog = res.data.data;
    });
  },

  methods: {
    getImageUrl(blog) {
      return blog.image.length > 0 ? blog.image[0].url : require('@/assets/img/placeholder.png');
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
  },
};
</script>

<style>
/* Existing styles... */

.blog-info {
  margin-top: 30px;
}

.blog-author,
.blog-date {
  font-size: 16px;
  margin-bottom: 10px;
}

.blog-author span,
.blog-date span {
  font-weight: bold;
}

</style>
