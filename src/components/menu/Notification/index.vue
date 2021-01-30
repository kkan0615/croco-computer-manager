<template>
  <v-menu
    v-model="open"
    nudge-bottom="50"
    bottom
    :close-on-content-click="false"
    transition="scale-transition"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        class="shake-btn"
        icon
        v-bind="attrs"
        small
        v-on="on"
      >
        <v-icon>
          notifications
        </v-icon>
      </v-btn>
    </template>
    <v-card
      elevation="0"
      :width="400"
      :height="390"
    >
      <v-card-title
        class="text-subtitle-1 pa-2"
      >
        알림 ({{ notifications.length }})
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-alert
          v-for="notification in notifications"
          :key="notification.id"
          :color="notification.color"
          :type="notification.type"
          :icon="notification.icon"
          dismissible
          dense
          @input="removeNotification(notification)"
        >
          {{ notification.message }}
        </v-alert>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'
import { AlertState } from '@/interfaces/alert'
import { NotificationOption } from '@/interfaces/system/notification'

@Component({
  name: 'NotificationMenu',
  computed: {
    ...mapState('alert', {
      notifications: state => (state as AlertState).notifications
    })
  }
})
export default class NotificationMenu extends Vue {
  private readonly notifications !: Array<NotificationOption>
  private open = false

  private async removeNotification (notification: NotificationOption) {
    await this.$store.dispatch('alert/removeNotification', notification)
  }
}
</script>
<style>
  .shake-btn:hover {
    animation: shake 0.5s;
    animation-iteration-count: infinite;
  }

  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(1deg); }
    50% { transform: translate(-1px, 2px) rotate(-1deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-1deg); }
    80% { transform: translate(-1px, -1px) rotate(1deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
</style>
