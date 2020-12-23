<template>
  <van-nav-bar title="设计师" :border="false">
    <template #right>
      <van-icon name="search" size="22" />
    </template>
  </van-nav-bar>
  <van-dropdown-menu active-color="#000">
    <van-dropdown-item v-model="state.value1" :options="option1" title="城市"/>
    <van-dropdown-item v-model="state.value2" :options="option2" title="擅长空间"/>
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
      { text: '杭州', value: 0 },
      { text: '111', value: 1 },
      { text: '111', value: 2 },
    ];
    const option2 = [
      { text: '111', value: 0 },
      { text: '111', value: 1 },
      { text: '111', value: 2 },
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
</style>