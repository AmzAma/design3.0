<template>
  <div class="footer">
    <van-button type="primary" color="#fff" round>
      <van-icon name="phone" color="red"/>
      <span class="relation">联系TA</span>
    </van-button>
    <van-button type="primary" color="red" round>
      <van-icon name="phone" />联系TA
    </van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({  
  
});
</script>

<style lang="scss" scoped>
 .footer{
    position:fixed;
    left: 77px;
    bottom: 10px;
    z-index: 10;
    .van-button{
      padding: 0 20px;
      margin: 0 5px;
      &:nth-child(1){
        box-shadow: 0 0 5px 1px #eee;
      }
    }
    .relation{
        color: red;
    }
 }

</style>