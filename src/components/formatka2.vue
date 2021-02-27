<template>
  <FormulateForm
      v-model="values"
      :schema="schema"
      @submit="generateJson">
    <FormulateInput
        :options="finalArr"
        type="select"
        placeholder="Wybierz opcję"
        label="Wybierz konsultanta"
    >
    </FormulateInput>
    <FormulateInput
        :options="finalArr"
        type="select"
        placeholder="Wybierz termin"
        label="Wybierz Termin"
    >
    </FormulateInput>
    <FormulateInput type="submit"></FormulateInput>
  </FormulateForm>
</template>
<script>



export default {
  // TODO Check Avilbity of consultant and
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
      finalArr: {},
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
      this.$http.post("https://zagle-app-srv.herokuapp.com/event", data)
          .then((data)=>{
            if(data.data && data.data.error){
              alert(data.data.error)
            }else{
              alert("Poprawnie utworzono meeting!")
            }
          })
          .catch((err)=>{
            alert(err);
          });
    }
  },
}
</script>
<style lang="scss">

</style>
