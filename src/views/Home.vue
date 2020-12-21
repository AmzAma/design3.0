<template>
  <div>
   
    <van-tabbar v-model="active" route :placeholder="true">
      <van-tabbar-item
        v-for="item in tabbarList"
        :key="item.to"
        :icon="item.icon"
        :to="item.to"
      >
        {{ item.title }}
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
      tabbarList: [
        {
          title: "首页",
          icon: "home-o",
          to: "/index",
          dot: false
        },
        {
          title: "设计师",
          icon: "search",
          to: "/design",
          dot: false
        },
        {
          title: "+",
          icon: "friends-o",
          to: "/add",
          dot: false
        },
        {
          title: "消息",
          icon: "setting-o",
          to: "/message",
          dot: false
        },
        {
          title: "我的",
          icon: "setting-o",
          to: "/mine",
          dot: false
        }
      ]
    };
  },
  setup() {
    const active = ref(0);
    return { active };
  },
});
</script>
