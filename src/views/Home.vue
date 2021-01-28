<template>
  <div class="home">
    <p>test: {{ whatTimeIsItNow }}</p>
    <PostExample />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PostExample from '@/views/example/post/index.vue'
import moment from 'moment'

@Component({
  name: 'HomeTest',
  components: {
    PostExample,
  },
})
export default class HomeTest extends Vue {
  private whatTimeIsItNow: any = moment().format('LLLL')
}
</script>
