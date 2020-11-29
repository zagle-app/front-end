<template>
  <div class="main">
    <v-container>
      <v-row>
        <v-col lg="6" align="center">
          <h1>ConsultAS</h1>
          <p style="margin-top: 1em; color: #41B883"><b>Umów się na spotkanie już teraz!</b></p>
          <v-row>
            <v-col lg="4"><v-icon>mdi-facebook</v-icon></v-col>
            <v-col lg="4"><v-icon>mdi-instagram</v-icon></v-col>
            <v-col lg="4"><v-icon>mdi-twitter</v-icon></v-col>
          </v-row>

        </v-col>
        <v-col align="center" lg="6"><v-img max-width="30%" src="../assets/calendar.png"></v-img></v-col>
      </v-row>
      <v-row>
        <v-col lg="6" align="center"><v-img width="50%" src="../assets/Apple iPhone 11 Pro Max Screenshot 0.png"></v-img></v-col>
        <v-col lg="6" align="center"><v-img width="50%" src="../assets/Apple iPhone 11 Pro Max Screenshot 1.png"></v-img></v-col>
      </v-row>
    </v-container>
    <div class="custom-shape-divider-bottom-1605113956">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
      </svg>
    </div>
    <v-row>
      <v-col align="center"><v-btn color="#41B883" style="color: white" href="/#/klient">Sprawdź sam</v-btn></v-col>
    </v-row>
  </div>
</template>


<script>

export default {
  name: 'Main',
  components: {
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

