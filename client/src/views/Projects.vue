<template>
  <div class="projects">
    <div class="title-and-description">
      <h1>Projects</h1>
      <p>Below are the projects i have done in recent times</p>
    </div>
    <div class="allProjects">
        <!-- <img src="/projects/timer.png" alt="" style="width:200px; height: 120px" /> -->
      <Spinner v-if="awaiting" />
      <EachProject v-else  v-for="(item, index) in data" :key="index" :name='item.name' :content="item.content" :image="item.img" :link="item.link"/>
    </div>
  </div>

</template>

<script>
import EachProject from '../components/Project/EachProject.vue'
import {mapActions, mapGetters} from 'vuex'
import Spinner from '../components/Spinner.vue'

export default {
  name: 'Projects',
  components: {
    EachProject,
    Spinner
    // EachTimer
  },
  props: ['theme'],
  data (){
    return{
      
    }
  },
  computed:{
      ...mapGetters({data: 'getProjects'}),
      awaiting(){
        let awaitn
        typeof(this.data)=='object'? awaitn = false: awaitn = true;
        // console.log(this.data);
        return awaitn
      }
  },
  methods: {
      ...mapActions(['fetchProjects']),
  },
  async mounted(){
      await this.fetchProjects();
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
}

@media (max-width: 700px) {
.allProjects{
  // display: flex;
  // justify-content: center;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;
  // background: yellow;
}

}

@media (max-width: 500px) {

.allProjects{
  // display: flex;
  width: 100%;
  display: flex;
  // justify-content: space-between;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  
  // background: yellow;

  .eachProject{
    margin: 20px 10px;
  }
}
}
</style>