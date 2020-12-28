<template>
<div class="fabulous">
  <van-nav-bar
    title="赞和收藏"
    left-arrow
    @click-left="onClickLeft"
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

    <img src="../assets/img/comment.jpg" />
  </van-pull-refresh>
</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
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
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
});
</script>

<style lang="scss" scoped>
.fabulous{
  height: 100vh;
  background-color: rgb(250,250,250);
  img{
    width: 100%;
    height: 100%;
  }
  .van-icon-arrow-left::before{
    color: #000;
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