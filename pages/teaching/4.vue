<template>
    <div class="container">
        <div class="slide">
            <!-- <input type="range"  v-model="rangeVal" name="" id="" value="10" min=0 max=200>
            <h1>let hashslash = web.html + web.css + web.js</h1> -->
            <p>
                <span class="anim-yellow">position </span> top 
            animation <span class="anim-yellow">absolute</span>  <span>  #/</span>   
             right <span class="anim-red"> @keyframes</span> alternate  bottom jquery relative <span class="anim-red">from to </span>
            javascript DOM click left inifinite <span>hashlash;</span>
            </p>
            <!-- <AnimatedFont class="animated">привет</AnimatedFont> -->
        </div>
    </div>
</template>

<script>
import AnimatedFont from '@/components/teaching/AnimatedVFont';

export default {
    components: {AnimatedFont},
    data() {
        return {
            rangeVal: 0, 
            animation: {
                first: {
                    color: {
                        from: 'red',
                        to: 'blue'
                    },
                    time: {
                        duration: '1s',
                        delay: '0s'
                    }
                }
            }
        }
    },
    computed: {
        vFontStyles: function() {
            return {
                fontVariationSettings: "'wght' " + this.rangeVal
            }
        }
    }
}
</script>


<style lang="scss" scoped>

$basic: #4B4B4B;
$root-font-size: 2em;

@font-face {
  font-family: "Marvin Visions";
  src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1147877/MarvinVisionsGX-subset.woff2) format("woff2");
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

.anim-red {
    animation: 12s team-red alternate infinite;
    animation-delay: 1s;
}

.anim-yellow {
    animation: 4s team-yellow alternate infinite;    

.container {
    background: #232323;
    color: #4B4B4B;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    font-family: "Marvin Visions";
    font-size: 9vmin;
    font-variation-settings: "wght" 0
}

h1 {
    font-size: .5em;
    font-variation-settings: "wght" 0;
    line-height:.8;
    
    animation: size 10s alternate infinite;
}

@keyframes team-yellow {
  from {
      color: $basic;
      font-variation-settings: "wght" 00;
  }
  to {
      color: yellow;
      font-variation-settings: "wght" 170;
  }
}

@keyframes team-red {
    from{
            font-variation-settings: "wght" 00;
    }
    to {
        font-variation-settings: "wght" 170;
    }
  }
}
</style>

