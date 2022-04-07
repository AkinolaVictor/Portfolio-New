import { createStore } from 'vuex'
import axios from 'axios'

const api = 'api'

export default createStore({
  state: {
    count: 1,
    tool: 'html, css, javascript, and all',
    allTools: [],
    home: '',
    projects: '',
    about: '',
    sent:false,
  },
  mutations: {
    changeTool(state, payload){
      state.tool = payload;
      state.allTools.push(payload);
    },
    count(state, payload){
      state.count = payload
    },
    home(state, payload){
      state.home = payload
    },
    projects(state, payload){
      state.projects = payload
    },
    about(state, payload){
      state.about = payload
    },
    sent(state, payload){
      state.sent = payload
    }
    // async count(state, payload){
      // just to show you an example of fetch
      // const cnt = await fetch(state.count);
      // const result = cnt.json()
      // state.count = payload
    // }
  },
  actions: {
    // increaseCount(state){
    //   let counts = this.state.count + 1;
    //   state.commit('count', counts);
    //   // console.log(state);
    // },
    // decreaseCount(state){
    //   let counts = this.state.count - 1;
    //   state.commit('count', counts);
    //   // console.log(state);
    // },
    switchSent(state){
      state.commit('sent', false);
    },
    fetchHome(state){
      axios.get(`${api}/home`)
      .then(res=>{
        state.commit('home', res.data)
        return {...state.home}
      })
      .catch(err=>{
        console.log(err);
        return 'There was an error'
      })
    },
    fetchProjects(state){
      axios.get(`${api}/project`)
      .then(res=>{
        state.commit('projects', res.data)
        return {...state.home}
      })
      .catch(err=>{
        console.log(err)
        return 'There was an error'
      })
    },
    fetchAbout(state){
      axios.get(`${api}/about`)
      .then(res=>{
        state.commit('about', res.data)
        return {...state.home}
      })
      .catch(err=>{
        console.log(err)
        return 'There was an error'
      })
    },
    sendMail(state, payload){
      // console.log(payload);
      axios.post(`${api}/sendMail`, {...payload[0]})
      .then(res=>{
        res.data.bool==true?
        state.commit('sent', true):
        null
        
        payload[1](res.data.bool)
        console.log(payload);
        return res.data;
      })
      .catch(err=>{
        console.log(err)
        payload[1](false)
        return 'There was an error'
      })
    }
  },
  modules: {
  },
  getters:{
    // getTool: state=>state.tool,
    // getCount: state=>state.count,
    getHome: state => state.home,
    getProjects: state => state.projects,
    getAbout: state => state.about,
    getSent: state => state.sent
  }
})
