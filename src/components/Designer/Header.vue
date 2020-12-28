<template>
  <div class="des-hd" v-if="designerList.desName">
    <van-nav-bar left-arrow :border="false" @click-left="onClickLeft">
      <template #right>
        <van-icon name="ellipsis" color="#000"/>
      </template>
    </van-nav-bar>
    <ul class="des-header">
      <li>
        <van-image width="1.5rem" height="1.5rem" round :src="designerList.desPortait"/>
      </li>
      <li>
        <p>{{ designerList.desName }}</p>
        <p><van-icon name="vip-card" color="red" /></p>
        <p><van-icon name="location-o" />{{ designerList.desCity }}</p>
      </li>
      <li>
        <p>
          <span>关注</span>
        </p>
      </li>
    </ul>
    <ul class="des-charge">
      <li>
        <p>￥{{designerList.desPrice}}<sup>2</sup></p>
        <p>设计收费</p>
      </li>
      <li>
        <div>
          <p>{{designerList.desFans}}</p>
          <p>粉丝</p>
        </div>
        <div>
          <p>{{designerList.desYuyue}}</p>
          <p>预约</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  props: ["designerList"],
  methods:{
    onClickLeft() {
      this.$router.go(-1);
    },
  }
});
</script>

<style lang="scss" scoped>
  .des-header{
    overflow: hidden;
    padding: 0 15px;
    li{
      float: left;
      height: 60px;
      &:nth-child(2){
        margin-left: 5px;
        p{
          margin-top: 5px;
          text-align: left;
          &:nth-child(1){
            font-size: 14px;
          }
          &:nth-child(2){
            font-size: 12px;
          }
          &:nth-child(3){
            font-size: 10px;
          }
        }
      }
      &:nth-child(3){
        position: relative;
        float: right;
        p{
          width: 60px;
          height: 25px;
          line-height: 25px;
          color: #f6483f;
          border:1px solid #f6483f;
          border-radius: 4px;
          font-size:10px;
          background: #fff;
          position:absolute;
          right: 0;
          bottom: 0;
        }
      }
    }
  }
  .des-charge{
    overflow: hidden;
    padding: 20px 15px 10px;
    color: #999;
    border-bottom: 1px solid #ddd;
    li{
      float: left;
      p {
        &:nth-child(1){
          font-size: 16px;
        }
        &:nth-child(2){
          font-size: 8px;
          text-align: left;
          margin-top: 5px;
        }
      }
      &:nth-child(2){
        float:right;
        div{
          display:inline-block;
          &:nth-child(1){
            margin-right: 40px;
          }
        }
      }
    }
  }
</style>