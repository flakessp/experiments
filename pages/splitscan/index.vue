<template>
  <div class="container">
    <div ref="canvas"></div>
  </div>
</template>
<script>

// import p5 from 'p5';

// import "p5/lib/addons/p5.dom";
export default {
  data: function () {
    return {
      script: null,
      ps: null,
      x: 0,
      y: 0,
      canvas: null,
      video: null
    }
  },
  mounted () {
    this.script = p => {
      this.x = 100
      this.y = 100

      p.setup = () => {
        this.canvas = p.createCanvas(1600, 480);
          p.pixelDensity(1);
          this.video = p.createCapture(p.VIDEO);
          this.video.size(640,480);
          p.background(255);
        this.canvas.parent(this.$refs.canvas)
      }

      p.draw = () => {
        p.background(0)
        p.fill(255)
        p.rect(this.x, this.y, 50, 50)
      }
    }
    const P5 = require('p5')
    // require("p5/lib/addons/p5.dom"); ?
    this.ps = new P5(this.script)
  }
}
</script>

<style scoped>
 .container {
      height: 100vh;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      margin: 0;
    }
    canvas,video {
      border: 10px solid black;
    }
</style>
