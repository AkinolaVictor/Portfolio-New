<template>
  <div class="timer">


    <div class="timer-container">
      <each-timer :timer="hour" name='Hours' :theme="theme" />
      <each-timer :timer="minute" name='Minutes' :theme="theme" />
      <each-timer :timer="second" name='Seconds' :theme="theme" />
    </div>
    
    <div @click="modalToggle" 
      :style="{'color': theme.time.text}"
      class="changeTime">
      change time
    </div>

    <div v-if="modal" class="timeChange">
      <div @click="modalToggle" class="close">
        <i class="fas fa-times"></i>
      </div>
      <div class="inputform">
        <form action="" class="count-down-time">
          <div class="input-container second">
            <label for="hour">Hour</label>
            <input v-model="input.hour"
              type="number" 
              min="0"
              maxlength="2" 
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              max="60"/>
          </div>
          
          <div class="input-container minute">
            <label for="minute">Minute</label>
            <input v-model="input.minute"  
              min="0"
              type="number" 
              maxlength="2" 
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength); if(this.value>60) this.value = 60;"
              max="60"/>
          </div>
          
          <div class="input-container minute">
            <label for="second">Second</label>
            <input v-model="input.second" 
              min="0"
              type="number" 
              maxlength="2" 
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength); if(this.value>60) this.value = 60;"
              max="60"/>
          </div>

        </form>
        <Button title='submit' 
          :handle='submitForm' 
          :themeBg="theme.button.background"
          :themeTx="theme.button.text"
          fontSize='16px'/>
      </div>
    </div>
    <progress v-if="progress.show" class="line-progress-bar" :value='progress.value' :max="progress.max"></progress>
  </div>
  <!-- <div class="line-progress-bar"></div> -->

</template>

<script>
import EachTimer from '../components/EachTimer.vue';
import Button from '../components/Button.vue'

let interval, lastInterval

export default {
  name: 'Timer',
  components: {
    EachTimer,
    Button
  },
  props: ['buttonswitch', 'theme'],
  data (){
    return{
      hour: '00',
      minute: '05',
      second: '00',

      modal: false,
      input: {
        hour: '00',
        minute: '05',
        second: '00'
      },
      progress: {
        show: false,
        max: 100,
        value: 0,
        // max: 50
      }
    }
  },
  methods: {
    progression: function() {

      let sec = Number(this.second);
      let minToSec = Number(this.minute) * 60;
      let hourToSec = Number(this.hour) * 60 * 60;
      let current = sec + minToSec + hourToSec;

      
      let maxSec = Number(this.input.second);
      let maxMinToSec = Number(this.input.minute) * 60;
      let maxHourToSec = Number(this.input.hour) * 60 * 60;
      let max = maxSec + maxMinToSec + maxHourToSec;

      // console.log(current, max, max - current);

      this.progress.show = true
      this.progress.value = max-current+1;
      this.progress.max = max;

    },

    modalToggle: function(){
      this.modal = !this.modal;
      this.reset();
      this.buttonswitch();
    },

    submitForm : function(){
      this.modalToggle();
      this.reset();
      this.buttonswitch().timeupSet(false);

      this.input.hour<10 && this.input.hour!='00'?
      this.hour = '0' + this.input.hour:
      this.hour = this.input.hour;

      this.input.minute<10 && this.input.minute!='00'?
      this.minute = '0' + this.input.minute:
      this.minute = this.input.minute;

      this.input.second<10 && this.input.second!='00' ?
      this.second = '0' + this.input.second:
      this.second = this.input.second;
    },

    start: function() {
      const v = this;

      let num = this.second;

      interval= setInterval(()=>{
        this.progression()

        // hour influencer
        if (Number(v.minute)==1 && Number(v.hour)>0){
          v.minute = 59
          Number(v.hour)<=10?
          v.hour = '0'+ (Number(v.hour) - 1):
          v.hour = Number(v.hour) - 1
        } 

        // minute influencer
        if (Number(v.second)==0 && Number(v.minute)>0){
          Number(v.minute)<=10?
          v.minute = '0'+ (Number(v.minute) - 1):
          v.minute = Number(v.minute) - 1
        } 

        // killer condition
        if (Number(v.minute)== 0 && Number(v.hour)== 0){
          clearInterval(interval)
          lastInterval = setInterval(()=>{
            this.progression()
            
            num = Number(num) - 1

            num<10 && num >= 1 ?
            v.second = '0' + num:
            v.second = num

            if(Number(v.second)<1){
              num = '00'
              v.second = '00'
              v.minute = '00'
              clearInterval(lastInterval)
              this.buttonswitch().timeupSet(true);
              return;
            }

            // console.log(num);
          }, 1000)
        }

        if (num<1){
          num = 60
          // console.log('recoil');
        }

        num = Number(num) - 1

        num<10?
        v.second = '0' + num:
        v.second = num

      }, 1000);


    },

    stop: function() {
      clearInterval(interval);
      clearInterval(lastInterval);
      // console.log('clear-interval');
    },

    reset: function(){
      clearInterval(interval);
      clearInterval(lastInterval);

      this.second=this.input.second;
      this.minute=this.input.minute;
      this.hour=this.input.hour;

      this.progress.show = false
    },
    emitter: function(){
      let funcs = {
        start: this.start,
        stop: this.stop,
        reset: this.reset
      }
      this.$emit('control', funcs)
    }
  },
  mounted(){
    this.emitter()
  },
}
</script>


<style lang='scss' scoped>
.timer{
  width: 100%;
  height: calc(100% - 120px);
  /* background: radial-gradient(rgb(59, 59, 54), #303030); */

  

  .timer-container{
    width: 100%;
    height: 100%;
    /* background: yellow; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .changeTime{
    position: absolute;
    top: 80px;
    right: 20px;
    cursor: pointer;
  }

  .timeChange{
    /* width: 180px; */
    width: auto;
    height: auto;
    padding: 10px;
    background-color: rgb(67, 75, 75);
    border-radius: 10px;

    position: absolute;
    top: 50%;
    left: 50%;
    /* bring your own prefixes */
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .close {
      align-self: flex-start;
      margin-left: auto;
      cursor: pointer;
    }

    .input-container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 10px 10px 20px 10px;
    }
  }
}

.count-down-time{
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-container>input{
  margin-top: 10px;
  width: 35px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px;
  font-weight: 700;
  border-radius: 5px;
  background: rgb(223, 230, 223);
  border: none;
}

.line-progress-bar{
  /* background: greenyellow; */
  /* -webkit-appearance: none; */
  /* appearance: none; */
  /* margin-bottom: 70px; */
  padding: 0;
  /* background-color: #1390c2; */
  width: 100%;
  height: 10px;
  position: absolute;
  left: 0;
  top: 62px;
}

</style>