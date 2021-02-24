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
import googleCalendarPlugin from '@fullcalendar/google-calendar';

export default {
  beforeCreate() {
    let links = []
    let events = []
    this.$http.get("https://zagle-app-db.herokuapp.com/consultant/", {
          mode: 'cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
    }).then(function (response) {
      response["data"]["_embedded"]["consultant"].map(x => {
        links.push(x["_links"]["meetings"])
      })
    }).finally(() => {
      this.links = links;
    })

    links.map(x => {
      this.$http.get(x["href"], {
        mode: 'cors',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      }).then(function (response) {
        events.push(response["_embedded"]["availability"])
      })

    })
    this.events = events
  },
  name: "kalendarz",
  components: {
    FullCalendar
  },
  data() {
    return {
      links: [],
      events: [],
      calendarOptions: {
        plugins: [ timeGridPlugin, interactionPlugin,bootstrapPlugin,googleCalendarPlugin ],
        initialView: 'timeGridWeek',
        locale: plLocale,
        googleCalendarApiKey: 'AIzaSyB7IAXQSfJXAAwMenXf0uoLCIhCgmVveXY',
        events: {
          googleCalendarId: this.$cookies.get("mail")
        },
        themeSystem: 'bootstrap'
      }
    }
  }
}

</script>

<style scoped>

</style>
