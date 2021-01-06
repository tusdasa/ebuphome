<template>
  <div class="book-container">
    <div class="book-waper">
      <el-card class="box-card" v-for="book in bookList" :key="book.id">
        <el-image :src="book.bookCover" :fit="fit" class="bookcover" @click="details(book.id)">
      </el-image>
      <p class="bookname">{{book.bookName}}</p>
      </el-card>
    </div>
    <div class="book-pagination">
      <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000" @next-click="loadNextPage" @current-change="currentPage" @prev-click="loadPrvePage" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ShowBook',
  props: {
    msg: String
  },
  data () {
      return {
        fit: 'fill',
        bookList: [],
        loading: false,
        page:0
      }
  },
    methods: {
      loadNextPage (page) {
      axios.get(this.$SERVER_ADDRESS+'/book/?page='+page+1).then(
        response => (
          this.bookList = response.data.list
        )
      )    
      },
      loadPrvePage (page) {
      axios.get(this.$SERVER_ADDRESS+'/book/?page='+page-1).then(
        response => (
          this.bookList = response.data.list
        )
      )       
      },
      currentPage(page){
      axios.get(this.$SERVER_ADDRESS+'/book/?page='+page).then(
        response => (
          this.bookList = response.data.list
        )
      )
      },
      details (id) {
        this.$router.push({name:'Details',params: {bid: id}})
      }
    },
    created(){
      axios.get(this.$SERVER_ADDRESS+'/book/').then(
        response => (
          this.bookList = response.data.list
        )
      )
    }
}
</script>

<style scoped>
.book-container{
  width: 1200px;
  height: 1050px;
  margin: 20px auto;

}
.book-waper{
  width: 1200px;
  height: 1000px;
  overflow-y: auto;
}
.box-card {
  width: 378px;
  height: 298px;
  float: left;
  margin: 20px 10px auto 10px;
}
.bookcover {
  width: 164px;
  height: 240px;
}
.bookname{
  text-align: center;
  color: black;
  font-weight: bold;
}
.book-pagination{
  height: 50px;
  width: 100%;
}
</style>
