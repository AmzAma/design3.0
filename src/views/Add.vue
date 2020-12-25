<template>
  <div class="add">
    <van-grid :column-num="3" :border="false" >
      <van-grid-item v-for="(item,index) in gridList" :key="index" :icon="item.icon" :text="item.text" />
    </van-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      gridList: [
        {
          icon:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F01%2F3e%2F05%2F40%2Fthe-sandbar-that-links.jpg&refer=http%3A%2F%2Fmedia-cdn.tripadvisor.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611405214&t=35007edb0b4ca07f46d9fd69619f9aad",
          text:"发布问题"
        },
        {
          icon:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F01%2F3e%2F05%2F40%2Fthe-sandbar-that-links.jpg&refer=http%3A%2F%2Fmedia-cdn.tripadvisor.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611405214&t=35007edb0b4ca07f46d9fd69619f9aad",
          text:"回答问题"
        },
        {
          icon:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F01%2F3e%2F05%2F40%2Fthe-sandbar-that-links.jpg&refer=http%3A%2F%2Fmedia-cdn.tripadvisor.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611405214&t=35007edb0b4ca07f46d9fd69619f9aad",
          text:"发布美图"
        },
        {
          icon:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F01%2F3e%2F05%2F40%2Fthe-sandbar-that-links.jpg&refer=http%3A%2F%2Fmedia-cdn.tripadvisor.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611405214&t=35007edb0b4ca07f46d9fd69619f9aad",
        }
      ]
    }
  }
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