<template>
  <slide>
    <div class="container">
        <!-- <input type="range"  v-model="rangeVal" name="" id="" value="10" min=0 max=200>
        <h1>let hashslash = web.html + web.css + web.js</h1> -->
        <p :style="fontSize">
          <span class="anim-yellow" @mouseover="changeValue" @mouseleave="changeValue">position </span>  top animation <span class="anim-yellow">absolute</span> 
          right <span class="anim-red"> @keyframes</span> alternate  bottom jquery relative <span class="anim-red">from to </span>
          javascript DOM click left inifinite <span>hashlash;</span>
          {{scrollTop}}
        </p>
        <!-- <AnimatedFont class="animated">привет</AnimatedFont> -->
      </div>
    </slide>
</template>

<script>
// import AnimatedFont from '@/components/teaching/AnimatedVFont';
import Slide from '@/components/teaching/4/slide.vue';

export default {
    components: {Slide},
  data() {
        return {
            scrollTop: 0,
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
    methods: {
      changeValue(el) {
        this.hovered = !this.hovered;
      },
      handleScroll (e) {
                var sh = e.target.scrollingElement.scrollHeight;
                var st = e.target.scrollingElement.scrollTop;
                var oh = e.target.scrollingElement.offsetHeight;
                this.scrollTop = st;
                console.log('scrolling..', sh, st, oh);
                
            }
    },
    computed: {
        vFontStyles: function() {
            return {
                fontVariationSettings: "'wght' " + this.rangeVal
            }
        },
        fontSize() {
          let size = '20vh';
          let css = {
            fontSize: size
          }

          if (this.scrollTop == 0) return css
        }
    }, 
    mounted() {
            window.addEventListener('scroll', this.handleScroll);
            console.log('scrolling Injected');
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll);
            console.log('scrolling Destroyed');
        }
}
</script>

<style lang="scss" scoped>
$basic: #4B4B4B;
$basic-font-size: 10vmin;
$slide-1-font-size: 12vmin;
$c-red: 'red';
$c-yellow: 'yellow';
$c-blue: 'blue';
$c-brown: 'brown';

@font-face {
  font-family: "Marvin Visions";
  src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/1147877/MarvinVisionsGX-subset.woff2) format("woff2");
  font-style: normal;
}

.container {
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background: #232323;
    color: #4B4B4B;
    
    
    font-family: "Marvin Visions";
    font-size: $slide-1-font-size;
    font-variation-settings: "wght" 0
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

.anim-red {
    animation: 12s team-red alternate infinite;
    animation-delay: 1s;
}

.anim-yellow {
    animation: 4s team-yellow alternate infinite;    
}



h1 {
    font-size: .5em;
    font-variation-settings: "wght" 0;
    line-height:.8;
    
    animation: size 10s alternate infinite;
}

p {
    text-align: center;
    max-width: 80vw;
    line-height: .75;
    transition: all 3s;
}

</style>


