<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-card>
        <v-card-title>
          404 Not found
        </v-card-title>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'NotFound'
})
export default class NotFound extends Vue {
}
</script>
