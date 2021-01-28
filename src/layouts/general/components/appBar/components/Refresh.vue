<template>
  <v-btn
    icon
    @click="refresh"
  >
    <v-icon>
      refresh
    </v-icon>
  </v-btn>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'RefreshMenuAppbarGeneral'
})
export default class RefreshMenuAppbarGeneral extends Vue {
  private refresh () {
    location.reload()
  }
}
</script>
