<template>
  <FormulateForm
      v-model="values"
      :schema="schema"
      @submit="addConsult"
  />
</template>
<script>

export default {
  name: 'formatka',
  data () {
    return {
      values: {},
      schema: [
        {
          "component": "h3",
          "children": "Dodaj konsultację"
        },
        {
          "label": "Nazwa wydarzenia",
          "name": "title",
          "validation": "required"
        },

        {
          "type":"datetime-local",
          "label": "Data Start",
          "name": "eventStartTime",
          "help": "Wybierz datę rozpoczecia",
          "validation": "required"
        },
        {
          "type":"datetime-local",
          "label": "Data Koniec",
          "name": "eventEndTime",
          "help": "Wybierz datę zakonczenia",
          "validation": "required"
        },
        {
          "type": "submit"
        }
      ]
    }
  },
  methods:{
    async addConsult(data){
      let consultantId = await this.getIDByMail(this.$cookies.get("mail"))

      const event = {
        title: data.title,
        start: data.eventStartTime,
        end: data.eventEndTime,
        available: true,
        description: '',
        consultantIde: Number(consultantId),
      }

      await this.saveToDB(event);
    },
    async getIDByMail(conultantMail) {
      let consultants = await this.$http.get("https://zagle-app-db.herokuapp.com/consultant")

      consultants = consultants.data._embedded.consultant || [];
      const consultant =
          consultants.filter((c) => c.mailAdress === conultantMail).pop() ||
          false;

      if (consultant) {
        return consultant._links.self.href
            .split("https://zagle-app-db.herokuapp.com/consultant/")
            .pop() || false;
      }
    },
    async saveToDB(event) {
      await this.$http.post("https://zagle-app-db.herokuapp.com/availability", event);
      return alert("Dodano poprawnie meeting :)")
    }
  },
}

</script>
<style lang="scss">
@import './node_modules/@braid/vue-formulate/themes/snow/snow.scss';
</style>
