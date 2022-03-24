<template>
  <div class="projects">
    <div class="title-and-description">
      <h1>About</h1>
      <p>Things you'll like to know about me</p>
    </div>
    <div class="allProjects">
        <div class="cols">
            <EachAbout texts = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Recusandae dignissimos quidem, voluptate enim ea nam.'/>
            <EachAbout texts = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Recusandae dignissimos quidem, voluptate enim ea nam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Recusandae dignissimos quidem, voluptate enim ea nam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Recusandae dignissimos quidem, voluptate enim ea nam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Recusandae dignissimos quidem, voluptate enim ea nam.'/>
        </div>
        <div class="cols">
            <EachAbout texts = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Recusandae dignissimos quidem, voluptate enim ea nam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Recusandae dignissimos quidem, voluptate enim ea nam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Recusandae dignissimos quidem, voluptate enim ea nam.'/>
            <EachAbout texts = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Recusandae dignissimos quidem, voluptate enim ea nam.'/>
        </div>
        <div class="cols">
            <EachAbout texts = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Recusandae dignissimos quidem, voluptate enim ea nam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Recusandae dignissimos quidem, voluptate enim ea nam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Recusandae dignissimos quidem, voluptate enim ea nam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Recusandae dignissimos quidem, voluptate enim ea nam.'/>
            <EachAbout texts = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Recusandae dignissimos quidem, voluptate enim ea nam.'/>
        </div>
    </div>
    <div class="allProjects-mobile">
        <EachAbout texts = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Recusandae dignissimos quidem, voluptate enim ea nam.'/>
        <EachAbout texts = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Recusandae dignissimos quidem, voluptate enim ea nam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Recusandae dignissimos quidem, voluptate enim ea nam.'/>
        <EachAbout texts = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Recusandae dignissimos quidem, voluptate enim ea nam.'/>
        <EachAbout texts = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Recusandae dignissimos quidem, voluptate enim ea nam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Recusandae dignissimos quidem, voluptate enim ea nam.'/>
        <EachAbout texts = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Recusandae dignissimos quidem, voluptate enim ea nam.'/>
        <EachAbout texts = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Recusandae dignissimos quidem, voluptate enim ea nam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Recusandae dignissimos quidem, voluptate enim ea nam.'/>
    </div>
  </div>

</template>

<script>
import EachAbout from '../components/About/EachAbout.vue'

export default {
  name: 'About',
  components: {
    EachAbout
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