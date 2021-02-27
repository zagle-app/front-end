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
      for (let i = 0; i < keysArr.length; i++) {
        let propablyAcessToken = googleUser[keysArr[i]].access_token;
        if (propablyAcessToken) {
          document.cookie = "token=" + googleUser[keysArr[i]].access_token;
        }
        const keysToMail = Object.keys(googleUser[keysArr[i]]);
        if(keysToMail){

          let myProp=googleUser[keysArr[i]];
          keysToMail.map(x=>{

            if( myProp[x]){
            const re = new RegExp(/\S+@\S+.\S+/);
            if(re.test(myProp[x])){
              document.cookie = "mail=" + myProp[x];
            }
          }
          })


        }
        }

      let obj = googleUser[keysArr[2]];
      const keysArr2 = Object.keys(obj);
      let name = googleUser[keysArr[2]][keysArr2[2]]
      let surname = googleUser[keysArr[2]][keysArr2[3]]
      let mail = googleUser[keysArr[2]][keysArr2[5]]

     let data = {
        "name": name,
        "lastName": surname,
        "mailAdress": mail,
        "bio": " "
      }
      this.$http.post("https://zagle-app-db.herokuapp.com/consultant/", data);
      location.reload();
      }
    }
  }
</script>
