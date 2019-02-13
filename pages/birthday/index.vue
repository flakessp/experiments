
<template>
  <div class="container" @mousemove="followCursor">
      <div class="container-inner" id="output">
          <p v-for="i in 14" :key=i>{{timeString.toString().split('').slice(0,i+1).join('')}}</p>
        </div>
    <div class="waffle-container" ref="waffle" >
      <div class="date-container" ref="waffleInner">
          <div class="date-inner">
            <p>  рис</p>
            <p class="emoji" >🌞</p>
            <p > день рождения</p>
            <p class="emoji" >🥳</p>
            <p class="text-shadow">11.02
            <br>11:00-23:00</p>
            <p class="emoji" >👇👇</p>
            <p class="text-shadow">Пятницкая 59/19С5 </p>
            <p class="emoji">👆👆</p>
            <p>ВафлиВафлиВафли</p>
          </div>
      </div>
        <img src="/birthday/waffle.png" alt="">
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { windowHW } from '~/mixins/windowHW';
import { mobileGyro } from '~/mixins/mobileGyro'
import socialImage from '~/static/birthday/media.jpg'

export default {
  mixins: [windowHW, mobileGyro],
  data() {
    return {
      x: 0,
      y: 0,
      now: null,
      BD: moment('1990-02-11 11:00'),
      timeString: '',
      waffleH: 0,
      waffleW: 0,
      xSpeed: 3.5,
      ySpeed: 3.5,
      waffleX: 0,
      waffleY: 0,
      mixBlendModes2: ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity'],
      mixBlendModes: ['darken', 'difference', 'exclusion', 'hard-light', 'luminosity', 'multiply', 'normal'] 
    }
  },
  methods: {
    followCursor(e) {
      this.x  = (e.clientX - 5) + 'px';
      this.y = (e.clientY - 5) + 'px';
    },
    calculateDecimalDifference() {
      this.now = moment();
      this.timeString = this.now.diff(this.BD, 'years', true);
    },
    dvdLogo() {
      let waffle = this.$refs.waffle;
      this.waffleX += this.xSpeed;
      this.waffleY += this.ySpeed;
      waffle.style.left = this.waffleX  + 'px';
      waffle.style.top = this.waffleY  + 'px';

      if (this.waffleX + this.waffleW > this.window.width || this.waffleX == 0) {
        this.xSpeed *= -1;
        this.hitOccurs();
      }
      if (this.waffleY + this.waffleH > this.window.height || this.waffleY == 0) {
        this.ySpeed *= -1;
        this.hitOccurs();
      }
      requestAnimationFrame(this.dvdLogo);
    },
    hitOccurs() {
      let waffle = this.$refs.waffleInner;
      waffle.style.mixBlendMode = this.mixBlendModes[Math.floor(Math.random()*(this.mixBlendModes.length-1))];
    },
    mobileGyroHandler() {
      this.m.vy = this.m.vy + -(this.m.ay);
      this.m.vx = this.m.vx + this.m.ax;

      const WAFFLE = this.$refs.waffle;
      
      this.m.y = parseInt(this.m.y + this.m.vy * this.m.vMultiplier);
      this.m.x = parseInt(this.m.x + this.m.vx * this.m.vMultiplier);
      
      if (this.m.x<0) { this.m.x = 0; this.m.vx = 0; }
      if (this.m.y<0) { this.m.y = 0; this.m.vy = 0; }
      if (this.m.x>this.window.width-this.waffleW) { this.m.x = this.window.width-this.waffleW; this.m.vx = 0;this.hitOccurs() }
      if (this.m.y>this.window.height-this.waffleH) { this.m.y = this.window.height-this.waffleH; this.m.vy = 0;this.hitOccurs() }
      
      WAFFLE.style.top = this.m.y + "px";
      WAFFLE.style.left = this.m.x + "px";
    }

  },
  mounted() {
    // get ref dimensions
    let waffle = this.$refs.waffle;
    this.waffleH = waffle.clientHeight;
    this.waffleW = waffle.clientWidth;

    waffle.style.position = 'absolute';

    setInterval( this.calculateDecimalDifference, 50 );
    if (this.window.width > 700){ requestAnimationFrame(this.dvdLogo) } 
    else { setInterval(this.mobileGyroHandler, this.m.delay) }

  }, computed: {
    moveStyles() {
      return {
        position: 'absolute',
        top: `${this.y}`,
        left: `${this.x}`
      }
    }
  },
head () {
    return {
      meta: [
        { hid: 'image', property: 'og:image', content: this.prodBaseUrl + socialImage },
        { hid: 'image', property: 'og:image:url', content: this.prodBaseUrl + socialImage },
        { hid: 'description', property: 'og:description', content: '29! RIS x VAFLI !29 '}
        
      ]
    }
  },
  created: function () {
    this.prodBaseUrl = 'https://ris.netlify.com'
  }
}
</script>

<style  src="~/assets/birthday.css">
