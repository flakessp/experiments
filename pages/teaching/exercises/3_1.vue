<template>
  <div class="container">
    <div v-for="i in 3" :key=i class="podcast">
      <h1>Tako &ndash; Holiday</h1>
      <p>Back by popular demand: Tako's wonderful Holiday Mix!<br>
Here's what I wrote 7 years ago:<br>
<br>
I was about to post this beautiful summer mix of Tako with the following words:<br>
<br>
"What do you expect from a mix when it's done by a supernice guy with an excellent taste in music and a wonderful record collection? Yeah and that's exactly what you get here. Also make sure to get a copy of the first 12" of the Sombrero Galaxy, released on Lovefingers long awaited ESP Institute. Sombrero Galaxy is the collabo between Tako and Jonny Nash and their "Journey to the center of the sun" is one of my favourite releases of the last years, cheers!"<br>
<br>
That was yesterday. In the meantime something terrible happened. Tako's friend Petros Malevis from Athens passed away without a warning. This mix is dedicated to Petros! He will be missed. Rest in peace, Petros.</p>
  <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/318421627&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
    </div>
  </div>
</template>


<style lang="scss" scoped>
*::selection {
    background: white;
}
.container {
  margin: 60px;
  display: flex;
  justify-content: space-evenly;

}
.podcast {
  max-width: 300px;
  color: #1024CA;
  border: 1px solid #1024CA;
  background: #DCDCDC;
  padding: 15px;
  margin-bottom: 60px;
  overflow: auto;
  height: 80vh;

    box-shadow: 0px 0px 20px 5px #1024CA;

  h1 {
    text-transform: uppercase;
    color: #1024CA;
    margin-bottom: 30px;
    font-size: 3em;
  }
  p {
    font-size: 2em;
    margin-bottom: 30px;
  }
}
</style>
