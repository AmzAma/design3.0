<template>
  <van-nav-bar
    title="评论和@"
    left-arrow
    @click-left="onClickLeft"
  />

  <img src="../assets/img/comment.jpg" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Toast } from 'vant';
export default defineComponent({
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
});
</script>

<style lang="scss">
  img{
    width: 100%;
  }
  .van-icon-arrow-left::before{
    color: #000;
  }

</style>