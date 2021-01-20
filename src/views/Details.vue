<template>
    <div v-title data-title="书籍" class="details-container">
      <Nav />
      <div class="details-header">
        <div class="header-left">
          <el-card class="box-card">
            <el-image class="bookcover" :src="cover" :fit="fit"></el-image>
          </el-card>
        </div>
        <div class="header-right">
          <ul>
            <li>{{book.bookName}}</li>
            <li>{{book.author}}</li>
            <li>类别:{{ book.category | capitalize }}</li>
          </ul>
        </div>
      </div>
      <div class="details-body">
        <div style="width: 100%;height: 40px;text-align: left;text-indent: 20px;line-height: 40px;">
          <h4 style="color:#666">内容简介:</h4>
        </div>
        <div style="text-align: left;line-height: 20px;text-indent: 10px;">{{ book.description }}</div>
      </div>
      <div class="details-footer">
        <div class="qr-letf">
          <div class="qr-waper">
            <el-image class="qr" :src="qr" :fit="fit"></el-image>
          </div>
          <div class="qr-text">
            <p>微信扫一扫，关注公众号</p>
            <p>或者搜索<span style="color:red;font-weight: bolder;font-size: large;">Epub之家</span>关注</p>
          </div>
        </div>
        <div class="qr-right">
          <div class="code-text">
            <p>请发送此代码到公众号<span style="color:red;font-weight: bolder;font-size: x-large;">{{ book.pcCode }}</span>获得下载码</p>
          </div>
          <div class="code-form">
            <el-form :inline="true" class="demo-form-inline">
            <el-form-item>
              <el-input v-model="text" placeholder="公众号返回的代码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" v-model="text" @click="downloadFile">下载</el-button>
            </el-form-item>
          </el-form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
import Nav from '@/components/Nav.vue'
import axios from 'axios';
export default {
  filters: {
    capitalize: function(v){
      if(typeof(v) == 'undefined'){
        return "默认分类"
      }else{
        return v.name;
      }
      
    }
  },
  data() {
      return {
        qr:'1609945891.png',
        fit: 'fill',
        text:'',
        book:{},
        downloadCode:'',
        cover:''
      }
  },
  name: 'Details',
  props: {
    msg: String
  },
    components: {
    Footer,
    Nav
  },
  created(){
      let self=this;
      let id = this.$route.params.bid
      if(typeof(this.$route.params.bid) == "undefined"){ id=1 }
      axios.get(this.$SERVER_ADDRESS+'/book/'+id).then(function(response){
        self.book = response.data.data
        self.cover = response.data.data.bookCover
      }).catch(function(error){
          self.$alert('加载失败'+error, '提示', {
            dangerouslyUseHTMLString: true
          });        
      })
  },
  methods: {
    downloadFile(){
      let self = this
      if(this.text.length>=4){
        axios.post(this.$SERVER_ADDRESS+'/book/code/'+this.text).then(function(response){
          if(response.data.code != 404){
            self.$alert('<a target="_blank" href="'+response.data.data.bookUrl+'">点击下载</a>', '下载地址', {
            dangerouslyUseHTMLString: true
          });
          }else{
            self.$alert('代码错误', '下载地址', {
            dangerouslyUseHTMLString: true
          });
          }
        }).catch(function(error){
          self.$alert('获取失败'+error, '下载地址', {
            dangerouslyUseHTMLString: true
          });
        })
      }
    }
  }
}
</script>

<style scoped>
.details-container{
  width: 1200px;
  height: 1150px;
  margin: auto;
}
.box-card {
  width: 378px;
  height: 298px;
}
.bookcover {
  width: 164px;
  height: 240px;
}

.details-header{
  width: 100%;
  height: 300px;
  margin-top: 20px;
}

.details-body{
  width: 100%;
  height: 150px;
}

.details-footer{
  width: 100%;
  height: 300px;
  margin: auto;
}

.header-left{
  width: 380px;
  height: 100%;
  float: left;
}
.header-right{
  width: 820px;
  height: 100%;
  float: right;
}
.header-left{
  width: 378px;
  height: 100%;
}
.header-right ul{
  width: 100%;
  height: 250px;
  margin: 50px auto auto 0px;
  display: block;
}
.header-right ul li{
  list-style: none;
  margin: 10px auto;
  text-align: left;
  text-indent: 50px;
  font-weight: bolder;
  font-size: 20px;
}
.qr-letf{
  width: 200px;
  height: 100%;
  float: left;
}
.qr-right{
  width: 1000px;
  height: 100%;
  float: right;
}
.qr-waper{
  width: 100%;
  height: 150px;
  margin: 20px auto;
}
.qr-text{
  width: 100%;
  height: 120px;
}
.qr{
  width: 128px;
  height: 128px;
}
.code-text{
  width: 400px;
  height: 100px;
  margin: auto;
  line-height: 100px;
}
.code-form{
  width: 300px;
  height: 250px;
  margin: auto;
}
</style>
