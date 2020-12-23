<template>
  <div class="add">
    <van-grid :column-num="3" :border="false">
      <van-grid-item icon="photo-o" text="发布问题" />
      <van-grid-item icon="photo-o" text="回答问题" />
      <van-grid-item icon="photo-o" text="发布美图" />
      <van-grid-item icon="photo-o" />
    </van-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

});
</script>

<style lang="scss" scoped>
  .van-grid{
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 80px;
  }

</style>