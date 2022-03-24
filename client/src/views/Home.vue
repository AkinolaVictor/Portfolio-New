<template>
    <div class="home-container">
        <Carousel />
        <!-- <p>contains carousel slider</p> -->
        <Vision />
        <Skills />
    </div>
</template>

<script>
import Carousel from '../components/Home/Carousel.vue'
import Skills from '../components/Home/Skills.vue'
import Vision from '../components/Home/Vision.vue'
export default {
  components: { Carousel, Vision, Skills },
    name: 'Home',
    setup() {
        
    },
}
</script>

<style scoped>
    .home-container{
        /* background:  #d3e9f8; */
        width: 100%;
        /* height: calc(100% - 70px); */
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* color: #9dc434; */

    }
</style>