<template>
  <v-navigation-drawer
    color="secondary"
    app
    :value="isFullClosingMode"
    :width="220"
    :mini-variant="$store.getters['application/isMiniVariant']"
    :expand-on-hover="$store.getters['application/isMiniVariant']"
    :mini-variant-width="70"
    mobile-breakpoint="xs"
    @input="onChangeDrawer"
  >
    <!--    v-if="$store.getters['application/isOpenDrawer']"-->
    <div
      class="pa-5 cursor-pointer"
      @click="moveToHome"
    >
      <v-img
        alt="logo"
        src="@/assets/uvcLogo.png"
      />
    </div>
    <v-divider />
    <v-list
      v-for="children of menu"
      :key="children.name"
      dense
      nav
      class="py-0"
    >
      <navigation-menu-contents
        v-if="!children.meta.hidden"
        :program="children"
        parent-path=""
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NavigationMenuContents from '@/layouts/general/components/drawer/components/navigation-menu-contents.vue'
import { RouteConfig } from 'vue-router'

@Component({
  name: 'Drawer',
  components: {
    NavigationMenuContents
  }
})
export default class Drawer extends Vue {
  // @TODO: router를 vuex에 넣는 것은 조금 나중에 하겠음
  private menu: Array<RouteConfig> = []

  /**
   * miniVariant 모드이면 무조건 full closing mode가 아님
   * miniVariant 모드가 아니면, close 시킴
   */
  private get isFullClosingMode () {
    if (!this.$vuetify.breakpoint.xs && this.$store.state.application.miniVariant) return true
    return this.$store.getters['application/isOpenDrawer']
  }

  created () {
    if (this.$router.options.routes && this.$router.options) {
      this.menu = this.$router.options.routes.filter(each => !each.meta.hidden)
    }
  }

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
