<template>
  <FormulateForm
      v-model="values"
      :schema="schema"
      @submit="generateJson"
  />
</template>
<script>

export default {
  name: 'formatka2',
  data () {
    return {
      values: {},
      schema: [
        {
          "component": "h3",
          "children": "Wybierz konsultację"
        },
        {
          "type": "select",
          "label": "Dostępni konsultanci",
          "name": "konsultant",
          "validation": "required",
          "options": {
            "1": "Paweł Włodarczyk",

          }
        },
        {
          "type":"datetime-local",
          "label": "Data",
          "name": "eventStartTime",
          "help": "Wybierz datę",
          "validation": "required"
        },

        {
          "type":"email",
          "label": "E-mail",
          "name": "email",
          "help": "Wpisz swój e-mail",
          "validation": "required"
        },
        {
          "type": "submit"
        }
      ]
    }
  },
  methods:{
    generateJson(data) {
      data['token'] = this.$cookies.get('token');
      this.$http.post("http://localhost:3000/event", data);
    }
  },
}

</script>
<style lang="scss">

</style>
