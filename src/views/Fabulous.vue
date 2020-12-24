<template>
  <van-nav-bar
    title="赞和收藏"
    left-arrow
    @click-left="onClickLeft"
  />

  <img src="../assets/img/comment.jpg" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

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
    height: 100%;
  }
  .van-icon-arrow-left::before{
    color: #000;
  }

</style>