<template>
    <div class="control-panel" :style="{'background-color': theme.background}">
        <hr class="line-default" :style="{'background-color': theme.line.default}">
        <div class="panel-container">
            <div class="botton-Container">
                <Button v-if="!starter  && !timeup" title="start" 
                :themeBg="theme.button.background"
                :themeTx="theme.button.text"
                :handle="start"/>

                <Button v-if="starter && !timeup" title="stop" 
                :themeBg="theme.button.background"
                :themeTx="theme.button.text"
                :handle="stop"/>

                <Button title="reset" 
                :themeBg="theme.button.background"
                :themeTx="theme.button.text"
                :handle="reset"/>
            </div>

            <div class="theme-and-time">
                <div class="time" :style="{'color': theme.text}">{{time}}</div>
                <div class="theme" @click="transition" :style="{'background': theme.background}">
                    <i class="fa-solid fa-moon"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from './Button.vue'
export default {
    name: 'ControlPanel',
    components: {Button},
    props: ['functions', 'theme', 'transition'],
    data () {
        return{
            starter: false,
            timeup:false,
            time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'})
        }
    },
    methods: {
        start: function() {
            this.functions.start();
            this.starter = !this.starter
        },
        stop: function() {
            this.functions.stop();
            this.starter = !this.starter
        },
        reset: function() {
            this.functions.reset();
            this.buttonModal().timeupSet(false);
            // this.starter = false
        },
        timeupSet: function (val) {
            this.timeup = val
        },
        buttonModal: function() {
            this.starter = false;

            // return the time killer
            return {timeupSet:this.timeupSet}
        },
        timeCount: function(){
            var v = this;
            
            setInterval (
                () => v.time = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second:'2-digit'}),
                1000
            );
        }
    },
    mounted () {
        this.$emit('buttonswitch', this.buttonModal)
        this.timeCount();
    },
    watch: {
        // whenever question changes, this function will run
        functions(newvalue, oldvalue) {
            if (newvalue !== oldvalue) {
                this.starter = false;
            }
        }
    },
}
</script>

<style scoped>
.line-default{
    height: 2px;
    border: none;
    /* opacity: .2; */
    /* background: rgba(255, 255, 255, 0.2); */
}

.control-panel {
    width: 100%;
    height: 60px;
    background-color: #303030;
    /* background-color: #c5edf0; */
}

.panel-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 95%;
    /* background-color: aqua; */
}

.botton-Container{
    display: flex;
    margin-right: auto;
    margin-left: 15px;
    /* background-color: aqua; */
}

.theme-and-time{
    display: flex;
    align-items: center;
    margin-right: 10px;
}

.theme {
    margin-left: 10px;
    cursor: pointer;
    padding: 15px;
    border-radius: 10px;
    /* background: yellow; */
    /* color: rgb(6, 12, 17) !important; */
}

/* .time{
} */
</style>