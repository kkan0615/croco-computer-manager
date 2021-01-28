<template>
  <p>{{ $t('hello') }}</p>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Prototype'
})
export default class Prototype extends Vue {
}
</script>
