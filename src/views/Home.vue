<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col align="center"><img alt="Vue logo" src="../assets/logo.png"></v-col>
        <v-col style="margin: auto;" align="start" ><login></login></v-col>
      </v-row>
      <v-row>
        <v-col align="center"><formatka></formatka></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import login from '@/components/login.vue'
import formatka from '@/components/formatka.vue'

export default {
  name: 'Home',
  components: {
    formatka,
    login
  }
}
</script>
