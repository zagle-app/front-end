<template>
  <FormulateForm
      v-model="values"
      :schema="schema"
      @submit="generateJson"
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
          "name": "summary",
          "validation": "required"
        },

        {
          "type":"datetime-local",
          "label": "Data",
          "name": "eventStartTime",
          "help": "Wybierz datę",
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
      this.$http.post("https://zagle-app-calendar-server.herokuapp.com/event", data);
    }
  },
}

</script>
<style lang="scss">
@import './node_modules/@braid/vue-formulate/themes/snow/snow.scss';
</style>
