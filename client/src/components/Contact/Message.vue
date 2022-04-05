<template>
    <div class="eachForm">
        <p>Message <span style="color: red;" v-if="!req">*</span></p>
        <!-- <input type="textarea" > -->
        <textarea name="message" id="" cols="30" rows="10" v-model="message"></textarea>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  props: ['req'],
  components: { },
    data(){
        return {
            message: ''
        }
    },
    computed:{
        ...mapGetters(['getSent']),
    },
    methods: {
        ...mapActions(['switchSent']),
        empty(){
            this.message = ''
        }
    },
    watch: {
        message(data){
            this.$emit('bind', {name: 'message', value: data})
        },
        getSent(){
            this.getSent==true?
            this.empty():
            null
        }
    }
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
        font-family: 'Rubik', sans-serif;
        font-size: 12px;
        
        &:focus {
            outline: 1px solid rgba(0, 0, 0, 0.322);
        }
    }
}

</style>