<template>
  <div class="w-full">
    <div>
      <div>
        <p class="text-base font-thin text-center">Project</p>
        <p class="text-2xl font-bold text-center mb-6">Team Recruit</p>
        <hr class="my-8">
        <viewer
          class="grid grid-cols-2 gap-2 lg:gap-16"
          :images="teamRecruitImages"
          :options="options"
        >
          <img
            v-for="image in teamRecruitImages"
            :key="image"
            class="col-span-2 lg:col-span-1 mb-8"
            :src="`/image/${image}`"
          >
        </viewer>
      </div>
      <div class="mt-32">
        <p class="text-base font-thin text-center">Hobby</p>
        <p class="text-2xl font-bold text-center mb-6">
          でぶみあろぐ <span class="text-lg font-normal">(Blog)</span>
        </p>
        <hr class="my-8">
        <viewer
          class="grid grid-cols-2 gap-2 lg:gap-16"
          :images="devmialogImages"
          :options="options"
        >
          <img
            v-for="image in devmialogImages"
            :key="image"
            class="col-span-1 mb-8"
            :src="`/image/${image}`"
          >
        </viewer>
      </div>
    </div>
    <div class="mt-32">
        <p class="text-base font-thin text-center">Project</p>
        <p class="text-2xl font-bold text-center mb-6">Post Tech</p>
        <hr class="my-8">
        <viewer
          class="grid grid-cols-2 gap-2 lg:gap-16"
          :images="postTechImages"
          :options="options"
        >
          <img
            v-for="image in postTechImages"
            :key="image"
            class="col-span-1 mb-8"
            :src="`/image/${image}`"
          >
        </viewer>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import 'viewerjs/dist/viewer.css'
import Viewer from "v-viewer/src/component.vue"

@Component({
  components: {
    Viewer
  }
})
export default class IndexPage extends Vue {
  teamRecruitImages: string[] = [
    'team-recruit_1.png', 'team-recruit_2.png', 'team-recruit_3.png',
    'team-recruit_4.png', 'team-recruit_5.png',
  ]

  devmialogImages: string[] = [
    'devmialog_1.png',
  ]

  postTechImages: string[] = [
    'post-tech_1.png', 'post-tech_2.png', 'post-tech_3.png',
  ]

  options = {
    navbar: true,
    toolbar: {
      prev: true,
      next: true,
    },
    slideOnTouch: true,
    movable: false,
    scalable: false,
    zoomable: false,
    rotatable: false,
  }
}
</script>
