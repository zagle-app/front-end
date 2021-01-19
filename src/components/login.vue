<template>
  <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
</template>

<script>
import GoogleLogin from 'vue-google-login';
export default {
  name: 'login',
  data() {
    return {
      params: {
        client_id: "637993854274-8lo6ukh579ed0b4i0jjikqqppiqa23qj.apps.googleusercontent.com"
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    }
  },
  components: {
    GoogleLogin
  },
  methods: {
    onSuccess(googleUser) {
      console.log(googleUser);
      let loggedUser = googleUser['Bc'];
      document.cookie = "token=" + loggedUser['access_token'];
      location.reload();
    }
  }
}
  </script>
