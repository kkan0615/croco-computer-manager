<template>
  <v-btn
    icon
    small
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
  public async refresh () {
    // location.reload()
    await this.$router.go(0)
  }
}
</script>
