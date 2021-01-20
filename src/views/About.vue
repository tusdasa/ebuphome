<template>
  <div class="about" v-title data-title="关于">
    <div>
      <h1>关于</h1>
    </div>
    <div>
      <p>如果我们选择了最能为人类而工作的职业，那么，重担就不能把我们压倒，因为这是为大家做出的牺牲;</p>
      <p>那时我们所享受的就是不是可怜的、有限的、自私的的乐趣，我们的幸福将属于千百万人。</p>
    </div>
    <div>
      <router-link to="/">回到首页</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.about{
  width: 1200px;
  height: 500px;
  margin: 50px auto;
  text-align: left;
}
</style>
