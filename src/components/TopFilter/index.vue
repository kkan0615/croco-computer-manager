<template>
  <div>
    <div
      class="d-flex"
    >
      <!-- @TODO: 나중에 meta.title로 변경하기 + i18n 추가 -->
      <div
        class="subtitle-6"
      >
        {{ $t('router.' + $route.name + '.title') }}
      </div>
      <v-spacer />
      <v-breadcrumbs
        class="pa-0"
        :items="breadcrumbs"
      />
    </div>
    <v-divider />
    <!-- Filter 부분 -->
    <div
      class="mt-1"
    >
      <v-row
        class="compact-form pa-0"
      >
        <v-col
          :cols="3"
        >
          <v-text-field
            label="title"
            height="10px"
            outlined
            dense
          />
        </v-col>
        <v-col
          :cols="3"
        >
          <v-text-field
            label="title"
            height="10px"
            outlined
            dense
          />
        </v-col>
        <v-col
          :cols="3"
        >
          <v-text-field
            label="title"
            height="10px"
            outlined
            dense
          />
        </v-col>
        <v-col
          :cols="2"
        >
          <v-text-field
            label="title"
            height="10px"
            outlined
            dense
          />
        </v-col>
        <v-col
          :cols="1"
        >
          <v-btn
            color="primary"
          >
            {{ $t('components.topFilter.search') }}
          </v-btn>
        </v-col>
      </v-row>
    </div>
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
