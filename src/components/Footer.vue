<template>
<div class="footer">
    <div class="text">
        <p>所有资源均来自于网络，由用户上传</p>
    </div>
    <div class="ba">
        <span>
            © {{year}}
        </span>
        <a :href="domain">{{siteName}}</a>.
        <a href="https://beian.miit.gov.cn/">{{ icp }}</a>.
    </div>
</div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
      return {
          siteName:'',
          domain:'',
          icp:'',
          year:''
      }
  },
  created() {
      this.siteName = this.$SITENAME
      this.domain = this.$DOMAIN
      this.icp = this.$ICP
      this.year = this.$YEAR
  }
}
</script>

<style scoped>
.footer{
    width: 1200px;
    height: 150px;
    margin: auto;
}
.text{
    height: 20px;
    width: 100%;
    line-height: 20px;
}
.ba{
    height: 20px;
    width: 100%;
    line-height: 20px;
    padding: 3em 0;
    line-height: 1.5;
    text-align: center;
    color: #999;
}
.ba a{
    text-decoration: none;
    font-style: italic;
}
</style>
