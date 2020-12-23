<template>
 <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
  <van-swipe-item
   v-for="item in swiperList"
   :key="item"
  >
  <img :src="item" alt="">
  </van-swipe-item>
</van-swipe>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    swiperList: Array
  },
  mounted() {
  }
});
</script>

<style>
.my-swipe .van-swipe-item{
  color: #fff;
  height: 200px;
  background-image: linear-gradient(to bottom, #f6483f , white);
  padding-top: 10px;
  }
  img{
    width: 94%;
    height: 200px;
    border-radius: 20px;
  }
</style>
