<template>
  <div id="app-container">
    <Header />
    <!-- <h3 style="padding-top: 90px">{{$route.name}}</h3> -->
    <div class="routeView">
    <!-- <p>https://bstrategyhub.com/</p> -->
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  components: { Header, Footer },

  data() {
    return {
      api: ''
    }
  },
  
  methods: {
    fetchAPI: function(){
      axios.get('http://localhost:3000/about')
      .then(res=>{
        console.log(res.data);
        this.api = res.data
      })
      .catch(err=>{
        console.log(err);
        this.api = 'There was an error'
      })

      // console.log(proxy);
    }
  }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Palanquin:wght@100;200;300;400;500;600;700&family=Ubuntu:wght@300;400;500;700&display=swap');
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>

<style lang='scss'>
html {
  scroll-behavior: smooth;
}

*{
  margin: 0;
  padding: 0;
  // color: #ffffffa2;
}

#app-container {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  // font-family: Ubuntu;
  font-family: 'Palanquin', sans-serif;
  // font-family: 'Rubik', sans-serif;
  // font-family: 'Outfit', sans-serif;
  // font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // overflow: hidden;
  // display: flex;
  // flex-direction: column;
  // flex: 1;
  // flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  position: relative;
}
.routeView{
  height: calc(100% - 60px);
  padding-top: 60px;
  // overflow: scroll;
  overflow-y: auto;
  // position: relative;
  // display: flex;
  // justify-content: center;
  // align-content: center;
  // flex-direction: column;
}

// scrollbar design
/* width */
::-webkit-scrollbar {
  width: 3px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
