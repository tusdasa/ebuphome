<template>
  <div class="home" v-title data-title="首页">
    <Nav />
    <Swiper />
    <h2 style="text-align: left;text-indent: 5px;">猜你喜欢</h2>
    <ShowBook />
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Swiper from '@/components/Swiper.vue'
import Nav from '@/components/Nav.vue'
import ShowBook from '@/components/ShowBook.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Swiper,
    Nav,
    ShowBook,
    Footer
  }
}
</script>
