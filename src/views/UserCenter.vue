<template>
    <div v-title data-title="用户中心">
        <h1>暂不开放</h1>
        <router-link to="/">回到首页</router-link>
    </div>
</template>

<script>
export default {
  name: 'UserCenter',
  props: {
    msg: String
  }
}
</script>

<style scoped>
</style>
