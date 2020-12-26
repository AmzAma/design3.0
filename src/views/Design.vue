<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh"></van-pull-refresh>
  <!-- 头部 -->
  <ds-header />
  <!-- 内容 -->
  <ds-main />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DsHeader from '../components/Design/Header.vue'
import DsMain from '../components/Design/Main.vue'

import { getDesignerListApi } from '../utils/api'

export default defineComponent({  
  data(){
    return{
      designList: [],
    }
  },
  components: {
    DsHeader,
    DsMain
  },
  mounted(){
    this.getDesignerList();
  },
  methods:{
    async getDesignerList() {
      const res= await getDesignerListApi();
      this.designList = res.results[0].designerList;
      console.log(this.designList);
    }
  }
});
</script>

<style>

</style>