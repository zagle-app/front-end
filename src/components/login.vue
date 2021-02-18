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
        client_id: "464237437309-04j2i50r5vjc7tlallan74ok17bjtmqb.apps.googleusercontent.com"
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
      const keysArr = Object.keys(googleUser);
      for(let i=0;i<keysArr.length;i++){
        let propablyAcessToken = googleUser[keysArr[i]].access_token;
        if(propablyAcessToken){
          document.cookie = "token=" + googleUser[keysArr[i]].access_token;
        }
      }
      
      location.reload();
    }
  }
}
  </script>
