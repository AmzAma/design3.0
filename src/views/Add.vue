<template>
  <div class="add">
    <van-grid :column-num="3" :border="false" >
      <van-grid-item icon="http://42.192.149.116:3001/images/add1.png" text="发布问题" @click="goToSendQuestion" />
      <van-grid-item icon="http://42.192.149.116:3001/images/add2.png" text="回答问题" @click="goToReplyQuestion" />
      <van-grid-item icon="http://42.192.149.116:3001/images/add3.png" text="发布美图" />
      <van-grid-item icon="http://42.192.149.116:3001/images/add4.png" @click="backClick"  />
    </van-grid>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      gridList: []
    }
  },
  methods:{
    goToSendQuestion(){
      this.$router.push("/sendquestion")
    },
    goToReplyQuestion(){
      this.$router.push("/replyquestion")
    },
    backClick(){
      this.$router.go(-1);
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