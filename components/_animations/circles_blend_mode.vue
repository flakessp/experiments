<template>
    <div class="container">
      <div></div>
    </div>  
</template>

<style lang="scss" scoped>
$size: 300px;
$speed: 1.2s;
$time-func: ease-in-out;
$color-a: #0ff;
$color-b: #f00;
$blend-mode: difference;

.container {
  height: $size*2;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #cd9f9f;
}

div {
  height: $size;
  width: $size;
  position: relative;
  &::before {
    mix-blend-mode: $blend-mode;
    content: '';
    position: absolute;
    height: $size;
    width: $size;
    background-color: $color-a;
    border-radius: 50%;
    left: $size/2;
    animation: dance-a $speed $time-func infinite alternate;
  }
  &::after {
    mix-blend-mode: $blend-mode;
    content: '';
    position: absolute;
    height: $size;
    width: $size;
    background-color: $color-b;
    border-radius: 50%;
    left: -($size/2);
    animation: dance-b $speed $time-func infinite alternate;
  }
}

@keyframes dance-a {
  0%   {left: $size/2;}
  100% {left: -($size/2);}
}
@keyframes dance-b {
  0%   {left: -($size/2);}
  100% {left: $size/2;}
} 
</style>

<script>

</script>