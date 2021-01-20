<template>
    <div v-title data-title="分类">
    <Nav />
    <div class="category">
      <div class="category-left">
        <el-menu default-active="2">
          <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>分类</span>
          </template>
          <el-menu-item-group style="text-alight:left;">
            <el-menu-item v-for="c in category" :key="c.id" index="c.id" @click="getBookByCategory(c.id)">{{ c.name }}</el-menu-item>
          </el-menu-item-group>
      </el-submenu>
      </el-menu>
    </div>
      <div class="category-right">
        <ShowBookA :cid="c_id" v-if="show" />
      </div>
    </div>
    <Footer></Footer>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import ShowBookA from '@/components/ShowBookA.vue'
import axios from 'axios'
export default {
  name: 'Category',
  data(){
    return {
      category:[],
      c_id:1,
      show: true
    }
  },
  components: {
    Nav,
    Footer,
    ShowBookA
  },
  created(){
    axios.get(this.$SERVER_ADDRESS+'/category/all').then(
        response => (
          this.category = response.data.list
        )
    )
  },
  methods: {
    async getBookByCategory(id){
      if(this.c_id != id){
        this.c_id = id
      }
      this.show = false
      await this.$nextTick()
      this.show = true
    }
  },
}
</script>

<style scoped>
.category{
  width: 1400px;
  height: 1050px;
  margin: 20px auto 20px auto;
}
.category-left{
  height: 1050px;
  width: 200px;
  float: left;
}
.category-right{
  height: 1050px;
  width: 1200px;
  float: right;
}
</style>
