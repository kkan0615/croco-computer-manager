<template>
  <v-menu
    v-if="user.id >= 0"
    nudge-bottom="50"
    bottom
    transition="scale-transition"
    :close-on-content-click="false"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        icon
        v-bind="attrs"
        small
        v-on="on"
      >
        <v-avatar
          v-if="user.image"
          size="28"
        >
          <img
            :src="user.image"
            :alt="user.name"
          >
        </v-avatar>
        <v-avatar
          v-else
          size="36"
        >
          <span>{{ user.name.slice(0, 2) }}</span>
        </v-avatar>
      </v-btn>
    </template>
    <v-card
      max-width="200"
      elevation="0"
    >
      <v-list
        class="pa-1"
        dense
      >
        <v-list-item>
          <v-list-item-avatar>
            <img
              :src="user.image"
              :alt="user.name"
            >
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ user.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ user.nickname }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list
        class="pa-1"
        dense
      >
        <v-list-item>
          <v-list-item-icon>
            <v-icon>portrait</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ $t('general.authMenu.profile') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>settings</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ $t('general.authMenu.setting') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
      <v-list
        class="pa-1"
        dense
      >
        <v-list-item
          class="py-0"
        >
          <v-list-item-action>
            <dark-mode-switch />
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider />
      <!-- Logout button, list item -->
      <v-list
        class="pa-1"
        dense
      >
        <v-list-item
          @click="logout"
        >
          <v-list-item-icon>
            <v-icon>login</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ $t('general.authMenu.logout') }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import DarkModeSwitch from '@/components/input/DarkModeSwitch/index.vue'
import { UserMixin } from '@/mixins/user'

@Component({
  name: 'AuthMenu',
  components: {
    DarkModeSwitch
  }
})
export default class AuthMenu extends Mixins(UserMixin) {
  private async logout () {
    const success = await this.$store.dispatch('user/logout')
    if (success) await this.$router.push({ name: 'Login' })
  }
}
</script>
