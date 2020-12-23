<template>
  <div class="mine">
    <div class="title">
      <van-image
          round
          width="59px"
          height="59px"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
    </div>
    <div>
      <div class="wrop">
        <div class="wrop-t">
          <van-icon name="user-circle-o" />
          <span class="txt">找设计师</span>
        </div>
         <div class="wrop-t">
          <van-icon name="user-circle-o"/>
          <span class="txt">提交需求</span>
        </div>
      </div>
      <div class="main">
        <div class="">
          <van-cell title="单元格" is-link />
          <van-cell title="单元格" is-link />
        </div>
       <div>
          <van-cell title="单元格" is-link />
          <van-cell title="单元格" is-link />
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>


<style lang="scss" >
 .mine{
   background: #eee;
   .title{
     width: 100%;
     height: 206px;
     background: #F6483F;
     position: relative;
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
    text-align: center;
    padding: 0 10px;
     .wrop-t{
       width: 175px;
       height: 40px;
       background:#fff ;
       font-size: 16px;
       color: #F6483F;
       line-height: 40px;
       display: flex;
       text-align: center;
       margin: 9px 0;
       .van-icon{
        font-size: 20px;
        line-height: 40px;
        margin:0 3px 0 35px;
       }
     }
   }
 }
</style>