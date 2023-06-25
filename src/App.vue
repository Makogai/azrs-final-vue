<template>
  <div id="app">
    <main-layout>
      <template v-slot:content>
        <router-view/>
      </template>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout.vue'

export default {
  name: 'app',
  components: {
    MainLayout
  }
}
</script>
