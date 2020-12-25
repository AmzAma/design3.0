<template>
  <div class="case">
    <van-nav-bar left-text="案例" size="20" :border="false">
      <template #right>
        <span class="pian">18篇</span>
        <van-icon name="arrow" color="#999"/>
      </template>
    </van-nav-bar>
    <van-swipe :loop="false" :show-indicators="false">
      <van-swipe-item>
        <van-image width="100%" radius="5px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="case-con">
          <p>慢漫 | 方界设计作品</p>
          <p>114m²/现代简约/三居/25图</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <van-image width="100%" radius="5px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="case-con">
          <p>慢漫 | 方界设计作品</p>
          <p>114m²/现代简约/三居/25图</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <van-image width="100%" radius="5px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="case-con">
          <p>慢漫 | 方界设计作品</p>
          <p>114m²/现代简约/三居/25图</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <van-image width="100%" radius="5px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="case-con">
          <p>慢漫 | 方界设计作品</p>
          <p>114m²/现代简约/三居/25图</p>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({  
  
});
</script>

<style lang="scss" scoped>
  .van-swipe{
    padding-bottom: 20px;
    .van-swipe-item{
      margin-left: 10px;
    }
  }
  .pian{
    font-size: 10px;
    margin-right: 10px;
    color: #999;
  }
  .case-con{
    float: left;
    p{
      text-align: left;
      &:nth-child(1){
        margin-top: 15px;
        font-size: 16px;
      }
      &:nth-child(2){
        margin-top: 10px;
        font-size: 10px;
        color: #999;
      }
    }
  }
</style>