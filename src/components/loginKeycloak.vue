<template>
<VBtn @click="loadKeycloak()">Zaloguj się</VBtn>
</template>

<script>
import Keycloak from 'keycloak-js';
export default {
  name: "loginKeycloak",
  authenticated: null,
  methods: {
    loadKeycloak() {
      let options = {
        "realm": "zagle",
        "auth-server-url": "https://zagle-app-kejlok.herokuapp.com/auth/",
        "ssl-required": "external",
        "clientId": "kalendarz-zagle",
        "public-client": true,
        "verify-token-audience": true,
        "use-resource-role-mappings": true,
        "confidential-port": 0,
        "enable-cors" : true
      }
      const keycloak = Keycloak(options);
      keycloak.init({
        onLoad: 'login-required',
        promiseType: 'native'
      }).then(authenticated => {
        this.authenticated = authenticated;
        localStorage.setItem('token', keycloak.token);
        localStorage.setItem('idToken', keycloak.idToken);
        console.log(authenticated)
      });
    }
  },
}
</script>

<style scoped>

</style>
