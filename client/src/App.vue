<template>
  <div id="app-container">
    <Header />
    <!-- <h3>{{$route.name}}</h3> -->
    <router-view />
  </div>
</template>

<script>
import axios from 'axios';
import Header from './components/Header.vue';

export default {
  components: { Header },

  data() {
    return {
      api: ''
    }
  },
  
  methods: {
    fetchAPI: function(){
      axios.get('http://localhost:3000/data')
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
/* @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');  */
@import url('https://fonts.googleapis.com/css2?family=Palanquin:wght@100;200;300;400;500;600;700&family=Ubuntu:wght@300;400;500;700&display=swap');
</style>

<style lang='scss'>
*{
  margin: 0;
  padding: 0;
  // color: #ffffffa2;
}

#app-container {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  // font-family: Ubuntu;
  font-family: 'Palanquin', sans-serif;
  font-weight: 400;
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
}
</style>
