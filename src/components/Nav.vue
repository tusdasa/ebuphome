<template>
    <div id="nav">
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <router-link to="/category">分类</router-link>
        </li>
        <li>
         <router-link to="/search">搜索</router-link>
        </li>
        <li>
        </li>
        <li id="users">
          <router-link to="/userCenter">提交</router-link>
          <span style="padding-left: 5px;padding-right: 5px;">|</span>
          <router-link to="/about">关于</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style scoped>
#nav {
  width: 90%;
  height: 100px;
  margin: auto;
  text-align: center;
  line-height: 100px;
}

#nav ul,li{
  list-style: none;
  float: left;
}

#nav li{
  width: 200px;
  height: 100px;
  display: flex;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  display: block;
  margin: auto;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#users a{
  width: 80px;
  display: block;

}
</style>
