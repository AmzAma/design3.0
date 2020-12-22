<template>
  <div class="index">
    <div class="top"> 
     <div style="position:relative">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        background="transparent"
        shape="round"
      />
      <!-- 轮播图 -->
      <!-- <swiper
        :swiperList="swiperList"
        indicatorColor="white"
        :autoplay="3000"
      /> -->
     <van-swipe :autoplay="3000" lazy-render>
     <van-swipe-item v-for="image in images" :key="image">
     <img :src="image" />
     </van-swipe-item>
     </van-swipe>
    </div>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const images = [
      'https://pic50.t8tcdn.com/adcms/ad/67f6851cd104db43ea6ed7648a044819.jpg',
      'https://pic50.t8tcdn.com/adcms/ad/a426fb593e83d872683ccdab6b8e1928.png',
      'https://pic50.t8tcdn.com/adcms/ad/c674870a3e49a0d9720c7545d894ac61.jpg',
      'https://pic50.t8tcdn.com/adcms/ad/4d684196f66201c901c246dd6b0ae801.jpg',
      'https://pic50.t8tcdn.com/adcms/ad/61f9a1570d63cfa36858b83fd65e72.jpg'
    ];
    return { images };
  },
});
</script>

<style>
.index{
  margin:0;
  padding:0;
}
.top{
  width: 100%;
  height:300px;
  background:#f6483f;
}
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
  }
</style>