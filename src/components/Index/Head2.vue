<template>
<div class="gd">
    <div class="top">
  <van-nav-bar
  left-arrow
  @click-left="onClickLeft"
/>
 <van-tabs v-model:active="active" swipeable route :placeholder="true">
   <van-tab
   v-for="item in navList"
   :key="item.path"
   :title="item.text"
   :to="item.path"
   >
   </van-tab>
  </van-tabs>

  </div>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    navList: Array
  },
  methods:{
    onClickLeft() {
      this.$router.push("/index");
    }
  },
});
</script>

<style lang="scss" scoped>
.gd{
   width: 100%;
    height: 48px;
    position: fixed;
    background: #fff;
    z-index: 2;
.top{
  display:flex;
  flex-direction: row;
  justify-content: space-around;
 .van-tabs{
   width: 90%;
 }
}
}


</style>