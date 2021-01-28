<template>
  <v-list
    class="pa-0"
    :dense="dense"
  >
    <v-list-item
      v-if="title"
      class="ma-0"
    >
      <v-list-item-title>
        {{ title }}
      </v-list-item-title>
    </v-list-item>
    <v-divider />
    <v-list-item
      @click="handleLocalList('ko')"
    >
      <v-list-item-avatar
        size="24"
        :width="40"
        tile
      >
        <v-img
          sizes="24"
          src="https://cdn.britannica.com/49/1949-004-8818300C/Flag-South-Korea.jpg"
          alt="ko"
        />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>한국어</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider />
    <v-list-item
      @click="handleLocalList('en')"
    >
      <v-list-item-avatar
        size="24"
        :width="40"
        tile
      >
        <v-img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
          alt="en"
        />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>English</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { getCurrentLocale, setCurrentLocale } from '@/utils/locale'
import { setMomentToCurrentLocale } from '@/utils/moment'

@Component({
  name: 'LocaleList'
})
export default class LocaleList extends Vue {
  @Prop({ type: Boolean, required: false, default: false })
  private readonly dense !: boolean
  @Prop({ type: String, required: false, default: '' })
  private readonly title !: string

  public handleLocalList (locale: string) {
    /* If there is no matched locale in availableLocales in i18n, return this function */
    if (!this.$i18n.availableLocales.includes(locale)) return
    setCurrentLocale(locale)
    /* Exchange current locale of i18n */
    this.$i18n.locale = locale
    /* Change Theme of moment, but it can oot change rendered the time */
    setMomentToCurrentLocale()
    /* Exchange vuetify language */
    this.$vuetify.lang.current = getCurrentLocale()
  }
}
</script>
