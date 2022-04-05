<template>
    <div class="home-container" style="width: 90vw; height: calc(100vh - 120px);">
        <div class="awaiting">
          <i class="fa-solid fa-spinner fa-spin spinner"></i>
          <p style="margin-top: 10px; font-size: 13px">Waiting for response from server</p>
        </div>
    </div>
</template>

<script>
export default {
  data(){
      return {
      }
  }
}
</script>

<style scoped>
    .home-container{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .awaiting{
      padding: 100px;
      overflow: hidden;
    }

    .spinner {
      display: flex;
      width: 97%;
      height: 100%;
      justify-content: center;
      align-items: center;
      font-size: 70px;
    }
</style>