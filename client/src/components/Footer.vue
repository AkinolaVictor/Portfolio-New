<template>
    <div class="footer">
        All right reserved
    </div>
</template>

<script>

export default {
    props:['image', 'content', 'style']
}
</script>

<style lang='scss' scoped>
.footer{
    width: 100%;
    height: 60px;
    background: blueviolet;
    display: flex;
    justify-content: center;
    align-items: center;
    // position: absolute;
}
</style>