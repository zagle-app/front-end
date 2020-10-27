<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <login></login>
  </div>
</template>

<script>
import login from '@/components/login.vue'

export default {
  name: 'Home',
  components: {
    login
  }
}
</script>
