<template>
  <slide>
    <page-flow/>
    <animation/>
    <task-keyframes/>
    <v-fonts/>
    <javascript/>
    <t-production/>
    <task-sampler/>
  </slide>  
</template>

<style lang="scss" scoped>
.container {
  margin: 2em;
  padding: 1em;
  border: 1px solid black;
}

h1, h2 {
  margin: .5em 0;
}
</style>

<script>
import Slide from '@/components/teaching/4/slide.vue';
import Pen from '@/components/windows/old_mac_window.vue';
import vFonts from '@/components/teaching/themes/vFonts.vue';
import pageFlow from '@/components/teaching/themes/pageFlow.vue';
import Animation from '@/components/teaching/themes/animation.vue';
import Javascript from '@/components/teaching/themes/Javascript.vue';
import tProduction from '@/components/teaching/themes/t_Production.vue';
import taskSampler from '@/components/teaching/themes/task_Sampler.vue';
import taskKeyframes from '@/components/teaching/themes/task_Keyframes.vue';

export default {
    components: {Slide, Pen, vFonts, pageFlow, Animation, Javascript, tProduction, taskSampler, taskKeyframes},
}
</script>