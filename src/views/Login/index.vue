<template>
  <v-col
    :cols="12"
    :lg="5"
    :md="5"
    class="login-form"
  >
    <div
      class="d-flex"
    >
      <v-card
        v-if="!$vuetify.breakpoint.xs"
        width="40%"
        elevation="0"
        tile
        img="https://wallpaperaccess.com/full/869.jpg"
      >
        <v-card-actions>
          <setting-login />
        </v-card-actions>
      </v-card>
      <v-card
        :width="!$vuetify.breakpoint.xs ? '60%' : '100%'"
        tile
        elevation="0"
      >
        <v-card-title>
          <v-img
            contain
            height="200px"
            src="https://png.pngtree.com/png-vector/20200423/ourmid/pngtree-cute-crocodile-cartoon-illustration-png-image_2191787.jpg"
            alt="logo"
          />
        </v-card-title>
        <v-card-text>
          <form-login />
        </v-card-text>
      </v-card>
    </div>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import FormLogin from '@/views/Login/components/form.vue'
import SettingLogin from '@/views/Login/components/Setting.vue'

@Component({
  name: 'Login',
  components: {
    SettingLogin,
    FormLogin,
  }
})
export default class Login extends Vue {
}
</script>
