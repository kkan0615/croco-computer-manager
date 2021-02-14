<template>
  <div
    class="d-flex"
  >
    <!-- @TODO: 나중에 meta.title로 변경하기 + i18n 추가 -->
    <div
      class="subtitle-6"
    >
      {{ $route.name }}
    </div>
    <v-spacer />
    <v-breadcrumbs
      class="pa-0"
      :items="breadcrumbs"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Breadcrumbs } from '@/interfaces/vuetify/breadcrumbs'

@Component({
  name: 'TopFilter'
})
export default class TopFilter extends Vue {
  private breadcrumbs: Array<Breadcrumbs> = []

  created () {
    this.createBreadcrumbs()
  }

  public createBreadcrumbs () {
    const matched = this.$route.matched
    matched.forEach(routeRecord => {
      this.breadcrumbs.push({
        // @TODO: i18n 적용해서 넣기
        text: routeRecord.name,
        disabled: false,
        href: this.$route.name === routeRecord.name ? routeRecord.path : ''
      } as Breadcrumbs)
    })
  }
}
</script>
