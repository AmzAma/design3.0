<template>
  <div class="msginfo">
  <van-nav-bar
    title="小本头条"
    left-arrow
    @click-left="backClick"
    :fixed="true"
    :placeholder="true"
  />

  <van-pull-refresh v-model="state.loading" style="min-height: 100vh;" :head-height="70" @refresh="onRefresh">
    <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
    <template #pulling="props">
      <img
        class="doge"
        src="http://42.192.149.116:3001/images/freshImg.png"
        :style="{ transform: `scale(${props.distance / 70})` }"
      />
      <p class="freshtitle">嗨，热爱生活的梦想家</p>
    </template>

    <!-- 释放提示 -->
    <template #loosing>
      <img class="doge" src="http://42.192.149.116:3001/images/freshImg.png" />
      <p class="freshtitle">嗨，热爱生活的梦想家</p>
    </template>

    <!-- 加载提示 -->
    <template #loading>
      <img class="doge" src="http://42.192.149.116:3001/images/freshImg.png" />
      <p class="freshtitle">嗨，热爱生活的梦想家</p>
    </template>

    <div class="info">
      <p class="info-time">2小时前</p>
      <div class="infoCard">
        <img src="https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/9c16fdfaaf51f3de9ba8ee1194eef01f3a2979a8.jpg" alt="">
        <p class="info-title">
          现代简约黑白灰，越简洁约高级
        </p>
        <p class="info-content">
          整个空间的视觉线索以弧形元素为主导，贯穿整个布局。看似简单的室内装饰，实际上却十分讲究。          
        </p>
      </div>
    </div>
    
  </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { Toast } from 'vant';
export default defineComponent({
  setup() {
    const state = reactive({
      count: 0,
      loading: false,
    });
    const onRefresh = () => {
      setTimeout(() => {
        Toast('刷新成功');
        state.loading = false;
        state.count++;
      }, 1000);
    };

    return {
      state,
      onRefresh,
    };
  },
  methods:{
    backClick(){
      this.$router.push("/message");
    }
  }
})
</script>

<style lang="scss" scoped>
.msginfo{
  background: #EFEFEF;

  .info{
    margin: 20px 17px;
    
    .info-time{ 
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #ACACAC;
      background-color: #EFEFEF;
      padding-bottom: 15px;
    }
    .infoCard{
      padding-bottom: 8px;
      width: 340px;
      height: 200px;
      background-color: #fff;
      border-radius: 5px;
      img{
        width: 340px;
        height: 120px;
        margin-bottom: 12px;
        border-radius: 5px 5px 0 0;
      }
      .info-title{
        width: 340px;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 600;
        color: #333333;
        text-align: left;
        margin: 0 14px 10px;
      }
      .info-content{
        margin: 0 14px;
        text-align: left;
        font-size: 12px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #666666;
        line-height: 16px;
      }
    }
  }
  .doge {
      width: 45px;
      height: 40px;
    }
    .freshtitle{
      position: relative;
      top: -30px;
    }
}
</style>