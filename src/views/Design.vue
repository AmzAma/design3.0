<template>
  <!-- 头部 -->
  <ds-header />
  <!-- 内容 -->
  <ds-main />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DsHeader from '../components/Design/Header.vue'
import DsMain from '../components/Design/Main.vue'

export default defineComponent({  
  components: {
    DsHeader,
    DsMain
  }
});
</script>

<style>

</style>