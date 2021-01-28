<template>
  <v-dialog
    :value="value"
    width="50vw"
  >
    <v-toolbar
      dark
      color="primary"
      dense
    >
      <v-toolbar-title>Settings</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items>
        <v-btn
          icon
          dark
          @click="closeDialog"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-card>
      <v-tabs
        :height="40"
        background-color="secondary"
        @change="onChangeTab"
      >
        <v-tab>General</v-tab>
        <v-tab>Theme</v-tab>
        <v-tab>About</v-tab>
      </v-tabs>
      <v-divider />
      <v-card-text
        class="pt-4"
        style="height: 45vh"
      >
        <setting-dialog-general-appbar-general
          v-if="tabIndex === 0"
        />
        <div
          v-else-if="tabIndex === 1"
        >
          Theme
        </div>
        <setting-dialog-about-appbar-general
          v-else-if="tabIndex === 2"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SettingDialogAboutAppbarGeneral
  from '@/layouts/general/components/appBar/components/SettingDialogAbout.vue'
import SettingDialogGeneralAppbarGeneral
  from '@/layouts/general/components/appBar/components/SettingDialogGeneral.vue'

@Component({
  name: 'SettingDialogAppbarGeneral',
  components: { SettingDialogGeneralAppbarGeneral, SettingDialogAboutAppbarGeneral }
})
export default class SettingDialogAppbarGeneral extends Vue {
  /* Control dialog open status */
  @Prop({ required: true, type: Boolean, default: false })
  private readonly value !: boolean

  private tabIndex = 0

  private onChangeTab (index: number) {
    this.tabIndex = index
  }

  private closeDialog () {
    this.$emit('update:value', false)
    this.$emit('input', false)
  }
}
</script>
