<template>
  <div class="index">
   <Head :navList="navList" />

   <van-pull-refresh v-model="state.loading" style="min-height: 100vh;" :head-height="130" @refresh="onRefresh">
    <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
    <template #pulling="props">
      <img
        class="doge"
        src="http://42.192.149.116:3001/images/freshImg.png"
        :style="{ transform: `scale(${props.distance / 130})` }"
      />
      <p class="freshtitle">嗨，热爱生活的梦想家</p>
    </template>

    <!-- 释放提示 -->
    <template #loosing>
      <img class="doge" src="http://42.192.149.116:3001/images/freshImg.png" />
      <p class="freshtitle">嗨，热爱生活的梦想家</p>
    </template>

    <!-- 加载提示 -->
    <template #loading>
      <img class="doge" src="http://42.192.149.116:3001/images/freshImg.png" />
      <p class="freshtitle">嗨，热爱生活的梦想家</p>
    </template>
    
    


  </van-pull-refresh>
  </div>
</template>

<script lang="ts"> 
import Head from "../components/Index/Head.vue";


import { ref } from 'vue';
import { getBannerListApi, getGridListApi, getDesignListApi, getVerifyApi} from "../utils/api";

import { Toast } from 'vant'
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  props: ["IndexCaseId"],
  data() {
    return {
      id: this.IndexCaseId,
      IndexCaseId:""
    };
  },
  mounted() {

  },
  methods:{

      async getGridList() {
      const res= await getGridListApi();
      this.gridList = res.results[0].gridList;
      console.log(res);
    },

    goToParticular(id) {
      this.$router.push({ name: "Particular", params: { particularId: id } });
    },
  },

  components: {
   
  },
  setup() {
    const state = reactive({
      count: 0,
      loading: false,
    });
    const onRefresh = () => {
      setTimeout(() => {
        Toast('刷新成功');
        state.loading = false;
        state.count++;
      }, 1000);
    };

    return {
      state,
      onRefresh,
    };
  }

});
</script>

<style lang="scss" scoped>

</style>