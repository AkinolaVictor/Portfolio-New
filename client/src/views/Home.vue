<template>
    <div class="home-container">
        <!-- <h1>{{count}}</h1>
        <h1>{{tool}}</h1>
        <button style="margin-bottom:15px" @click="increase">increase</button>
        <button @click="decreaseCount">decrease</button> -->
        <!-- <p>{{awaiting}}</p> -->
        <Carousel :data = data.carousel />
        <Spinner  v-if="awaiting"/>
        <div class="data-recieved" v-if="!awaiting" style="width: 100%; height: 100%">
          <Vision :data = data.vision />
          <Skills :data = data.skill />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Carousel from '../components/Home/Carousel.vue'
import Skills from '../components/Home/Skills.vue'
import Vision from '../components/Home/Vision.vue'
import {mapActions, mapGetters} from 'vuex'
import Spinner from '../components/Spinner.vue';
export default {
  components: { Carousel, Vision, Skills, Spinner },
  data(){
      return {
          tool:'',
      }
  },
  computed:{
      ...mapGetters({count: 'getCount', data: 'getHome'}),
      awaiting(){
        let awaitn
        typeof(this.data)=='object'? awaitn = false: awaitn = true;
        return awaitn
      }
    //   count(){
    //       return this.$store.getters.getCount
    //   }
  },
  methods: {
      ...mapActions(['increaseCount', 'decreaseCount', 'fetchHome']),
      increase(){
        //   this.$store.dispatch('increaseCount')
        this.increaseCount()
      },
      fetchAPI: function(){
        axios.get('http://localhost:3000/home')
        .then(res=>{
          // console.log(res.data);
          this.data = res.data
        })
        .catch(err=>{
          console.log(err);
          this.api = 'There was an error'
        })

        // console.log(proxy);
      }
  },
  async mounted(){
      // this.tool = this.$store.getters.getTool;

      // !this.awaiting?
      await this.fetchHome()
      // null
  }
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