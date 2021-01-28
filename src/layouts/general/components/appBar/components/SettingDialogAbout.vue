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
            src="https://png.pngtree.com/png-vector/20200423/ourmid/pngtree-cute-crocodile-cartoon-illustration-png-image_2191787.jpg"
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
