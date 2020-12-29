<template>
<Head4 />
<van-pull-refresh v-model="state.loading" style="min-height: 1vh;" :head-height="105" @refresh="onRefresh">
    <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
    <template #pulling="props">
      <img
        class="doge"
        src="http://42.192.149.116:3001/images/freshImg.png"
        :style="{ transform: `scale(${props.distance / 105})` }"
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
   <div style="margin-top:90px">
    <div 
     v-for="(item, index) in gongzList"
     :key="index"
    >
     <div style="position: relative;">
     <van-image :src="item.designimgs" class="imgs" />
     <p class="text">{{item.designtext}}</p>
     <p class="span">{{item.designspan}}</p>

     <van-image :src="item.designpic" class="touxiang" />
     </div> 
    </div>
   </div> 
</van-pull-refresh>
</template>

<script lang="ts"> 
import { Toast } from 'vant'
import { getGongzApi } from "../utils/api";
import Head4 from "../components/Index/Head4.vue";
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  data() {
    return {
    gongzList:[]
    };
  },
  mounted() {
this.getgongzList();
  },
  methods:{
    async getgongzList() {
      const res= await getGongzApi();
      this.gongzList = res.results[0].gongzList;
    },

  },

  components: {
   Head4
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
.text{
  font-size: 20px;
  text-align: left;
  margin:10px
}
.span{
  font-size: 16px;
  text-align: left;
  margin:10px;
  color: #ccc;
 
}
.touxiang{
  position: absolute;
  right: 10px;
  bottom: 10px;
}

</style>