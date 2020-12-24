<template>
  <van-nav-bar left-arrow>
    <template #right>
      <van-icon name="ellipsis" color="#000"/>
    </template>
  </van-nav-bar>
  <ul class="des-header">
    <li>
      <van-image width="1.5rem" height="1.5rem" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </li>
    <li>
      <p>方界设计</p>
      <p><van-icon name="vip-card" color="red" /></p>
      <p><van-icon name="location-o" />广东深圳</p>
    </li>
    <li>
      <p>
        <span>关注</span>
      </p>
    </li>
  </ul>
  <ul class="des-charge">
    <li>
      <p>￥50-80/m<sup>2</sup></p>
      <p>设计收费</p>
    </li>
    <li>
      <div>
        <p>135</p>
        <p>粉丝</p>
      </div>
      <div>
        <p>149</p>
        <p>预约</p>
      </div>
    </li>
  </ul>
  <van-nav-bar left-text="案例" size="20">
    <template #right>
      <span class="an-p">18篇</span>
      <van-icon name="arrow" color="#999"/>
    </template>
  </van-nav-bar>
  <van-swipe :loop="false" :width="350" :height="100" :show-indicators="false">
    <van-swipe-item>
      <van-image width="100%" height="100%" radius="5px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </van-swipe-item>
    <van-swipe-item>
      <van-image width="100%" height="100%" radius="5px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </van-swipe-item>
    <van-swipe-item>
      <van-image width="100%" height="100%" radius="5px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </van-swipe-item>
    <van-swipe-item>
      <van-image width="100%" height="100%" radius="5px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </van-swipe-item>
  </van-swipe>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({  
  
});
</script>

<style lang="scss" >
  .van-icon-arrow-left::before {
    content: "";
    color: #000;
  }
  .des-header{
    overflow: hidden;
    padding: 0 15px;
    li{
      float: left;
      height: 60px;
      &:nth-child(2){
        margin-left: 5px;
        p{
          margin-top: 5px;
          &:nth-child(1){
            font-size: 14px;
          }
          &:nth-child(2){
            font-size: 12px;
            text-align: left;
          }
          &:nth-child(3){
            font-size: 10px;
          }
        }
      }
      &:nth-child(3){
        position: relative;
        float: right;
        p{
          width: 60px;
          height: 25px;
          line-height: 25px;
          color: #f6483f;
          border:1px solid #f6483f;
          border-radius: 4px;
          font-size:10px;
          background: #fff;
          position:absolute;
          right: 0;
          bottom: 0;
        }
      }
    }
  }
  .des-charge{
    overflow: hidden;
    padding: 20px 15px 10px;
    color: #999;
    border-bottom: 1px solid #ddd;
    li{
      float: left;
      p {
        &:nth-child(1){
          font-size: 16px;
        }
        &:nth-child(2){
          font-size: 8px;
          text-align: left;
          margin-top: 3px;
        }
      }
      &:nth-child(2){
        float:right;
        div{
          display:inline-block;
          &:nth-child(1){
            margin-right: 40px;
          }
        }
      }
    }
  }
  .van-swipe{
    .van-swipe-item{
      padding-left: 10px;
    }
  }
  .van-nav-bar__text{
    font-size: 18px;
    color: #000;
  }
  .an-p{
    font-size: 10px;
    margin-right: 10px;
    color: #999;
  }
</style>