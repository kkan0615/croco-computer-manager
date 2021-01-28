<template>
  <v-menu
    :close-on-click="false"
    offset-y
  >
    <template #activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        icon
        dark
        v-on="on"
      >
        <v-icon>settings</v-icon>
      </v-btn>
    </template>
    <v-divider />
    <v-list
      class="pa-0"
    >
      <v-list-item>
        <DarkModeSwitch />
      </v-list-item>
      <v-divider />
    </v-list>
    <LocaleList
      dense
      :title="$t('components.localeList.language')"
    />
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LocaleList from '@/components/LocaleList/index.vue'
import DarkModeSwitch from '@/components/input/DarkModeSwitch/index.vue'

@Component({
  name: 'SettingLogin',
  components: { DarkModeSwitch, LocaleList }
})
export default class SettingLogin extends Vue {
}
</script>
