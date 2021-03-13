<template>
  <div class="container">
    <FormulateForm
        v-model="values"
        :schema="schema"
        @submit="addConsult"
    />
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
  name: 'formatka',
  data () {
    return {
      snackbar: false,
      text: String,
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
      this.text = 'Dodano konsultacje';
      this.snackbar = true
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
    }
  },
}

</script>
<style lang="scss">
@import './node_modules/@braid/vue-formulate/themes/snow/snow.scss';
</style>
