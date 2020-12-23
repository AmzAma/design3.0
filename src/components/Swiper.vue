<template>
  <van-swipe
    class="my-swipe"
    :autoplay="autoplay"
    :indicatorColor="indicatorColor"
  >
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

<style>
.my-swipe .van-swipe-item{
  color: #fff;
  height: 200px;
  background-color: #39a9ed;}
  img{
    width: 714px;
    height: 280px
  }
</style>
