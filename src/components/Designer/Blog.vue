<template>
  <div class="blog">
    <van-nav-bar left-text="博文" size="20" :border="false">
      <template #right>
        <span class="pian">18篇</span>
        <van-icon name="arrow" color="#999"/>
      </template>
    </van-nav-bar>
    <van-swipe :loop="false" :show-indicators="false" >
      <van-swipe-item>
        <van-image width="100%" radius="5px 5px 0 0" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="blog-con">
          <p>台湾的精品旅店-让住宿不仅仅是住宿（二）</p>
          <p>继续上，刚好两个旅店，这个在台湾的高雄市。高雄-佳适旅店佳适旅</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <van-image width="100%" radius="5px 5px 0 0" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="blog-con">
          <p>台湾的精品旅店-让住宿不仅仅是住宿（二）</p>
          <p>继续上，刚好两个旅店，这个在台湾的高雄市。高雄-佳适旅店佳适旅</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <van-image width="100%" radius="5px 5px 0 0" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="blog-con">
          <p>台湾的精品旅店-让住宿不仅仅是住宿（二）</p>
          <p>继续上，刚好两个旅店，这个在台湾的高雄市。高雄-佳适旅店佳适旅</p>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <van-image width="100%" radius="5px 5px 0 0" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <div class="blog-con">
          <p>台湾的精品旅店-让住宿不仅仅是住宿（二）</p>
          <p>继续上，刚好两个旅店，这个在台湾的高雄市。高雄-...</p>
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
      overflow: hidden;
      margin-left: 10px;
      background: #eee;
      border-radius: 0 0 5px 5px;
    }
  }
  .pian{
    font-size: 10px;
    margin-right: 10px;
    color: #999;
  }
  .van-image{
    float: left;
    border-radius: 30px;
  }
  .blog-con{
    float: left;
    padding: 10px;
    p{
      text-align: left;
      &:nth-child(1){
        margin-top: 10px;
        font-size: 16px;
      }
      &:nth-child(2){
        margin-top: 10px;
        font-size: 10px;
        color: #999;
        padding-bottom: 5px;
        width: 90%;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>