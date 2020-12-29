<template>
  <div class="reply">
    <van-nav-bar title="回答问题" :placeholder ="true" :fixed="true" :border="true">
      <template #left>
        <van-icon name="cross" size="18" @click="backClick" />
      </template>
    </van-nav-bar>

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

      <div class="reply-list" v-for="(item,index) in replyList" :key="index">
        <div class="list-top">
          <img :src="item.Portait" alt="">
          <span>{{ item.name }} 的题闻等你来回答</span>
        </div>
        <div style="clear:both"></div>
        <div class="list-title">
          {{ item.title }}
        </div>
        <div class="list-bottom">
          <span>
            {{ item.see }} 浏览 &nbsp;&nbsp;&nbsp;&nbsp; {{ item.reply }} 回答
          </span>
          <button>我来答</button>
        </div>
        
      </div>
      
    </van-pull-refresh>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import { Toast } from 'vant';
import { getQuestionApi } from "../utils/api";

export default defineComponent({
  data(){
    return{
      replyList:[]
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
    this.getQuestion();
  },
  methods:{
    backClick(){
      this.$router.go(-1);
    },
    async getQuestion() {
      const res = await getQuestionApi();
      this.replyList = res.results[0].replyquestion; 
      console.log(res);
    }
  }
})
</script>

<style lang="scss" scoped>
.reply{
  width: 100%;
  .van-icon-cross::before{
    color: rgb(80,80,80);
  }
  .reply-list{
    margin: 15px 15px;
    padding: 0 0  15px 0;
    border-bottom: 1px solid #ccc;
    .list-top{
      text-align: left;
      overflow: hidden;
      img{
        display: block;
        width: 36px;
        height: 36px;
        float: left;
        overflow: hidden;
      }
      span{
        margin-left: 10px;
        font-size: 12px;
        display: block;
        float: left;
        overflow: hidden;
        height: 36px;
        line-height: 36px;
        color: #9F9F9F;
      }
    }
    .list-title{
      margin: 10px 0;
      text-align: left;
      font-size: 20px; 
      font-family: PingFang SC;
      font-weight: 500;
      color: #333333;
    }
    .list-bottom{
      height: 20px;
      span{
        display: block;
        text-align: left;
        font-size: 12px;
        color: #9F9F9F;
        float: left;
        overflow: hidden;
        position: relative;
        bottom: 0;
      }
      button{
        width: 70px;
        height: 25px;
        background: #F6483F;
        border-radius: 12px;
        float: right;
        overflow: hidden;
        font-size: 16px;
        color: #fff;
        outline: none;
        border:none;
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