<template>
    <div class="carousel-container">
        <div class="carousel-text">
            <p class="description1">{{description.a}}</p>
            <p class="description2">{{description.b}}</p>
            <p class="description3">{{description.c}}</p>
        </div>
        <EachSlide :style="eachslide" :image='image'/>
        <div class="controller">
            <i @click="quickShift('-')" class="fa fa-caret-left" aria-hidden="true"></i>
            <div class="toggle">
                <i @click="togglePlaySlide" style="font-size: 11px" class="fa-solid fa-pause" v-if="play"></i>
                <i @click="togglePlaySlide" style="font-size: 11px" class="fa-solid fa-play" v-else></i>
            </div>
            <i @click="quickShift('+')" class="fa fa-caret-right" aria-hidden="true"></i>
        </div>
    </div>
</template> 

<script>
let timer;
import EachSlide from './EachSlide.vue'
export default {
  components: { EachSlide },
  data(){
      return {
          eachslide: 'eachslide',
          imgNumber: 1,
          image: `/imgs/img1.jpg`,
          play: true,
          description: {
              a: 'Hello!!!',
              b: "I'm Akinola Victor",
              c: "Welcome to my portfolio website"
          }
      }
  },
  methods: {
      texts: function(){
          const descriptions = {
              caption1: {
                    a: 'Hello!!!',
                    b: "I'm Akinola Victor",
                    c: "Welcome to my portfolio website"
                },
              caption2: {
                    a: 'Javascript',
                    b: "I'm a Javascript Developer",
                    c: "i'm passionate about cutting edge technologies"
                },
              caption3: {
                    a: 'Web App',
                    b: "I build webapps using VueJS and ReactJs",
                    c: "i'm passionate about cutting edge technologies"
                },
              caption4: {
                    a: 'Fullstack Development',
                    b: "Front-End + Back-End",
                    c: "I do this with the use of NodeJs"
                },
              caption5: {
                    a: 'Algorithms',
                    b: "Much can be achieved with the use of algorithms.",
                    c: "Welcome to my portfolio website"
                }
          }
          
          let selected = descriptions[`caption${this.imgNumber}`]

          this.description.a = selected.a
          this.description.b = selected.b
          this.description.c = selected.c
          
        //   this.description.a = descriptions[`caption${val}`].a
        //   this.description.b = descriptions[`caption${val}`].b
        //   this.description.c = descriptions[`caption${val}`].c

        console.log(selected.a);
      },
      changeSlide: function(val) {
          if (val===undefined)  this.imgNumber<5?this.imgNumber++: this.imgNumber = 1;
          else this.imgNumber = val
          this.image = `/imgs/img${this.imgNumber}.jpg`
          this.texts();
        //   console.log(this.imgNumber);
      },
      timeCount: function(){
        timer = setInterval(this.changeSlide, 5000)
        // setInterval(this.changeSlide, 5000);
      },
      togglePlaySlide(){
          this.play?clearInterval(timer):this.timeCount()
          this.play = !this.play
        //   console.log(this.play);
      },
      quickShift(arg){
          arg === '+'?
          this.imgNumber<5?this.imgNumber++ : this.imgNumber = 1:
          arg === '-'?
          this.imgNumber>1?this.imgNumber-- : this.imgNumber = 5:
          null
          this.changeSlide(this.imgNumber);

          this.play=false
          clearInterval(timer);
      }
  },
  mounted(){
      this.timeCount()
    //   this.texts(3);
  }
}
</script>

<style lang='scss' scoped>
    .carousel-container{
        // background:  #d3e9f8;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* color: #9dc434; */
        position: relative;

    }

    .carousel-text{
        position: absolute;
        top: 140px;
        left: 20px;
        text-align: start;

        .description1{
            font-size: 50px;
            font-weight: 900;
            // margin: 0;
        }

        .description2{
            font-size: 35px;
            
        }

        .description3{
            font-size: 18px;
        }
    }

    .controller{
        position: absolute;
        bottom: 0;
        right: 20px;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div{
        i{
            padding: 5px;
            width: 15px;
            height: 15px;
            cursor: pointer;
            background: #d3e9f8;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px;
            border-radius: 5px;
            font-size: 17px;
        }
    }
</style>