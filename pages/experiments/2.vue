<template>
  <div class="container">
    <div class="slide">
      <div class="text-size-small position-overtop">launch party</div>
      <div class="text-size-middle lineheight-small font-bold">
        <div v-for="i in 1" :key=i >знакомство с инфраструктурой</div>
      </div>
      
      <div class="launchparty">
        <div class="text-size-small font-serif">magazine<br>launch party</div>
      </div>
    
      <div class="lineheight-negative">
        <div v-for="i in 4" :key=i>mouthwash x <span class="font-italics">peerscape</span></div>
      </div>
    
      <div class="booze">boooooooze</div>
      <div class="text-size-big">march 31st</div>
      <div class="text-size-big">7pm-10pm</div>
      <div class="text-size-small">Congruent Space<br>1216 W Grand Ave, Chicago, IL</div>
    </div>

    <div class="slide">
      <div class="text-size-middle lineheight-small font-bold">
        <div v-for="i in 2" :key=i >VS Code</div>
      </div>
    </div>

    <div class="slide">
      <div class="text-size-middle lineheight-small font-bold">
        <div v-for="i in 3" :key=i >Git</div>
      </div>
    </div>

    <div class="slide">
      <div class="text-size-middle lineheight-small font-bold">
        <div v-for="i in 2" :key=i >VS Code</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.container {
  height: 100vh;
  background: black;
  color: #EEE210;
  font-family: 'Aeroport', sans-serif;
  font-size: 50px;
}
.slide {
  height: 100vh;
  background: black;
  padding: 2em;
}

.position-overtop {
  position: absolute;
  top: -25px;
  right: 5em;
}
.text-size-middle {
  font-size: 2em;
}
.text-size-small {
  font-size: .8em;
}
.lineheight-small {
  line-height: .8;
}
.lineheight-negative {
  line-height: 1.3;
  text-transform: uppercase;
}
.lineheight-negative div {
  background: black;
  position: relative;
  margin-top: -.7em;
}
.font-bold {
  font-weight: 800;
}
.font-serif {
  font-family: 'Times New Roman', Times, serif;
}
.font-italics {
  font-family: cursive; 
}

/* containers */
.launchparty {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1em;
  
}
</style>
