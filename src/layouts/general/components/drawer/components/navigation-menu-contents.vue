<template>
  <v-list-item
    v-if="!program.meta.hidden && !program.children"
    link
    class="pl-6"
    :to="`${parentPath}/${program.path}`"
  >
    <v-list-item-icon
      class="mr-0"
    >
      <v-icon
        v-if="program.meta.icon"
      >
        {{ program.meta.icon }}
      </v-icon>
    </v-list-item-icon>

    <v-list-item-content
      class="ml-2"
    >
      <v-list-item-title>{{ $t(`router.${program.name}.title`) }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  <v-list-group
    v-else-if="!program.meta.hidden"
    :sub-group="!program.path.startsWith('/')"
    no-action
  >
    <template #activator>
      <v-list-item-icon
        class="mr-0"
      >
        <v-icon
          v-if="program.meta.icon"
        >
          {{ program.meta.icon }}
        </v-icon>
      </v-list-item-icon>
      <v-list-item-content
        class="ml-2"
      >
        <v-list-item-title>{{ $t(`router.${program.name}.title`) }}</v-list-item-title>
      </v-list-item-content>
    </template>
    <navigation-menu-contents
      v-for="children in program.children"
      :key="children.name"
      :programs="program.children"
      :program="children"
      :parent-path="`${parentPath}${program.path.startsWith('/') ? program.path : '/' + program.path}`"
    />
  </v-list-group>
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
  @Prop({ default: '', type: String, required: false })
  private readonly parentPath!: string
}
</script>

<style scoped>

</style>
