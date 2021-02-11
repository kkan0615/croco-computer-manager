<template>
  <div class="fill-height">
    {{ battery }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapGetters, mapState } from 'vuex'
import { BatteryState } from '@/interfaces/store/battery'

@Component({
  name: 'Battery',
  computed: {
    ...mapGetters('battery', [
      'hasBattery'
    ]),
    ...mapState('battery', {
      battery: state => (state as BatteryState)
    })
  }
})
export default class Battery extends Vue {
  private readonly battery !: BatteryState
  private readonly hasBattery !: boolean
}
</script>
