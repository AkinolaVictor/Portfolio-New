<template>
  <div class="projects">
    <div class="title-and-description">
      <h1>About</h1>
      <p>Things you'll like to know about me</p>
    </div>
    <Spinner v-if="awaiting" />
    <div v-else class="allProjects">
        <div class="cols">
            <EachAbout v-for="(item, index) in desktopView.a1" :key="index" :name="item.name" :texts="item.content"/>
        </div>
        <div class="cols">
            <EachAbout v-for="(item, index) in desktopView.a2" :key="index" :name="item.name" :texts="item.content"/>
        </div>
        <div class="cols">
            <EachAbout v-for="(item, index) in desktopView.a3" :key="index" :name="item.name" :texts="item.content"/>
        </div>
    </div>
    <div class="allProjects-mobile">
      <Spinner v-if="awaiting" />
      <EachAbout v-else v-for="(item, index) in data" :key="index" :name="item.name" :texts="item.content"/>
    </div>
  </div>

</template>

<script>
import EachAbout from '../components/About/EachAbout.vue'
import {mapActions, mapGetters} from 'vuex'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'About',
  components: {
    EachAbout,
    Spinner
  },
  props: ['theme'],
  data (){
    return{
      about: ''
    }
  },
  computed:{
      ...mapGetters({data: 'getAbout'}),
      awaiting(){
        let awaitn
        typeof(this.data)=='object'? awaitn = false: awaitn = true;
        return awaitn
      },
      desktopView(){
        const value = { a1:[], a2:[], a3:[] }
        let arr = Object.keys(this.data);
        for (let i = 0; i < arr.length; i++) {
          const count = i%3 + 1;
            value[`a${count}`].push(this.data[arr[i]]);
        }
        return value
      }
  },
  methods: {
      ...mapActions(['fetchAbout']),
  },
  async mounted(){
      await this.fetchAbout();
      // console.log(this.desktopView);
  }
  
}
</script>


<style lang='scss' scoped>
.projects{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 30px
}

.title-and-description{
  text-align: start;
  align-self: flex-start;

  p{
    opacity: .7;
  }
}

.allProjects{
  // display: flex;
  // justify-content: center;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  // background: yellow;

  .cols{
      display: flex;
    //   width: 100%;
      height: 100%;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
    //   background: rgb(216, 164, 164);
  }
}

.allProjects-mobile{
    display: none;
}

@media (max-width: 768px) {

.allProjects{
    display: none;
}

.allProjects-mobile{
  // display: flex;
  // justify-content: center;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: flex-start;
}
}

@media (max-width: 500px){

.allProjects-mobile{
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  align-items: flex-start;
}
}
</style>