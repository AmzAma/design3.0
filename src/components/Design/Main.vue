<template>
  <ul class="ds-main">
    <li v-for="(item,index) in designList" :key="index">
      <ul class="main-title">
        <li>
          <van-image 
            round
            width="1rem"
            height="1rem"
            :src="item.desPortait"
          />
        </li>
        <li>
          <p>{{ item.desName }}</p>
          <p>
            <span>{{ item.desCity }}</span>
          </p>
        </li>
        <li>
          <p>{{ item.desPrice }}</p>
          <p>元/m<sup>2</sup></p>
        </li>
      </ul>
      <div class="main-img">
        <img :src="item.pic1" alt="">
        <img :src="item.pic2" alt="">
        <img :src="item.pic3" alt="">
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({  
  props:{
    designList: Array,
    showImgList: Array
  }
});
</script>

<style lang="scss" scoped>
  .ds-main {
    padding-top: 94px;
    >li {
      padding: 13px 11px 16px;
      border-bottom: 1px solid #eee;
      .main-title {
        overflow: hidden;
        li{
          height: 46px;
          font-family: PingFang SC;
          float: left;
          &:nth-child(1){
            margin-right: 9px;
          }
          &:nth-child(2){
            text-align: left;
            font-weight: 400;
            p {
              &:nth-child(1){
                font-size: 15px;
                color: #333333;
                margin-bottom: 11px;
                float: left;
              }
              &:nth-child(2){
                span{
                  float: left;
                  font-size: 10px;
                  color: #666666;
                  &:nth-child(1){
                    margin-right: 6px;
                  }
                }
              }
            }
          }
          &:nth-child(3){
            float: right;
            color: #F6483F;
            p {
              &:nth-child(1){
                font-size: 14px;
                margin-bottom: 6px; 
              }
              &:nth-child(2){
                font-size: 10px;
              }
            }
          }
        }
      }
      .main-img{
        img{
          width: 114px;
          height: 114px;
          margin-right: 3px;
          border-radius: 5px;
        }
      }
    }
  }
</style>