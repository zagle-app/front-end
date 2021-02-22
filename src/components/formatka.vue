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
    addConsult(data){
      data["dane"] = this.values;
      this.$http.post();
    }
  },
}

</script>
<style lang="scss">
@import './node_modules/@braid/vue-formulate/themes/snow/snow.scss';
</style>
