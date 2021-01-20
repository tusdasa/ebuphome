<template>
  <el-carousel indicator-position="outside" class="swiper">
    <el-carousel-item v-for="url in urls" :key="url">
      <el-image  :key="url" :src="url" ></el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    msg: String
  },
  data () {
      return {
        urls:["41765-106.jpg"]
      }
  }
}
</script>

<style scoped>
.swiper{
  width: 1200px;
}
.el-carousel__item p {
    color: #003399;
    font-size: 22px;
    opacity: 0.75;
    line-height: 30px;
    margin: 50px auto;
    font-weight: bolder;
  }
  
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
