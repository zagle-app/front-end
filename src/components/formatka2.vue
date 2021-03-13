<template>
  <div class="container">
    <FormulateForm
        v-model="values"
        :schema="schema"
        @submit="generateJson">
      <FormulateInput
          :options="finalArr"
          type="select"
          v-model="email"
          placeholder="Wybierz opcję"
          label="Wybierz konsultanta"
      >
      </FormulateInput>
      <FormulateInput
          :options="dateArr"
          type="select"
          placeholder="Wybierz termin"
          label="Wybierz Termin"
      >
      </FormulateInput>
      <FormulateInput type="submit"></FormulateInput>
    </FormulateForm>
    <v-snackbar
        v-model="snackbar"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
            color="red"
            text
            v-bind="attrs"
            @click="snackbar = false"
        >
          Zamknij
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>

export default {
  beforeCreate() {
    let arr = []
    let arr2 = []
    let final = []
    let events = []
    this.$http.get("https://zagle-app-db.herokuapp.com/consultant/", {
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      }
    })
    .then(function (response){
      response["data"]["_embedded"]["consultant"].map(x=>{
        arr.push((x.name || "Nie").concat(" ").concat(x.lastName || "Obecny"));
        events.push(x["_links"]["meetings"])
      })
      response["data"]["_embedded"]["consultant"].map(x=>{
        arr2.push(x.mailAdress || "brak@brak.pl");
      })
    }).finally(() => {
      arr.forEach((element, index) => {
        let element2 = arr2[index];
        let x = String(index);
        final.push({
          id: x,
          label: element,
          value: element2
        })
      })
      this.finalArr = final;
    })
  },
  name: 'formatka2',
  data () {
    return {
      snackbar: false,
      text: String,
      email: null,
      finalArr: {},
      dateArr: Array,
      values: {},
      schema: [
        {
          "component": "h3",
          "children": "Wybierz konsultację"
        }
      ]
    }
  },
  methods:{
    generateJson(data) {
      data['form'] = this.values;
      data['token'] = this.$cookies.get('token');
      console.log(data)
      this.$http.post("https://zagle-app-srv.herokuapp.com/event", data)
          .then((data)=>{
            if(data.data && data.data.error){
              this.text = 'Wystąpił błąd';
              this.snackbar = true
            }else{
              this.text = 'Zarezerwowano meeting'
              this.snackbar = true
            }
          })
          .catch((err)=>{
            this.text = err;
            this.snackbar = true
          });

    }
  },
  watch: {
    email: async function () {
      let arr = [];
      let consultantLink = await this.$http.get('https://zagle-app-db.herokuapp.com/consultant/search/searchByMailAdress?mailAdress='+this.email)
      let arrSliced = consultantLink.data._embedded.consultant[0]._links.consultant.href.split("/");
      let consultantId = arrSliced[4]
      let answer = await this.$http.get('https://zagle-app-db.herokuapp.com/availability/search/searchByConsultantIde?consultantIde='+consultantId)
      answer.data._embedded.meetings.map(function (item) {
        if (item.available === true){
          let slicedDate = item.start.split("T")
          arr.push({
            value: item.start,
            label: item.title + " " + slicedDate[0] + " " + slicedDate[1]
          })
        }
      })
      this.dateArr = arr;
    }
  },
}
</script>
<style lang="scss">

</style>
