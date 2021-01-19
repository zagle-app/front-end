<template>
  <FullCalendar :options="calendarOptions" />
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import FullCalendar from '@fullcalendar/vue'
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import bootstrapPlugin from '@fullcalendar/bootstrap';
import plLocale from '@fullcalendar/core/locales/pl';

export default {
  beforeCreate() {

  },
  name: "kalendarz",
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ timeGridPlugin, interactionPlugin,bootstrapPlugin ],
        initialView: 'timeGridWeek',
        locale: plLocale,
        events: {
        },
        themeSystem: 'bootstrap'
      }
    }
  }
}

</script>

<style scoped>

</style>
