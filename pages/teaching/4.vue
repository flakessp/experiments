<template>
    <div class="container">
        <div class="slide">
            <!-- <input type="range"  v-model="rangeVal" name="" id="" value="10" min=0 max=200>
            <h1>let hashslash = web.html + web.css + web.js</h1> -->
            <p>
                <span class="team-red team-yellow">position</span> <span class="team-blue">top</span>
            animation <span class="team-red">absolute</span>  <span>#/</span>
             <span class="team-blue">right</span> <span class="team-white">@keyframes</span> alternate  <span class="team-blue">bottom</span> jquery <span class="team-yellow">relative</span> <span class="team-white">from</span> 
            javascript DOM click <span class="team-blue">left</span> inifinite <span class="team-white">to</span> <span>hashlash;</span>
            </p>
            
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
@import "./assets/teaching/lesson_4";

</style>

