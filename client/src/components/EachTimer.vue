<template>
    <div class="time-and-name" >
        <div class="time" :style="{'background': theme.time.background}">{{timer}}</div>
        <p :style="{'color': theme.time.text}">{{name}}</p>
    </div>
</template>

<script>
// let width2 = document.querySelector('.timer-container').offsetWidth * 0.15;
// const width2 = screen.availWidth * 0.15 + 'px'
export default {
    props: ['timer', 'name', 'theme'],
    name: 'Eachtime',
    data() {
        return {
            styles: {
                width: 'calc(0.15 * 100vw)',
                height: 'calc(0.15 * 100vw)'
            }
        }
    }
}
</script>

<style scoped>
    .time{
        /* width: 15%; */
        /* height: 15%; */
        background: #3b3b36;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 20px;
        box-shadow: 2px 2px 5px #888888;
        font-size: 7.5vw;
        font-weight: 700;
        width: calc(0.14 * 100vw);
        height: calc(0.14 * 100vw);
        border-radius: 12px;
    }

    .time-and-name>p{
        margin-top: 20px;
    }
</style>