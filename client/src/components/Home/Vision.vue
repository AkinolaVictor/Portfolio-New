<template>
    <div class="vision-container">
        <div class="vision">
            <h1>Vision</h1>
            <p>{{data}}
            </p>
        </div>
    </div>
</template>

<script>

export default {
    props:['data', 'content', 'style']
}
</script>

<style lang='scss' scoped>
.vision-container{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.vision{
    padding: 15px 30px;
    h1{
        text-align: start;
    }
    p{
        text-align: justify;
        // padding: 0 20px;
        // word-break: break-all;
    }
}
</style>