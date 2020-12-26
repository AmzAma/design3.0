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
          icon:"http://42.192.149.116:3001/images/add1.png",
          text:"发布问题"
        },
        {
          icon:"http://42.192.149.116:3001/images/add1.png",
          text:"回答问题"
        },
        {
          icon:"http://42.192.149.116:3001/images/add1.png",
          text:"发布美图"
        },
        {
          icon:"http://42.192.149.116:3001/images/add1.png",
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