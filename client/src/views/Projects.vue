<template>
  <div class="projects">
    <div class="title-and-description">
      <h1>Projects</h1>
      <p>Below are the projects i have done in recent times</p>
    </div>
    <div class="allProjects">
      <EachProject />
      <EachProject />
      <EachProject />
      <EachProject />
      <EachProject />
      <EachProject />
      <EachProject />
    </div>
  </div>

</template>

<script>
import EachProject from '../components/Project/EachProject.vue'

export default {
  name: 'Projects',
  components: {
    EachProject
    // EachTimer
  },
  props: ['theme'],
  data (){
    return{
      
    }
  },
  methods: {

  },
  mounted(){

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

@media (max-width: 768px) {

.allProjects{
  // display: flex;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  
  // background: yellow;
}
}
</style>