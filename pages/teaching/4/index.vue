<template>
    <div class="container">
        <slide-1/>
        <slide-2/>
    </div>
</template>

<script>

import Slide1 from '@/components/teaching/4/_1-slide.vue';
import Slide2 from '@/components/teaching/4/_2-slide.vue';

export default {
    components: {Slide2, Slide1},
}
</script>


<style lang="scss" scoped>

$basic: #4B4B4B;
$basic-font-size: 2em;
$slide-1-font-size: 12vmin;
$c-red: 'red';
$c-yellow: 'yellow';
$c-blue: 'blue';
$c-brown: 'brown';

.container {
    font-size: $basic-font-size;
    -webkit-font-smoothing: antialiased;
    
}

</style>

