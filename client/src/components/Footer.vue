<template>
    <div class="footer">
        All right reserved &copy; 2022.
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
    background: #ED4AFF;
    display: flex;
    justify-content: center;
    align-items: center;
    // position: absolute;
    color: white;
}
</style>