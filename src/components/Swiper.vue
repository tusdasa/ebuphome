<template>
  <el-carousel indicator-position="outside" class="swiper">
    <el-carousel-item v-for="item in 4" :key="item">
      <p>如果我们选择了最能为人类而工作的职业，那么，重担就不能把我们压倒，因为这是为大家做出的牺牲;</p>
      <p>那时我们所享受的就是不是可怜的、有限的、自私的的乐趣，我们的幸福将属于千百万人。</p>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    msg: String
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
