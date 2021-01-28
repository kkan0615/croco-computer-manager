<template>
  <v-form
    ref="loginFormRef"
  >
    <!-- ID -->
    <v-text-field
      ref="idInputRef"
      v-model="form.id"
      :label="$t('login.loginForm.idInput')"
      :rules="rules.id"
      outlined
      dense
      @keydown.enter="focusToPasswordInput"
    />
    <!-- Password -->
    <v-text-field
      ref="passwordInputRef"
      v-model="form.password"
      :append-icon="visiblePassword ? 'mdi-eye' : 'mdi-eye-off'"
      :label="$t('login.loginForm.passwordInput')"
      :rules="rules.password"
      :type="visiblePassword ? 'text' : 'password'"
      outlined
      dense
      @keydown.enter="login"
      @click:append="visiblePassword = !visiblePassword"
    />
    <v-checkbox
      v-model="form.rememberId"
      dense
      :label="$t('login.loginForm.rememberId')"
    />
    <v-btn
      color="primary"
      block
      :loading="loading"
      @click="login"
    >
      {{ $t('login.loginForm.loginButton') }}
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import { Component, Ref, Vue } from 'vue-property-decorator'
import { LoginForm as LoginFormInterface } from '../types'
import { KeyOfLocalStorage } from '@/interfaces/system/localStorage'
import { VuetifyRule } from '@/interfaces/vuetify/rule'

@Component({
  name: 'FormLogin'
})
export default class FormLogin extends Vue {
  @Ref('loginFormRef')
  private readonly loginFormRef !: HTMLFormElement
  @Ref('idInputRef')
  private readonly idInputRef !: HTMLInputElement
  @Ref('passwordInputRef')
  private readonly passwordInputRef !: HTMLInputElement

  private form: LoginFormInterface = {
    id: '',
    password: '',
    rememberId: false
  }
  private visiblePassword = false
  private rules: VuetifyRule<LoginFormInterface> = {
    id: [
      (v: string) => !!v || this.$t('rule.required', { target: this.$t('login.loginForm.idInput') })
    ],
    password: [
      (v: string) => !!v || this.$t('rule.required', { target: this.$t('login.loginForm.passwordInput') })
    ],
  }
  private loading = false

  created () {
    const savedId = localStorage.getItem('rememberId' as KeyOfLocalStorage)
    this.form.rememberId = !!savedId
    if (this.form.rememberId && savedId) this.form.id = savedId
  }

  mounted () {
    this.idInputRef.focus()
  }

  private async login () {
    if (!this.loginFormRef.validate()) return
    this.loading = true

    const success = await this.$store.dispatch('user/login', this.form)
    if (success) {
      this.form.rememberId ? localStorage.setItem('rememberId' as KeyOfLocalStorage, this.form.id) : localStorage.removeItem('rememberId' as KeyOfLocalStorage)
      // @TODO: 나중에는 redirect를 만들어서 redirect 시키기...
      await this.$router.push('/')
      this.loading = false
    }
    this.loading = false
  }

  private focusToPasswordInput () {
    this.passwordInputRef.focus()
  }
}
</script>
