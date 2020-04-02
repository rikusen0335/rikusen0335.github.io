<template>
  <div class="mt-32">
    <p class="text-base font-thin text-center">{{ type }}</p>
    <p class="text-2xl font-bold text-center mb-6">{{ title }}</p>
    <hr class="my-8">
    <client-only>
      <viewer
        class="grid grid-cols-2 gap-2 lg:gap-16"
        :images="images"
        :options="options"
      >
        <img
          v-for="image in images"
          :key="image"
          class="col-span-2 lg:col-span-1 cursor-pointer mb-8"
          :src="`/image/${image}`"
        >
      </viewer>
    </client-only>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Section extends Vue {
  @Prop() type!: string
  @Prop() title!: string
  @Prop() images!: string[]
  @Prop() options!: object
}
</script>

<style scoped>
</style>
