<template>
  <v-col
    class="searchbar"
    cols="12"
    sm="6"
    :md="width"
  >
    <v-autocomplete
      ref="searchbarRef"
      :value="search"
      :items="states"
      :label="$t('general.searchBar.label')"
      dense
      filled
      rounded
      single-line
      hide-details
      clearable
      @focusin="() => width = 5"
      @focusout="() => width = 3"
    />
  </v-col>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from 'vue-property-decorator'

@Component({
  name: 'Searchbar'
})
export default class Searchbar extends Vue {
  @Prop({ type: String })
  private search !: string

  @Ref('searchbarRef')
  private searchbarRef !: HTMLInputElement

  private width = 3
  private states = [
    'Alabama', 'Alaska', 'American Samoa', 'Arizona',
    'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'District of Columbia', 'Federated States of Micronesia',
    'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
    'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada',
    'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
    'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
    'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
    'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
  ]

  mounted () {
    window.addEventListener('keydown', this.keydownHandler)
  }

  beforeDestroy () {
    window.removeEventListener('keydown', this.keydownHandler)
  }

  /**
   * It will be worked when key has been pressed
   * @param event - Key event
   */
  private keydownHandler (event: KeyboardEvent) {
    if (event.ctrlKey &&  event.key === '/')
      this.searchbarRef.focus()
  }
}
</script>
<style scoped lang="scss">
  .searchbar {
    transition: all .2s ease-in-out;
  }
</style>
