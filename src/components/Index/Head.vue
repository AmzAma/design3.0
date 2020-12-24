<template>

<div class="index">
  <div class="top"> 
     <div style="position:relative">
      <span class="designtext">设计本</span>
      <van-search
        placeholder="新中式"
        background="transparent"
        shape="round"
      />
    </div>   
    </div>
    <!-- 切换 -->
  
   <van-tabs color="#fff">
      <van-tab
       v-for="item in navList"
        :key="item.path"
        :to="item.path"
        :title="item.text"
      >
       </van-tab>
    </van-tabs>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    navList: Array
  }
});
</script>

<style lang="scss" scoped>
.index{
  margin:0;
  padding:0;
  .top{
    width: 100%;
    height:60px;
    background:#f6483f;
    div{
      display:flex;
      flex-direction: row;
    .designtext{
      color: white;
      font-size: 25px;
      font-weight: 900;
      display: inline-block;
      height:60px;
      line-height: 60px;
      margin-left:15px;
    }  
  .van-search{
    .van-search__content {
    display: flex;
    -webkit-box-flex: 1;
    padding-left: 0.32rem;
    background-color: rgba(255, 255, 255, 0.1);
    flex: 1 1 0%;
    border-radius: 0.05333rem;
}}}}}
</style>