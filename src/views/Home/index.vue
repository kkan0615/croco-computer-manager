<template>
  <div>
    <!--    {{ // uptime }}-->
    <br>
    <!--    {{ days }} days {{ test }}-->
    <br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import { ipcRenderer } from 'electron'
// import systeminformation from 'systeminformation'
//
// import moment from 'moment'
// import Os from 'os'
// const os = window.require('os') as typeof Os

@Component({
  name: 'Home',
  components: {  }
})
export default class Home extends Vue {
  // private uptime = 0
  // private os: Array<any> = []
  // private test: any = ''
  // private days: any = ''
  //
  // async created () {
  //   ipcRenderer.on('testIpc', this.testIpc)
  //   this.os = os.cpus()
  //   this.uptime = os.uptime()
  //   const minutes = this.uptime / 3600
  //   const hours = minutes / 60
  //   // this.test = `${hours}시간 ${minutes}분`
  //   // this.test = moment().seconds(this.uptime).format('H:mm:ss')
  //   const time = moment.utc(this.uptime * 1000).locale('ko')
  //   this.test = time.format('HH:mm:ss')
  //   this.days = time.date() - 1
  //
  //   console.log(process.getCPUUsage())
  //   console.log(await systeminformation.graphics())
  //   ipcRenderer.send('testIpc')
  //   // const batteryData = await systeminformation.battery()
  //   // console.log(batteryData.hasBattery)
  //   console.log('hi')
  //   // this.test = moment.duration(this.uptime)
  // }
  //
  // private testIpc () {
  //   console.log('testIpc')
  // }

}
</script>
