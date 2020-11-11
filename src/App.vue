<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Konsultant</router-link> |
      <router-link to="/about">Klient</router-link>
    </div>

  </div>
</template>


<template>
  <div class="ma-12 pa-12">
    <template>
        <v-navigation-drawer
            permanent
            expand-on-hover
            absolute
        >
          <v-list>
            <v-list-item>
                <v-img contain max-height="5em" src="./assets/logomini.png"></v-img>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list
              nav
              dense
          >
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-icon>
              <v-list-item-title><router-link to="/">Konsultant</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title><router-link to="/klient">Klient</router-link></v-list-item-title>
            </v-list-item>
          </v-list>

        </v-navigation-drawer>
      <v-container>
        <router-view/>
      </v-container>
    </template>
  </div>
</template>

<style lang="scss">
@import './node_modules/@braid/vue-formulate/themes/snow/snow.scss';
</style>
