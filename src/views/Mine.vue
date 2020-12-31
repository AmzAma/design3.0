<template>
  <div class="mine">
    <div class="title">
      <div class="sign" @click="tologin">
        <p >签到</p>
      </div>
      <van-image
          round
          width="59px"
          height="59px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
      <div class="name">
        <p>178abeac88585</p>
      </div>  
      <div class="ID">
        <p>ID:10505704 金币0</p>
      </div>
      <div class="change">
        <p>修改资料</p>
      </div>
    </div>
    <div>
      <div class="wrop">
        <div class="wrop-t">
          <van-icon name="user-circle-o" />
          <span class="txt">找设计师</span>
        </div>
         <div class="wrop-t">
          <van-icon name="newspaper-o"/>
          <span class="txt">提交需求</span>
        </div>
      </div>
      <div class="main">
        <div class="cell">
          <van-cell title="我的交易" is-link  icon="balance-list-o"/>
          <van-cell title="我的预约" is-link  icon="comment-o"/>
        </div>
       <div class="cell">
          <van-cell title="图片" is-link icon="photo"/>
          <van-cell title="收藏" is-link icon="star"/>
           <van-cell title="问答" is-link icon="question"/>
           <van-cell title="好友" is-link icon="friends"/>
           <van-cell title="金币" is-link icon="gem"/>
       </div>
       <div class="cell">
          <van-cell title="设置" is-link icon="setting"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 }

</script>


<style lang="scss" scoped>
 .mine{
   
   background: #eee;
   .title{
     height: 206px;
     background: #F6483F;
     position: relative;
     .sign{
     font-size: 14px;
     color: #fff;
     position: absolute;
     top: 20px;
     right: 20px;
     border-radius: 10px;
     border: 1px solid #fff;
     padding: 5px 20px;
   }
   .name{
     position: absolute;
     top:110px;
     width:375px;
     text-align: center;
     color: #fff;
     p{
       font-size: 16px;
       font-weight: 900px;
     }
   }
   .ID{
      position: absolute;
     top:130px;
     width:375px;
     text-align: center;
     color: #fff;
     font-size: 12px;
   }
   .change{
      position: absolute;
      top:160px;
      left: 145px;
      text-align: center;
      color: #fff;
      font-size: 12px;
      width: 86px;
      height: 25px;
      border: 1px solid #fff;
      line-height: 25px;
      border-radius: 20px;
      background: rgba($color: #fff, $alpha: 0.3);
   }
   }
   .van-image--round{
     position:absolute;
     top:35px;
     left:154.05px
   } 
  .wrop{
    font-size: 12x;
    display: flex;
    justify-content: space-between;
    // text-align: center;
    padding: 0 10px;
     .wrop-t{
       width: 175px;
       height: 40px;
       background:#fff ;
       font-size: 16px;
       color: #F6483F;
       line-height: 40px;
       display: flex;
      //  text-align: center;
       margin: 9px 0;
       .van-icon{
        font-size: 20px;
        line-height: 40px;
        margin:0 3px 0 35px;
       }
     }
   }
   
 }
 .cell{
     margin-bottom: 10px;
     text-align: left;
     font-size: 14px;
   }
   
</style>