<template>
<div class="login">
    <van-icon name="cross"  />
    <h3>登陆注册</h3>
    <span>未注册用户，验证后即完成注册</span>
    <div class="txt">
      <van-field v-model="state.tel" type="tel"  placeholder="请输入手机号" />
      <van-field v-model="state.password" type="password"  placeholder="请输入密码" />
      <van-button type="primary" block @click="loginfn">登录</van-button>
      <div class="text-f"> 
      <span>账号密码登陆</span>
      <span>收不到验证码</span>
    </div>
    </div>
    <div class="qq">
      <van-image round width="48" height="48" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <van-image round width="48" height="48" src="https://img.yzcdn.cn/vant/cat.jpeg" />
      <van-image round width="48" height="48" src="https://img.yzcdn.cn/vant/cat.jpeg" />
    </div>
 <p class="">登录注册代表你已同意 <b>《服务协议》和《隐私协议》</b></p>
 <div class="fot"></div>
</div>
</template>

<script>
import { reactive } from 'vue';
import{ getLoginApi }from "../utils/api"
export default {
  setup() {
    const state = reactive({
      tel: '',
      password:''
    });
    return { state };
  },
  methods:{
    async loginfn() {
      let res= await getLoginApi({
        tel:this.state.tel,
        password:this.state.password
      });
      if(res){
        console.log(99999)
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.login{
   text-align: left;
   padding: 0 30px;
   padding-top: 55px;
   overflow: hidden;
   height: 100%;
   .van-icon-cross{
     font-size: 20px;
     color: #535353;
   }
 h3{
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
        background: #E8E8E8;
        border: 0;
   }
   .text-f{
     display: flex;
     justify-content: space-between;
     font-size: 14px;
     span{
       font-size: 16px;
     }
     :nth-child(1){
       color: #D0BC91;
     }
   }
   .qq{
     display: flex;
     justify-content: space-between;
     padding:260px 30px 0px 30px;
   }
   p{
     color: #868686;
     font-size: 12px;
     text-align: center;
     margin-top: 20px;
     b{
       font-weight: 900;
       color: black;
     }
   }
   .fot{
     width: 135px;
     height: 5px;
     background: black;
     margin: 7px auto;
     border-radius: 3px;
   }
}
  
</style>

