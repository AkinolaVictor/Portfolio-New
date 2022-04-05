<template>
<div class="eachAbout">
    <div class="image">
        <p>{{name}}</p>
    </div>
    <div class="details">
        <!-- <h4 class="name">Timer App</h4> -->
        <span>{{texts}}</span>
    </div>
    <!-- <button>Open</button> -->
</div>
</template>

<script>

export default {
    props:['texts', 'name']
}
</script>

<style lang='scss' scoped>
.eachAbout{
    width: 200px;
    // max-width: 250px;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 0px;
    margin: 20px 5px;
    // border: 1px solid rgba(0, 0, 0, 0.267);
    border-radius: 10px;
    box-shadow: 2px 2px 5px rgb(71, 57, 57);
    // background: rgb(31, 31, 161);


    .image{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        width: 100%;
        height: 35px;
        background: #4949F3;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

        i{
            font-size: 28px;
            color: #4949F3;
            padding: 5px;
        }

        p{
            font-weight: 600;
            font-size: 14px;
            margin: 0 10px;
            color: rgb(255, 255, 255);
        }
    }

    .details{
        // height: 30px;
        font-size: 12px;
        // font-family: 'Outfit', sans-serif;
        text-align: justify;
        // word-spacing:12px;
        // word-break: break-all;
        padding: 0 10px 10px 10px;

        h4{
            margin-top: 5px;
        }
    }

    button{
        font-size: 10px;
        padding: 4px 10px;
        border: none;
        background: #4949F3;
        margin-bottom: 10px;
        border-radius: 4px;
        color: white;

        
        &:hover{
            background: #cfe091;
            cursor: pointer;
            color: black;
            transition: .7s all;
        }
    }

}
</style>