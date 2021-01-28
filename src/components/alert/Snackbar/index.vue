<template>
  <v-snackbar
    v-model="show"
    :color="snackbar.color"
    :timeout="snackbar.timeout"
    top
    multi-line
  >
    <div
      class="text-body-1"
    >
      {{ snackbar.content }}
    </div>
    <template #action="{ attrs }">
      <v-btn
        v-bind="attrs"
        text
        @click="onClickClose"
      >
        {{ $t('snackbar.close') }}
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import _ from 'lodash'
import { SnackbarOption as SnackbarOption } from '@/interfaces/snackbar'

@Component
export default class Snackbar extends Vue {
  private show = false
  private snackbar: SnackbarOption = {} as SnackbarOption

  created () {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'alert/showSnackbar') {
        this.snackbar = _.cloneDeep(state.alert.snackbar)
        this.show = true
      }
    })
  }

  onClickClose () {
    /* If there is callback function, run it */
    if (this.snackbar.callback)
      this.snackbar.callback()

    this.show = false
  }
}
</script>
