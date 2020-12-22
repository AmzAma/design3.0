<template>
<div class="login">
 <p>登陆注册</p>
 <span>未注册用户，验证后即完成注册</span>
 <div class="txt">
   <van-cell-group>
  <van-field v-model="value" label="" border="true" placeholder="请输入手机号码"  />
</van-cell-group>
<van-field
  v-model="sms"
  center
  clearable
  label=""
  placeholder="请输入短信验证码"
>
  <template #button>
    <van-button size="small" type="primary">发送验证码</van-button>
  </template>
</van-field>
<van-button type="primary" block>登录</van-button>
 </div>
</div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const value = ref('');
    return { value };
  },
};
</script>
<style lang="scss" scoped>
.login{
   text-align: left;
   padding: 0 30px;
 p{
    padding: 20px 0 0 10px;
    font-size: 28px;
    color: #333333;
    line-height: 40px;
   }
   span{
     padding: 5px 0 0 10px;
    font-size: 15px;
    color: #C1C1C1;
    line-height: 21px;
   }
   .txt{
     margin-top: 50px;
   }
   .van-cell {
     border-bottom: 1px solid #E3E3E3;
   }
   .van-button--block{
        width: 100%;
        height: 50px;
        line-height: 50px;
        border-radius: 3px;
        color: #fff;
        font-size: 18px;
        margin-top: 30px;
        background: #D5BB8B;
        border: 0;
   }
}
  
</style>