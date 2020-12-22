<template>
  <van-swipe
    class="my-swipe"
    :autoplay="autoplay"
    :indicatorColor="indicatorColor"
  >
    <van-swipe-item v-for="item in swiperList" :key="item">
      <img src="https://pic50.t8tcdn.com/adcms/ad/67f6851cd104db43ea6ed7648a044819.jpg" alt="" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: {
    autoplay: Number,
    indicatorColor: String,
    swiperList: Array
  }
};
</script>

<style lang="ts">
.my-swipe .van-swipe-item{
  color: #fff;
  height: 200px;
  background-color: #39a9ed;}
  img{
    width: 714px;
    height: 280px
  }
</style>
