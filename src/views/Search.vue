<template>
    <div v-title data-title="搜索">
        <Nav />
        <div class="search">
          <div class="search-title">
              <el-form :inline="true" ref="form">
              <el-form-item label="书籍名">
                <el-input v-model="bookName"></el-input>
              </el-form-item>
            <el-form-item label="分类">
                <el-select v-model="cid" placeholder="请选择分类">
                  <el-option v-for="c in category" :label="c.name" :value="c.id" :key="c.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="search">搜索</el-button>
            </el-form-item>
            </el-form>
          </div>
          <div class="search-body">
            <ShowBookB :cid="cid" :bookName="bookName" v-if="show" />
          </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import ShowBookB from '@/components/ShowBookB.vue'
import axios from 'axios'

export default {
  name: 'Search',
  components: {
    Nav,
    Footer,
    ShowBookB
  },
  data() {
      return {
        fit: 'fill',
        show: false,
        category: [],
        bookName:'',
        cid:0
      }
  },
  created(){
    axios.get(this.$SERVER_ADDRESS+'/category/all').then(
        response => (
          this.category = response.data.list
        )
    )
  },
  methods:{
     async search(){
      if(this.bookName.length>1){
        console.log(this.cid)
        if(this.show){
          this.show = false;
        }
        await this.$nextTick()
        this.show = true
      }
    }
  }
}
</script>

<style scoped>
.search{
  width: 1200px;
  margin: 20px auto 20px auto;
}
.search-title{
  width: 100%;
  height: 45px;
  margin: auto;
}
.search-body{
  width: 100%;
  height: 1050px;
}
</style>
