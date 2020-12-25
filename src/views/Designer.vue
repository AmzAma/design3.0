<template>
  <des-header />
  <des-case />
  <div class="l"></div>
  <des-blog />
  <div class="l"></div>
  <div class="dse-footer">——到底啦——</div>
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