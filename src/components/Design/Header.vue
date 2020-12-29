<template>
  <van-nav-bar title="设计师" :border="false" :fixed="true" z-index="2">
    <template #right>
      <van-icon name="search" size="22" />
    </template>
  </van-nav-bar>
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
      { text: '全部', value: 0 },
      { text: '杭州', value: 1 },
      { text: '温州', value: 2 },
      { text: '绍兴', value: 3 },
    ];
    const option2 = [
      { text: '全部', value: 0 },
      { text: '住宅空间', value: 1 },
      { text: '别墅豪宅', value: 2 },
      { text: '办公空间', value: 3 },
      { text: '餐饮空间', value: 4 },
      { text: '商业展示', value: 5 },
      { text: '购物空间', value: 6 },
    ];
    const option3 = [
      { text: '综合排行', value: 0 },
      { text: '最新案例', value: 1 },
      { text: '最佳人气', value: 2 },
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
    padding-top: 46px;
    background: #fff;
    z-index: 1;
  }
</style>