<template>
  <v-app-bar
    :color="$vuetify.theme.dark ? 'secondary' : 'primary'"
    :dark="!$vuetify.theme.dark"
    app
    :height="30"
    dense
    elevation="0"
  >
    <v-app-bar-nav-icon
      @click="onClickNavIcon"
    />
    <!-- Search bar -->
    <searchbar />
    <v-spacer />
    <refresh-menu-appbar-general />
    <!--    언어팩 -->
    <language-menu />
    <!-- Notification 메뉴 -->
    <notification-menu />
    <!-- user 관련되는 menu -->
    <auth-menu />
    <v-menu
      left
      bottom
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          @click="() => {}"
        >
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AuthMenu from '@/layouts/general/components/appBar/components/AuthMenu.vue'
import LanguageMenu from '@/layouts/general/components/appBar/components/LanguageMenu.vue'
import Searchbar from '@/layouts/general/components/appBar/components/Searchbar.vue'
import NotificationMenu from '@/components/menu/Notification/index.vue'
import RefreshMenuAppbarGeneral from '@/layouts/general/components/appBar/components/Refresh.vue'

@Component({
  name: 'AppBar',
  components: { RefreshMenuAppbarGeneral, NotificationMenu, Searchbar, LanguageMenu, AuthMenu }
})
export default class AppBar extends Vue {
  mounted () {
    window.addEventListener('keydown', this.keydownHandler)
  }

  beforeDestroy () {
    window.removeEventListener('keydown', this.keydownHandler)
  }

  private async onClickNavIcon () {
    this.$store.getters['application/isOpenDrawer'] ?
      await this.$store.dispatch('application/closeDrawer') :
      await this.$store.dispatch('application/openDrawer')
  }

  private keydownHandler (e: KeyboardEvent) {
    if (e.altKey && e.key === '1') {
      this.onClickNavIcon()
    }
  }
}
</script>

<style lang="scss">
  .pointer {
    cursor: pointer;
  }
</style>
