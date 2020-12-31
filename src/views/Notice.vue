<template>
  <div class="notice">
    <van-nav-bar
    title="系统通知"
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

    <div class="info" v-for="(item,index) in tipList" :key="index">
      <p class="info-time">{{item.create_time}}</p>
      <div class="infoCard">
        <img :src="item.tipImg" alt="">
        <p class="info-title">
          {{ item.tipTitle }}
        </p>
        <p class="info-content">
          {{ item.tipContent }}       
        </p>
      </div>
    </div>

  </van-pull-refresh>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { Toast } from 'vant';
import { getMessageListApi} from "../utils/api";

export default defineComponent({
  data(){
    return{
      tipList:[]
    }
  },
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
  mounted(){
    this.getMessageList();
  },
  methods: {
    backClick(){
      this.$router.go(-1);
    },
    async getMessageList() {
      const res= await getMessageListApi();
      this.tipList = res.results[3].noticeList; 
      console.log(this.tipList);
    }
  }
});
</script>

<style lang="scss" scoped>
.notice{
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