<template>
<div class="send">
  <van-nav-bar title="发布问题" :placeholder ="true" :fixed="true" :border="false">
    <template #right>
      <van-icon name="http://42.192.149.116:3001/images/send.png" size="18" @click="sendsuccess" />
    </template>
    <template #left>
      <van-icon name="cross" size="18" @click="backClick" />
    </template>
  </van-nav-bar>

  <van-cell-group>
    <van-field v-model="value" placeholder="添加标题，最少5个字" />
  </van-cell-group>

  <textarea placeholder="添加描述（选填）" ></textarea>

  <van-button type="primary" text="#添加标签" @click="show = true" color="white"/>
  <van-overlay text="123" :show="show" @click="show = false">
    <div class="wrapper">
      <div class="block">
        <ul class="label-list">
          <li><a href="">户型布局</a></li>
          <li><a href="">新房装修</a></li>
          <li><a href="">旧房改造</a></li>
          <li><a href="">风格设计</a></li>
          <li><a href="">施工问题</a></li>
          <li><a href="">预算方案</a></li>
          <li><a href="">软装搭配</a></li>
          <li><a href="">装修风水</a></li>
          <li><a href="">合同报价</a></li>
          <li><a href="">其他</a></li>
        </ul>
      </div>
    </div>
  </van-overlay>
  <div style="clear:both"></div>
  <van-uploader v-model="fileList" multiple upload-icon="plus" />
</div>
</template>

<script>
import { Toast } from 'vant';
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      value: '',
      show: false,
      fileList: []
    }
  },
  methods:{
    backClick(){
      this.$router.go(-1);
    },
    sendsuccess(){
      Toast("发布成功");
      this.$router.push("/add");
    }
  }
})
</script>

<style lang="scss" scoped>
  .van-icon-cross::before{
    color: rgb(80,80,80);
  }
  textarea{
    width: 320px;
    margin-top: 20px;
    height: 150px;
    font-size: 18px;
    border: 0;
    resize: none;
  }
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 280px;
    height: 390px;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    .label-list{
      li{
        height: 38px;
        line-height: 38px;
        text-align: left;
        padding: 0 25px;
        a{
          font-size: 16px;
          color: #000;
          font-weight: 500;
        }
      }
    }
  }
  .van-button{
    float: left;
    margin-left: 10px;
    margin-bottom: 20px;
  }
  .van-uploader{
    float: left;
    margin-left: 20px;
  }
  

</style>