<template>
  <div class="casemain" v-if="designerList.desName">
    <ul class="ctop">
      <li>{{designerList.casecount}}篇</li>
      <li>
        <van-icon name="fire-o" />
        <span>按热度</span>
        <em>|</em>
        <van-icon name="clock-o" />
        <span>按时间</span>
      </li>
    </ul>
    <div class="casecon" v-for="(item,index) in designerList.caseshow" :key="item.index">
      <div class="con-img">
        <van-image width="100%" height="100%" :src="item.img" radius="7px"/>
      </div>
      <div class="context">
        <div class="context-left">
          <p>
            <span>{{ item.casetitle }}</span>
            <span class="context-right"><van-icon name="eye-o" /><span>{{item.popularity}}</span></span>
          </p>
          <p>{{ item.subhase }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({  
  props: ["designerList"],
});
</script>

<style lang="scss" scoped>
  .van-icon::before {
      padding-right: 3px;
      vertical-align: middle;
  }
  .casemain{
    padding: 10px;
    .ctop{
      overflow: hidden;
      li{
          &:nth-child(1){
            font-size: 14px;
            float: left;
          }
          &:nth-child(2){
            font-size: 12px;
            float: right;
            span{
              vertical-align: middle;
            }
            em{
              padding: 0 7px;
            }
          }
      }
    }
    .casecon{
      padding: 5px 0;
      .con-img{
        width: 100%;
        height: 170px;
      }
      .context{
        margin-top: 10px;
        overflow: hidden;
        .context-left{
          p{
            text-align: left;
            padding: 5px 0;
            &:nth-child(1){
              font-size: 16px;
            }
            &:nth-child(2){
              font-size: 10px;
              color: #999;
            }
          }
        }
        .context-right{
          float: right;
          font-size: 14px;
          color: #999;
          span{
            vertical-align: middle;
          }
        }
      }
    }
 }

</style>