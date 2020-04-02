<template>
  <div class="mt-32">
    <p class="text-base font-thin text-center">{{ type }}</p>
    <p class="text-2xl font-bold text-center mb-6">{{ title }}</p>
    <hr class="my-8">
    <viewer
      class="grid grid-cols-2 gap-2 lg:gap-16"
      :images="images"
      :options="options"
    >
      <img
        v-for="image in images"
        :key="image"
        class="col-span-2 lg:col-span-1 mb-8"
        :src="`/image/${image}`"
      >
    </viewer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import 'viewerjs/dist/viewer.css'
import Viewer from "v-viewer/src/component.vue"

@Component({
  components: {
    Viewer
  }
})
export default class Section extends Vue {
  @Prop() type!: string
  @Prop() title!: string
  @Prop() images!: string[]
  @Prop() options!: object
}
</script>
