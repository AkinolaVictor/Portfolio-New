<template>
    <div class="eachForm">
        <p>{{name}} <span v-if="!req">*</span></p>
        <input :type="type" v-model="value">
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  components: { },
  props: ['name', 'req', 'type'],
    // name: 'Home',
    data(){
        return {
            value: ''
        }
    },
    computed:{
        ...mapGetters(['getSent'])
    },
    methods: {
        ...mapActions(['switchSent']),
        empty(){
            this.value = ''
        }
    },
    watch: {
        value(oldValue){
            const data = {
                name: this.name,
                value: oldValue
            }
            this.$emit('bind', data)
        },
        getSent(){
            this.getSent==true?
            this.empty():
            null
        }
    },
    mounted(){
        // this.$emit('sent', this.empty)
    }
}
</script>

<style lang='scss' scoped>
.eachForm{
    /* width: 50px; */
    text-align: start;
    font-size: 11px;
    font-weight: 700;
    margin: 15px;

    span {
        color: red;
    }

    input{
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.212);
        width: 140px;
        color: rgba(0, 0, 0, 0.733);
        font-size: 11px;
        // font-weight: 400;
        font-family: 'Rubik', sans-serif;
    }
}

input:focus {
    outline: 2px solid rgba(0, 0, 0, 0.322);
    border-radius: 3px;
}
</style>