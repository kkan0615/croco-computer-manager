<template>
  <v-list
    class="text-center"
    nav
    flat
  >
    <v-list-item-group
      color="primary"
    >
      <v-list-item
        :to="{name: program.name}"
        link
      >
        <v-list-item-content
          class="pa-0"
        >
          <v-icon
            size="48"
          >
            {{ program.meta.icon }}
          </v-icon>
          <br>
          <v-list-item-title>
            {{ program.name }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { ExtendedRouteConfig } from '@/interfaces/system/router'

@Component({
  name: 'navigation-menu-contents',
  components:{
  }
})

export default class NavigationMenuContents extends Vue {
  @Prop({ required:true, type: Object, default: {} as ExtendedRouteConfig })
  private readonly program!: ExtendedRouteConfig

  private async linkToProgram () {
    if (this.$route.name === this.program.name) return
    await this.$router.push(this.program.path)
  }
}
</script>

<style scoped>

</style>
