
<template>
  <div class="container" @mousemove="followCursor">
      <div class="container-inner" id="output">
          <p v-for="i in 14" :key=i>{{timeString.toString().split('').slice(0,i+1).join('')}}</p>
        </div>
    <div class="waffle-container" :style="moveStyles">
      <div class="date-container">
          <div class="date-inner">
            <p>  рис</p>
            <p style="
            mix-blend-mode: color-dodge;">🌞</p>
            <p > день рождения</p>
            <p style="
            mix-blend-mode: color-dodge;">🥳</p>
            <p style="text-shadow: 2px 5px 0px #000000fa;">11.02
            <br>11:00-23:00</p>
            <p style="
            mix-blend-mode: color-dodge;">👇👇</p>
            <p style="text-shadow: 2px 5px 0px #000000fa;">Пятницкая 59/19С5 </p>
            <p style="
            mix-blend-mode: color-dodge;">👆👆</p>
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

export default {
  mixins: [windowHW],
  data() {
    return {
      x: 0,
      y: 0,
      now: null,
      BD: moment('1990-02-11'),
      timeString: '',
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
  },
  mounted() {

    setInterval(this.calculateDecimalDifference, 50);

  }, computed: {
    moveStyles: function() {
      return {
        position: 'absolute',
        top: `${this.y}`,
        left: `${this.x}`
      }
    }
  
  }
}
</script>

<style>
@import '~/assets/birthday.css';
</style>
