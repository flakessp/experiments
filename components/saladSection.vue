<template>
  <section :style="computedStyle" @click="clickMe"></section>
</template>

<script>
  export default {
    data() {
      return {
        clicked: (Math.random() >= 0.5),
        speed: Math.random() * 30
      }
    }, methods: {
        clickMe() {
          this.clicked = !this.clicked;
          this.speed = Math.random() * 30
        },
    }, computed: {
      computedStyle() {
        return {
          animationDuration: this.speed + 's',
          animationDirection:  this.clicked ? 'normal' : 'reverse'
        }
      }
    }
  }
</script>

<style scoped>
section {
  flex-basis: 25%;
  height: 100%;
  margin: 0;
  flex-direction: column;
  height: 100vh;
  background-image: url(/salad/os_movie_cover.svg);
  background-position: 0 20vh;
  background-size: cover;
	animation: salad 10s linear infinite ;
  transition: transform 3s;
}

@media screen and (max-width:1500px) {
  section {
    background-size: contain;
  }
}

section:nth-child(1) {
  animation-duration: 10s   
}
section:nth-child(2) {
    animation-duration: 15s
}
section:nth-child(3) {
    animation-duration: 20s
}
section:nth-child(4) {
    animation-duration: 8s
}

@keyframes salad {	
  from{background-position: 0 0;}
	to{background-position: 0 200vh;}
}
</style>
