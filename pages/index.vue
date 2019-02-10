<template>
  <section class="container-">
    <nuxt-link to="/birthday" >🥳</nuxt-link>
    <nuxt-link to="/saladover">🥗</nuxt-link>
  </section>
</template>

<script>

export default {
  components: {
    
  }
}
</script>

<style scoped>

.container- {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-size: 100px;
}
a {
  text-decoration: none;
}

</style>
