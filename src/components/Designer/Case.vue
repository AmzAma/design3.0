<template>
  <div class="case" v-if="designerList.desName">
    <van-nav-bar left-text="案例" size="20" :border="false" @click="goToDesigner(designerList.desId)">
      <template #right>
        <span class="pian">{{ designerList.casecount }}篇</span>
        <van-icon name="arrow" color="#999"/>
      </template>
    </van-nav-bar>
    <van-swipe :loop="false" :show-indicators="false">
      <van-swipe-item v-for="(item,index) in designerList.caseshow" :key="item.index">
        <van-image width="100%" height="250px" radius="7px" :src="item.img" />
        <div class="case-con">
          <p>{{ item.casetitle }}</p>
          <p>{{ item.subhase }}</p>
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
      this.$router.push({ name:"caseexhibition", params:{ desId:id}});
    }
  }
});
</script>

<style lang="scss" scoped>
  .van-swipe{
    padding-bottom: 20px;
    .van-swipe-item{
      margin-left: 10px;
    }
  }
  .pian{
    font-size: 10px;
    margin-right: 10px;
    color: #999;
  }
  .case-con{
    float: left;
    p{
      text-align: left;
      &:nth-child(1){
        margin-top: 15px;
        font-size: 16px;
      }
      &:nth-child(2){
        margin-top: 10px;
        font-size: 10px;
        color: #999;
      }
    }
  }
</style>