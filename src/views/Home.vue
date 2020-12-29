<template>
  <div>
    <router-view />
    <!-- <van-tabbar v-model="active" route :placeholder="true">
      <van-tabbar-item
        v-for="item in tabbarList"
        :key="item.to"
        :icon="item.icon"
        :to="item.to"
      >
        {{ item.title }}
      </van-tabbar-item>
    </van-tabbar> -->

    <van-tabbar v-model="active">
      <van-tabbar-item to="/index">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/design">
        <span>设计师</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="plus" to="/add"></van-tabbar-item>
      <van-tabbar-item to="/message">
        <span>消息</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item to="/mine">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import { ref } from 'vue';

export default defineComponent({
  data() {
    return {
      active: 0,
      icon: {
        active: 'http://42.192.149.116:3001/images/tabbar5.png',
        inactive: 'http://42.192.149.116:3001/images/tabbar1.png',
      },
      icon2: {
        active: 'http://42.192.149.116:3001/images/tabbar2.png',
        inactive: 'http://42.192.149.116:3001/images/tabbar6.png',
      },
      icon3: {
        active: 'http://42.192.149.116:3001/images/tabbar3.png',
        inactive: 'http://42.192.149.116:3001/images/tabbar7.png',
      },
      icon4: {
        active: 'http://42.192.149.116:3001/images/tabbar4.png',
        inactive: 'http://42.192.149.116:3001/images/tabbar8.png',
      },
    };
  },
  setup() {
    const active = ref(0);
    return { active };
  },
});
</script>

<style lang="scss" scoped>
</style>