<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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
              <v-list-item-title><router-link to="/">Home</router-link></v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title><router-link to="/About">About</router-link></v-list-item-title>
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
</style>
