<template>
  <div class="index">
    <div class="top"> 
     <div style="position:relative">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        background="transparent"
        shape="round"
      />
      <!-- 轮播图 -->
      <swiper
        :swiperList="swiperList"
        indicatorColor="white"
        :autoplay="3000"
      />
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import Swiper from "../components/Swiper.vue";
import { getBannerListApi} from "../utils/api";
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      swiperList: [],
    };
  },
  mounted() {
    this.getBannerList();
  },
  methods:{
      async getBannerList() {
      const res = await getBannerListApi();
      this.swiperList = res.results[0].homeimg;
      console.log(this.swiperList)
    }
  },
  components: {
    Swiper
  }

});
</script>

<style>
.index{
  margin:0;
  padding:0;
}
.top{
  width: 100%;
  height:196px;
  background:#f6483f;
}
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
  }
</style>