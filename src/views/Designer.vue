<template>
  <!-- 头部 -->
  <des-header />
  <!-- 案例 -->
  <des-case />
  <!-- 水平线 -->
  <div class="l"></div>
  <!-- 博文 -->
  <des-blog />
  <!-- 水平线 -->
  <div class="l"></div>
  <!-- 底部提示 -->
  <div class="dse-footer">——到底啦——</div>
  <!-- 底部按钮 -->
  <des-footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DesHeader from '../components/Designer/Header.vue'
import DesCase from '../components/Designer/Case.vue'
import DesBlog from '../components/Designer/Blog.vue'
import DesFooter from '../components/Designer/Footer.vue'

export default defineComponent({  
  components: {
    DesHeader,
    DesCase,
    DesBlog,
    DesFooter
  }
});
</script>

<style lang="scss">
  .l{
    height: 1px;
    background: #ccc;
    margin-left: 10px;
  }
  .dse-footer{
    font-size: 12px;
    color: #aaa;
    margin: 10px 0;
  }
</style>