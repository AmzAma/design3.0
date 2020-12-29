<template>
  <!-- 条件选择 -->
  <van-dropdown-menu active-color="#000">
    <van-dropdown-item v-model="state.value1" :options="option1"/>
    <van-dropdown-item v-model="state.value2" :options="option2"/>
    <van-dropdown-item v-model="state.value3" :options="option3" />
  </van-dropdown-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { reactive } from 'vue';
import { Toast } from 'vant';
export default defineComponent({  
  setup() {
    const state = reactive({
      value1: 0,
      value2: 0,
      value3: 0,
    });
    const option1 = [
      { text: '全部空间', value: 0 },
      { text: '购物空间', value: 1 },
      { text: '酒店空间', value: 2 },
      { text: '教育机构', value: 3 },
      { text: '商业展示', value: 4 },
      { text: '办公空间', value: 5 },
      { text: '餐饮空间', value: 6 },
      { text: '休闲空间', value: 7 },
    ];
    const option2 = [
      { text: '全部面积', value: 0 },
      { text: '60平米以下', value: 1 },
      { text: '61-80平米', value: 2 },
      { text: '81~100平米', value: 3 },
      { text: '101~120平米', value: 4 },
      { text: '151-200平米', value: 5 },
    ];
       const option3 = [
      { text: '全部造价', value: 0 },
      { text: '0-5万', value: 1 },
      { text: '5-10万', value: 2 },
      { text: '10-15万', value: 3 },
      { text: '15-30万', value: 4 },
      { text: '30-50万', value: 5 },
      { text: '50-100万以上', value: 6 },
    ];
    return {
      state,
      option1,
      option2,
      option3,
    };
  },
});
</script>

<style lang="scss" scoped>
  .van-nav-bar .van-icon {
    color: rgb(0,0,0);
  }
  .van-dropdown-menu{
    width: 100%;
    height: 48px;
    position: fixed;
    background: #fff;
    z-index: 1;
    top:0;
    padding-top: 40px;
  }
</style>