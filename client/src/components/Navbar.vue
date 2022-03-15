<template>
    <div class="nav" :style="{'background': theme.background}">
        <div @click="changeLine('timer')">
            <a :style="{'color': theme.text}">Timer</a> 
            <hr v-if="line=='timer'" class="line" :style="{'background': theme.line.switch}">
            <hr v-else class="line-default" :style="{'background': theme.line.default}">
        </div>

        <div @click="changeLine('stopwatch')">
            <a :style="{'color': theme.text}">Stopwatch</a>
            <hr v-if="line=='stopwatch'" class="line" :style="{'background': theme.line.switch}">
            <hr v-else class="line-default" :style="{'background': theme.line.default}">
        </div>

        <!-- <div  style="background-color:#808080, width: 80px">
            <router-link to="/about">Time</router-link>
            <hr class="line" style="display:none">
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    props: ['theme','reset'],
    data(){
        return{
            line:'timer'
        }
    },
    methods: {
        changeLine (val) {
            this.$emit('route', val)

            this.line=val
        }
    }
}
</script>

<style scoped>
    .nav{
        width: 100%;
        height: 60px;
        /* background-color: #1F1B24; */
        /* background-color: #454545; */
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .nav>div{
        /* background-color: #454545; */
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }

    a{
        /* color: rgba(255, 255, 255, 0.637); */
        /* background-color: wheat; */
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .line-default{
        height: 2px;
        border: none;
        /* opacity: .2; */
        /* background: white !important; */
    }

    .line{
        height: 3px;
        border: none;
        background-color: rgb(186, 226, 39) !important;
    }
</style>