<template>
    <div class="home-container">
        <!-- <h1>Home Page</h1> -->
        <!-- <h1>Thank you JESUS</h1> -->
        <div class="texts-and-image">
            <div class="texts">
                <h1 class="name">I'm Victor <span style="color: #9dc434">Akinola</span></h1>
                <p class="description">
                    This is my official portfolio website, here you can go through the content of my works.
                </p>
            </div>
            <div class="image">
                <img src="/imgs/portrait.jpeg" alt="" width="400px" height="400px">
            </div>
            <button class="explore">Explore Skillset</button>
        </div>

    </div>
</template>

<script>
// import Button from '../components/Button.vue'
export default {
//   components: { Button },
    name: 'Home',
    setup() {
        
    },
}
</script>

<style scoped>
    .home-container{
        background:  #d3e9f8;
        width: 100%;
        height: calc(100% - 70px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* color: #9dc434; */

    }
    .texts-and-image{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        /* padding-left: 30px; */
    }
    .texts{
        margin-right: auto;
        text-align: start;
        /* padding: 50px; */
        /* font-family: ubuntu; */
        position: absolute;
        left: 150px;
        margin-bottom: 50px;
    }
    /* .name{
        font-size: 30px;
        font-weight: 700;
        width: 50%;
        font-family: ubuntu; 
    } */
    .description{
        width: 300px;
    }
    .image{
        position: absolute;
        right: 150px;
        /* display: none; */
    }
    @media (max-width: 768px) {
        .image{
            display: none;
        }
        .texts{
            margin-bottom: 250px;
            left: 50px;
        }
    }
</style>