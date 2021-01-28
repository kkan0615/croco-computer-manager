<template>
  <div>
    {{ uptime }}
    <br>
    {{ days }} days {{ test }}
    <br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import moment from 'moment'
import Os from 'os'
const os = window.require('os') as typeof Os

@Component({
  name: 'Home',
  components: {  }
})
export default class Home extends Vue {
  private uptime = 0
  private os: Array<any> = []
  private test: any = ''
  private days: any = ''

  created () {
    this.os = os.cpus()
    this.uptime = os.uptime()
    const minutes = this.uptime / 3600
    const hours = minutes / 60
    // this.test = `${hours}시간 ${minutes}분`
    // this.test = moment().seconds(this.uptime).format('H:mm:ss')
    const time = moment.utc(this.uptime * 1000).locale('ko')
    this.test = time.format('HH:mm:ss')
    this.days = time.date() - 1
    // this.test = moment.duration(this.uptime)
  }
}
</script>
