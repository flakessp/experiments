<template>
  <div class="container">
    <div>в голове</div>
    <div>моей</div>
    <div>глисты</div>
    <div>и ты</div>
    <div class="overlay"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    background: black;
    color: transparent;
    position: relative;
  }
  .container div{
    font-family:'Times New Roman', Times, serif;
    font-size: 160px;
    text-transform: uppercase;
    -webkit-text-stroke: 2px white;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 200px solid white;
    mix-blend-mode: difference;
  }
</style>