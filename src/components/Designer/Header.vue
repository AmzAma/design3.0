<template>
  <van-nav-bar left-arrow right-text="°°°"></van-nav-bar>
  <ul class="des-header">
    <li>
      <van-image width="1.5rem" height="1.5rem" round src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </li>
    <li>
      <p>方界设计</p>
      <p></p>
      <p>广东深圳</p>
    </li>
    <li>
      <p>
        <span>关注</span>
      </p>
    </li>
  </ul>
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
  .van-nav-bar__text{
    color: #000;
  }
</style>