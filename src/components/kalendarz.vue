<template>
  <FullCalendar :options="calendarOptions" />
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import FullCalendar from '@fullcalendar/vue'
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import plLocale from '@fullcalendar/core/locales/pl';

export default {
  name: "kalendarz",
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ timeGridPlugin, interactionPlugin, googleCalendarPlugin,bootstrapPlugin ],
        initialView: 'timeGridWeek',
        locale: plLocale,
        googleCalendarApiKey: 'AIzaSyANKYAAMLdZCEdUM3iLQESgYw88UifkLwo',
        events: {
          googleCalendarId: 'shinigamipl123@gmail.com'
        },
        themeSystem: 'bootstrap'
      }
    }
  }
}

</script>

<style scoped>

</style>
