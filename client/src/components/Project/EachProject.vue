<template>
<div class="eachProject">
    <div class="image">
        <img :src="image" alt="" style="width:200px; height: 120px; border-top-right-radius: 10px; border-top-left-radius: 10px;" />
    </div>
    <div class="details">
        <h4 class="name">{{name}}</h4>
        <span>{{content}}</span>
    </div>
    <a  target="_blank" :href="link"><button>open</button></a>
</div>
</template>

<script>

export default {
    props:['name', 'content', 'link', 'image']
}
</script>

<style lang='scss' scoped>
.eachProject{
    width: 200px;
    // max-width: 250px;
    height: auto;
    display: flex;
    justify-content: center;
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
        align-items: center;
        flex-direction: column;
        width: 100%;
        height: 120px;
        background: #ED4AFF;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;

        i{
            font-size: 28px;
            color: #4949F3;
            padding: 5px;
        }

        p{
            font-weight: 700;
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
    
    a{
        text-decoration: none;

        button{
            font-size: 10px;
            padding: 4px 10px;
            border: none;
            background: #ED4AFF;
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

}
</style>