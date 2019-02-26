<template>
    <div class="container">
        <div class="slide">
            <!-- <input type="range"  v-model="rangeVal" name="" id="" value="10" min=0 max=200>
            <h1>let hashslash = web.html + web.css + web.js</h1> -->
            <p>
                <span :style="vFontStyles">position </span> top 
            animation <span :style="vFontStyles">absolute</span>  let   
             right @keyframes left jquery relative from to 
            javascript DOM click bottom hashlash;
            </p>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            rangeVal: 200
        }
    },
    computed: {
        vFontStyles: function() {
            return {
                fontVariationSettings: "'wght' " + this.rangeVal,
                color: 'red'
            }
        }
    }
}
</script>


<style lang="scss" scoped>
$basic: #4B4B4B;
@font-face {
  font-family: "Marvin Visions";
  src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1147877/MarvinVisionsGX-subset.woff2)
    format("woff2");
  font-style: normal;
}
p {
    text-align: center;
    max-width: 60vw;
    line-height: .75;
    &::selection {
        background: red;
    }
}
span {
    animation: color-size 3s forwards;
}

.container {
    background: #232323;
    color: #4B4B4B;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    font-family: "Marvin Visions";
    font-size: 11vmin;
    font-variation-settings: "wght" 0
}

h1 {
    font-size: .5em;
    font-variation-settings: "wght" 0;
    line-height:.8;
      animation: size 10s alternate infinite;
}

@keyframes size {
  from {
    font-variation-settings: "wght" 00, "opsz" 80;
  }
  to {
    font-variation-settings: "wght" 170, "opsz" 80;
  }
}
@keyframes color-size {
  from {
      color: $basic;
      font-variation-settings: "wght" 00, "opsz" 80;
  }
  to {
      color: yellow;
      font-variation-settings: "wght" 170, "opsz" 80;
  }
}
</style>

