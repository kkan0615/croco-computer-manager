<template>
  <v-menu
    nudge-bottom="50"
    bottom
    transition="scale-transition"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        icon
        small
        v-bind="attrs"
        v-on="on"
      >
        <v-icon>language</v-icon>
      </v-btn>
    </template>
    <v-card
      elevation="0"
    >
      <v-list
        dense
      >
        <v-list-item>
          <v-list-item-icon
            class="mr-3"
          >
            <v-icon>language</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ $t('general.languageMenu.language') }}</v-list-item-title>
            <v-list-item-subtitle>{{ $t('general.languageMenu.subTitle') }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <LocaleList />
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LocaleList from '@/components/LocaleList/index.vue'

@Component({
  name: 'LanguageMenu',
  components: { LocaleList }
})
export default class LanguageMenu extends Vue {
}
</script>
