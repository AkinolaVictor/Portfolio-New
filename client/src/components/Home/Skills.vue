<template>
    <div class="objective-container">
        <div class="objective">
            <h1>My Skills</h1>
            <!-- <div class="allSkills"> -->
                <div class="all">
                    <EachSkill />
                    <EachSkill />
                    <EachSkill />
                    <EachSkill />
                    <EachSkill />
                    <EachSkill />
                    <EachSkill />
                    <EachSkill />
                    <EachSkill />
                </div>
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
import EachSkill from './EachSkill.vue'

export default {
  components: { EachSkill },
    props:['image', 'content', 'style']
}
</script>

<style lang='scss' scoped>
.objective-container{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.objective{
    width: 100%;
    padding: 15px 30px;
    h1{
        text-align: start;
    }
    div{
        text-align: justify;
        // padding: 0 20px;
    }
    // .allSkills{
        // padding: 30px 0;
        // display: flex;
        // justify-content: space-between;
        // justify-content: center;
        // align-items: center;
        // width: 100%;
        // flex-wrap: wrap;
        // flex: auto;
        // background: rgb(190, 190, 228);
        .all{
            width: 100%;
            // background: rgb(190, 190, 228);
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: auto;
            // justify-content: center;
            justify-items: center;
            // align-items: center;
        }
    // }

    @media (max-width: 700px) {
        .all{
            padding: 30px 0;
            display: flex;
            // justify-content: space-between;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        }
    }
}
</style>