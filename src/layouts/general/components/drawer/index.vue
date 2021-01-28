<template>
  <v-navigation-drawer
    color="secondary"
    app
    :value="isFullClosingMode"
    :width="220"
    mini-variant
    :mini-variant-width="80"
    mobile-breakpoint="xs"
    @input="onChangeDrawer"
  >
    <div
      class="pa-5 cursor-pointer"
      @click="moveToHome"
    >
      <v-img
        alt="logo"
        src="https://png.pngtree.com/png-vector/20200423/ourmid/pngtree-cute-crocodile-cartoon-illustration-png-image_2191787.jpg"
      />
    </div>
    <v-divider />
    <div
      v-for="router of mainMenus"
      :key="router.name"
    >
      <nav-menu-content
        :program="router"
      />
    </div>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavMenuContent from '@/layouts/general/components/drawer/components/NavMenuContent.vue'
import { RouteConfig } from 'vue-router'
import { mainRouter } from '@/router/modules/main'
@Component({
  name: 'Drawer',
  components: {
    NavMenuContent
  }
})
export default class Drawer extends Vue {
  // @TODO: router를 vuex에 넣는 것은 조금 나중에 하겠음
  private mainMenus: Array<RouteConfig> = mainRouter

  /**
   * miniVariant 모드이면 무조건 full closing mode가 아님
   * miniVariant 모드가 아니면, close 시킴
   */
  private get isFullClosingMode () {
    if (!this.$vuetify.breakpoint.xs && this.$store.state.application.miniVariant) return true
    return this.$store.getters['application/isOpenDrawer']
  }

  // created () {
  //   if (this.$router.options.routes && this.$router.options) {
  //     this.menu = this.$router.options.routes.filter(each => !each.meta.hidden)
  //   }
  // }

  /**
   * @param bool - expand hover has been changed
   */
  private async onChangeDrawer (bool: boolean) {
    bool ? await this.$store.dispatch('application/openDrawer') : await this.$store.dispatch('application/closeDrawer')
  }

  private async moveToHome () {
    /* 이미 home 즉 index 페이지에 있으면 이동하지 않아도된다. */
    if (this.$route.name !== 'Home')
      await this.$router.push({ name: 'Home' })
  }
}
</script>
