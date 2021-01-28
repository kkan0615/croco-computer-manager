<template>
  <div>
    <v-row
      align="center"
      justify="center"
    >
      <div
        class="pt-2"
      >
        <v-card
          class="pa-2"
          outlined
        >
          <v-img
            alt="logo"
            src="@/assets/uvcLogo.png"
          />
        </v-card>
        <div
          class="text-center text-h6 my-2"
        >
          Version: {{ version }}
        </div>
        <div
          class="text-center text-h6 my-2"
        >
          Copyright © UVC Corp. All Rights Reserved
        </div>
      </div>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'


@Component({
  name: 'SettingDialogAboutAppbarGeneral'
})
export default class SettingDialogAboutAppbarGeneral extends Vue {
  private version = require('../../../../../../package.json').version
}
</script>
