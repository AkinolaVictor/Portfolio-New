<template>
    <div :style="{ 'background-color': themeBg }" class="button" @click="handle">
        <p :style="{ 'font-size': fontSize, 'color': themeTx }">{{title}}</p>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        title: String,
        fontSize: String,
        themeBg: String,
        themeTx: String,
        handle: Function
    }
}
</script>

<style scoped>
.button{
    /* width: 60px; */
    /* height: 30px; */
    /* background-color: #8aa896c5 !important; */
    margin: 0 15px;
    /* margin-right: auto; */
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 15px;
    font-size: 14px;
    cursor: pointer;
}

@media only screen and (max-width: 700px){
    .button{
        padding: 5px 8px;
        margin: 0 8px;
        font-size: 12px;
    }
}
</style>