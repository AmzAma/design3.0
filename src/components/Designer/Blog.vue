<template>
  <div class="blog" v-if="designerList.desName">
    <van-nav-bar left-text="博文" size="20" :border="false" @click="goToDesigner(designerList.desId)">
      <template #right>
        <span class="pian">{{ designerList.blogcount }}篇</span>
        <van-icon name="arrow" color="#999"/>
      </template>
    </van-nav-bar>
    <van-swipe :loop="false" :show-indicators="false" >
      <van-swipe-item v-for="(item,index) in designerList.blogshow" :key="item.index">
        <van-image width="100%" height="250px" radius="7px 7px 0 0" :src="item.img" />
        <div class="blog-con">
          <p>{{ item.blogtitle }}</p>
          <p>{{ item.subhase}}</p>
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({  
  props: ["designerList"],
  methods: {
    goToDesigner(id){
      this.$router.push({ name:"blogexhibition", params:{ desId:id}});
    }
  }
});
</script>

<style lang="scss" scoped>
  .van-swipe{
    padding-bottom: 20px;
    .van-swipe-item{
      overflow: hidden;
      margin-left: 10px;
      background: #eee;
      border-radius: 0 0 5px 5px;
    }
  }
  .pian{
    font-size: 10px;
    margin-right: 10px;
    color: #999;
  }
  .van-image{
    float: left;
    border-radius: 30px;
  }
  .blog-con{
    float: left;
    padding: 10px;
    p{
      text-align: left;
      &:nth-child(1){
        margin-top: 10px;
        font-size: 16px;
      }
      &:nth-child(2){
        margin-top: 10px;
        font-size: 10px;
        color: #999;
        padding-bottom: 5px;
        width: 90%;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>