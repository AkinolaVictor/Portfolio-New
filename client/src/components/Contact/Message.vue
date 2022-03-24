<template>
    <div class="eachForm">
        <p>Message</p>
        <!-- <input type="textarea" > -->
        <textarea name="message" id="" cols="30" rows="10"></textarea>
    </div>
</template>

<script>
export default {
  components: { },
    name: 'Home',
    setup() {
        
    },
}
</script>

<style lang='scss' scoped>
.eachForm{
    /* width: 50px; */
    text-align: start;
    font-size: 11px;
    font-weight: 700;
    // margin: 15px;

    p {
        margin-bottom: 10px;
    }

    textarea{
        border: 1px solid  rgba(0, 0, 0, 0.212);
        border-radius: 5px;
        width: calc(140px*2 + 10px*2);
        height: 100px;
        color: rgba(0, 0, 0, 0.733);
        padding: 5px;
        
        &:focus {
            outline: 1px solid rgba(0, 0, 0, 0.322);
        }
    }
}

</style>