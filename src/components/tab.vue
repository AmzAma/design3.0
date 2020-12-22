<template>
  <div class="tab">
    <h3>设计本</h3>
    <ul>
      <li>
        <img src="https://img.shejiben.com/shejiben_img/wap/common/head_customer_online.png" alt="">
      </li>
      <li class="kefu">
        <img src="https://img.shejiben.com/shejiben_img/wap/common/head_download.png" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>
<style  lang="scss" scoped>
.tab{
  width: 100%;
  height: 50px;
  background: #dd4f50;
  display: flex;
  justify-content: space-between;
  h3{
    color: #fff;
    font-size: 20px;
    font-weight: 900;
    line-height: 50px;
    margin-left: 15px;
  }
  ul{
    display: flex;
    .kefu{
     padding: 0 10px;
    }
    li{
        margin: 9px 10px 0 0;
      img{
        width: 44px;
        height: 34px;
      }
    }
  }
}
</style>
