<template>
  <v-menu
    v-model="open"
    nudge-bottom="50"
    bottom
    :close-on-content-click="false"
    transition="scale-transition"
  >
    <template #activator="{ on, attrs }">
      <v-badge
        class="mr-3"
        overlap
        bordered
        :content="notifications.length"
        @click="open = true"
      >
        <v-icon
          v-bind="attrs"
          v-on="on"
        >
          notifications
        </v-icon>
      </v-badge>
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
