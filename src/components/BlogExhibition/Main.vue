<template>
  <div class="blogmain" v-if="designerList.desName">
    <ul class="btop">
      <li>{{designerList.blogcount}}篇</li>
      <li>
        <van-icon name="fire-o" />
        <span>按热度</span>
        <em>|</em>
        <van-icon name="clock-o" />
        <span>按时间</span>
      </li>
    </ul>
    <div class="blogcon" v-for="(item,index) in designerList.blogshow" :key="item.index">
      <div class="blog-img">
        <van-image width="100%" height="100%" :src="item.img" radius="7px 7px 0 0"/>
      </div>
      <div class="blogtext">
        <div class="blogtext-left">
          <p>
            <span>{{ item.blogtitle }}</span>
            <span class="blogtext-right"><van-icon name="eye-o" /><span>{{item.popularity}}</span></span>
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
  .blogmain{
    padding: 10px;
    .btop{
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
    .blogcon{
      padding: 5px 0;
      .blog-img{
        width: 100%;
        height: 170px;
      }
      .blogtext{
        margin-top: 10px;
        overflow: hidden;
        .blogtext-left{
          text-align: left;
          p{
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
        .blogtext-right{
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