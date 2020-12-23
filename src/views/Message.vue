<template>
  <div class="msg">
    <van-nav-bar title="消息中心" :placeholder ="true" :fixed="true" :border="true">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <van-grid :column-num="3" :border="false" >
      <van-grid-item icon="photo-o" text="评论和@" @click="goToComment" />
      <van-grid-item icon="photo-o" text="赞和收藏" />
      <van-grid-item icon="photo-o" text="系统通知" />
    </van-grid>
    
    <van-swipe-cell :before-close="beforeClose">
      <div class="cell-left">
        <van-image
          round
          width="36px"
          height="36px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <div class="cell-right">
        <div class="cell-title">
          小本头条
          <span>今天08:30</span>
        </div>
        <span>212m暖暖朴朴风，三人一喵的理想家！</span> 
      </div>
      <template #right>
        <van-button square text="删除" type="danger" class="delete-button" />
      </template>
    </van-swipe-cell>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Dialog } from 'vant';

export default defineComponent({
  setup() {
    // position 为关闭时点击的位置
    const beforeClose = ({ position }) => {
      switch (position) {
        case 'left':
        case 'cell':
        case 'outside':
          return true;
        case 'right':
          return new Promise((resolve) => {
            Dialog.confirm({
              title: '确定删除吗？',
            }).then(resolve);
          });
      }
    };

    return { beforeClose };
  },
  methods: {
    goToComment(){
      this.$router.push("/comment");
    }
  }
});
</script>

<style lang="scss" scoped>
  .msg {
    width: 100%;
    min-height: 100%;
    background-color: rgb(248,248,248);
  
    .van-nav-bar{
      .van-icon {
        color: black
      }
    }
    
    .van-grid {
      padding-bottom: 10px;
    }

    .van-swipe-cell {
      height: 70px;
      background-color: #fff;

      .cell-left{
        float: left;
        height: 70px;
        line-height: 70px;
        width: 80px;
        text-align: center;

        .van-image{
          margin-top: 15px;
        }
      }
      .cell-right{
        float: left;
        height: 70px;
        width: 290px;
        text-align: left;
        border-bottom: 5px solid #ccc;

        .cell-title{
          font-size: 16px;
          margin-top: 15px;
          margin-bottom: 5px;

          span{
            display: block;
            float: right;
          }
        }
        span{
          display: block;
          font-size: 12px;
          color: #ccc;
        }
      }
      .delete-button {
        height: 70px;
      }
    }
    
    
  }
   
  
</style>