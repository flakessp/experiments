<template>
  <div class="animated">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ['animation'],
  computed: {
    animatedStyle() {
      return {}
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
