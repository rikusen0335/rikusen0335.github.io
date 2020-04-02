<template>
  <div class="w-full">
    <Section
      type="Project"
      title="Team Recruit"
      :images="teamRecruitImages"
      :options="viewerOptions"
    />
    <Section
      type="Hobby"
      title="でぶみあろぐ"
      :images="devmialogImages"
      :options="viewerOptions"
    />
    <Section
      type="Project"
      title="Post Tech"
      :images="postTechImages"
      :options="viewerOptions"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Section from '~/components/Section.vue'

@Component({
  components: {
    Section
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

  viewerOptions = {
    navbar: true,
    toolbar: {
      prev: true,
      next: true,
    },
    slideOnTouch: true,
    movable: true,
    scalable: false,
    zoomable: true,
    rotatable: false,
  }
}
</script>
