<template>
  <div class="about">
      <v-row style="max-height: 100%">
        <v-col align="center" style="margin-top: 10%">
          <formatka2></formatka2>
        </v-col>
        <v-col>
          <kalendarz></kalendarz>
        </v-col>
      </v-row>
  </div>
</template>

<script>
import kalendarz from "@/components/kalendarz";
import formatka2 from "@/components/formatka2";

export default {
  name:"About",
  components: {
    kalendarz,
    formatka2
  }
}
</script>

