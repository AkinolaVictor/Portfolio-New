<template>
<div class="eachskill">
    <div class="icon">
        <i :class="font"></i>
        <p>{{name}}</p>
    </div>
    <span>{{content}}</span>
</div>
</template>

<script>

export default {
    props:['font', 'name', 'content']
}
</script>

<style lang='scss' scoped>
.eachskill{
    width: 150px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    // background: rgb(31, 31, 161);

    &:hover{
        background: #4949f328;
        cursor: pointer;
        border-radius: 20px;
        transition: .7s all;
    }

    .icon{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        i{
            font-size: 28px;
            color: #4949F3;
            padding: 5px;
        }

        p{
            font-weight: 700;
        }
    }

    span{
        // height: 30px;
        font-size: 12px;
        // font-family: 'Outfit', sans-serif;
        text-align: justify;
        // word-spacing:12px;
        // word-break: break-all;
    }

}
</style>