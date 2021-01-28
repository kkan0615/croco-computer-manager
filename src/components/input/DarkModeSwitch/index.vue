<template>
  <div
    class="d-flex"
  >
    <v-icon
      class="mr-3"
      @click="setToLight"
    >
      light_mode
    </v-icon>
    <v-switch
      v-model="$vuetify.theme.dark"
      inset
      dense
      @change="handleDarkModeSwitch"
    />
    <v-icon
      class="mr-1"
      @click="setToDark"
    >
      dark_mode
    </v-icon>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getOppositeTheme, setCurrentTheme } from '@/utils/theme'

@Component({
  name: 'DarkModeSwitch'
})
export default class DarkModeSwitch extends Vue {
  public handleDarkModeSwitch () {
    setCurrentTheme(getOppositeTheme())
  }

  public setToLight () {
    setCurrentTheme('light')
    this.$vuetify.theme.dark = false
  }

  public setToDark () {
    setCurrentTheme('dark')
    this.$vuetify.theme.dark = true
  }
}
</script>
<style lang="scss">

</style>
