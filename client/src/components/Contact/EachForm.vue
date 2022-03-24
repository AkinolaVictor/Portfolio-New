<template>
    <div class="eachForm">
        <p>First Name <span>*</span></p>
        <input type="text" >
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
    margin: 15px;

    span {
        color: red;
    }

    input{
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.212);
        width: 140px;
        color: rgba(0, 0, 0, 0.733)
        
    }
}

input:focus {
    outline: 2px solid rgba(0, 0, 0, 0.322);
    border-radius: 3px;
}
</style>