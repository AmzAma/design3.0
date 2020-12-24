<template>
  <van-nav-bar
    title="评论和@"
    left-arrow
    @click-left="onClickLeft"
  />

  <van-pull-refresh v-model="state.loading" style="min-height: 100vh;" :head-height="80" @refresh="onRefresh">
    <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
    <template #pulling="props">
      <img
        class="doge"
        src="https://img.yzcdn.cn/vant/doge.png"
        :style="{ transform: `scale(${props.distance / 80})` }"
      />
    </template>

    <!-- 释放提示 -->
    <template #loosing>
      <img class="doge" src="https://img.yzcdn.cn/vant/doge.png" />
    </template>

    <!-- 加载提示 -->
    <template #loading>
      <img class="doge" src="https://img.yzcdn.cn/vant/doge-fire.jpg" />
    </template>
    <img src="../assets/img/comment.jpg" />
  </van-pull-refresh>

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
  
  img{
    width: 100%;
    height: 100%;
  }
  .van-icon-arrow-left::before{
    color: #000;
  }
  .doge {
    width: 140px;
    height: 72px;
    margin-top: 8px;
    border-radius: 4px;
  }
</style>