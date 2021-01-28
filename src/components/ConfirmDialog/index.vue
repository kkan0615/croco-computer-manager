<template>
  <v-dialog
    :value="true"
    :width="width"
    persistent
    @keydown.esc="onClickButtonNo"
  >
    <v-card
      rounded="lg"
      class="confirm-dialog pa-4"
    >
      <!-- Title -->
      <v-row
        class="mx-0 my-2 justify-center"
      >
        <v-icon
          color="primary"
          size="70"
        >
          fas fa-exclamation-triangle
        </v-icon>
      </v-row>
      <v-card-title
        class="justify-center pa-0 ma-4"
      >
        <div
          v-for="line of title.split('\n')"
          :key="line"
        >
          {{ line }}
        </div>
      </v-card-title>
      <!-- Subtitle-->
      <v-card-subtitle
        v-if="subtitle"
      >
        {{ subtitle }}
      </v-card-subtitle>
      <v-divider />
      <!-- Content (Display message) -->
      <v-card-text
        class="pa-4 my-2 text-center"
      >
        <div
          v-for="line in content.split('\n')"
          :key="line"
        >
          {{ line }}
        </div>
      </v-card-text>
      <v-divider />
      <v-card-actions
        class="justify-center mt-2"
      >
        <v-btn
          text
          large
          rounded
          elevation="0"
          width="120"
          @click="onClickButtonNo"
        >
          {{ buttonNoText }}
        </v-btn>
        <v-btn
          color="primary"
          large
          rounded
          elevation="0"
          width="120"
          @click="onClickButtonYes"
        >
          {{ buttonYesText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'ConfirmDialog'
})
export default class ConfirmDialog extends Vue {
  private title = '확인창'
  private subtitle = ''
  private content = ''
  private buttonNoText = '아니오'
  private buttonYesText = '예'
  private width = '340px'
  private status = false

  mounted () {
    window.addEventListener('keydown', this.onKeyDown)
  }

  destroyed () {
    window.removeEventListener('keydown', this.onKeyDown)
  }

  private onKeyDown (event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.stopPropagation()
      this.onClickButtonYes()
    }
  }

  private onClickButtonYes () {
    this.$emit('input', true)
    this.status = true
    this.$destroy()
  }

  private onClickButtonNo () {
    this.$emit('input', false)
    this.status = false
    this.$destroy()
  }
}
</script>
<style lang="scss" scoped>
  .confirm-dialog {
    box-sizing: border-box;
    .content {
      line-height: 1.8;
    }
  }
</style>
