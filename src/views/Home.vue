<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col align="center"><img alt="Vue logo" src="../assets/logo.png"></v-col>
      </v-row>
      <v-row v-if="this.$cookies.get('token') !== null">
        <v-col align="center"><formatka></formatka></v-col>
      </v-row>
      <v-row v-else>
        <v-col align="center"><h1 class="title text-primary">Nie jestes zalogowany!</h1></v-col>
      </v-row>
    </v-container>
    <div class="custom-shape-divider-bottom-1605113956">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
      </svg>
    </div>
  </div>
</template>

<script>

import formatka from '@/components/formatka.vue'

export default {
  name: 'Home',
  components: {
    formatka
  }
}
</script>

<style>
.custom-shape-divider-bottom-1605113956 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1605113956 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 175px;
}

.custom-shape-divider-bottom-1605113956 .shape-fill {
  fill: #41B883;
}
</style>
