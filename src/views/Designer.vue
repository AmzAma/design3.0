<template>
  <!-- 头部 -->
  <des-header :designerList="designerList" />
  <!-- 案例 -->
  <des-case :designerList="designerList" />
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

import { getDesignerListApi } from '../utils/api'

export default defineComponent({  
  props:["desId"],
  data(){
    return{
      id:this.desId,
      designerList: [],
      desId:""
    }
  },
  components: {
    DesHeader,
    DesCase,
    DesBlog,
    DesFooter
  },
  mounted(){
    this.getDesignerList();
  },
  methods:{
    async getDesignerList() {
      const res= await getDesignerListApi({ id: this.id });
      const list = res.results[0].designerList;
      this.designerList = list.find(item => {
        return item.desId === this.desId
      })
      console.log(this.designerList)
    },
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