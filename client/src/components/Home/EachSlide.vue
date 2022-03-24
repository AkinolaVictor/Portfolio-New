<template>
    <div class="slide" :class="style">
        <img :src="image" alt="" class="img">
    </div>
</template>

<script>

export default {
    props:['image', 'content', 'style']
}
</script>

<style scoped>
    .slide{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: blueviolet;
    }
    .img{
        width: 100%;
        height: calc(100vh - 60px);
    }
</style>