<template>
  <div
    class="fill-height"
  >
    <v-data-table
      :headers="headers"
      :items="process.list"
      class="elevation-1"
    />
    <v-text-field
      v-model="pid"
      type="number"
    />
    <v-btn
      @click="killProcess"
    >
      kill
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'
import { ProcessState } from '@/interfaces/store/process'

@Component({
  name: 'Processes',
  computed: {
    ...mapState('process', {
      process: state => state as ProcessState
    })
  }
})
export default class Processes extends Vue {
  private readonly process !: ProcessState
  private headers = [
    { text: 'Pid', value: 'pid' },
    { text: 'name', value: 'name' },
    { text: 'cpu', value: 'cpu' },
    { text: 'cpuu', value: 'cpuu' },
    { text: 'cpus', value: 'cpus' },
    { text: 'mem', value: 'mem' },
    { text: 'priority', value: 'priority' },
    { text: 'memVsz', value: 'memVsz' },
    { text: 'memRss', value: 'memRss' },
    { text: 'nice', value: 'nice' },
    { text: 'started', value: 'started' },
    { text: 'state', value: 'state' },
    { text: 'tty', value: 'tty' },
    { text: 'user', value: 'user' },
    // { text: 'command', value: 'command' },
    { text: 'params', value: 'params' },
    { text: 'path', value: 'path' },
  ]

  private pid = 0

  private killProcess () {
    process.kill(Number(this.pid), 'SIGKILL')
    this.pid = 0
  }
}
</script>
