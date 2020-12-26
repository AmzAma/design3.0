<template>
  <div class="index">
    <Head :navList="navList" />
    <!-- 轮播 -->
    <Swiper :swiperList="swiperList"/>
   <!-- 换一换 -->
    <Exchange
    :designerList="designerList"
    :desShowImg="desShowImg"
    />
    <Recommend
    :detailsList="detailsList"
    />
  </div>
</template>

<script lang="ts"> 
import Swiper from "../components/Index/Swiper.vue";
import Head from "../components/Index/Head.vue";
import Exchange from "../components/Index/Exchange.vue";
import Recommend from "../components/Index/Recommend.vue";

import { Toast } from "vant";
import { ref } from 'vue';
import { getBannerListApi , getDesignerListApi , getDesignListApi} from "../utils/api";


import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      swiperList: [],
      designerList:[],
      detailsList:[],
      navList:[
        {
          text: "我的关注",
          path: "/homefollow"
        },
        {
          text: "个性推荐",
          path: "/index"
        }
      ],
      desShowImg:[],
      count: 0,
      ids: [],
      start: 0,
      num: 5
    };
  },
  mounted() {
    this.getBannerList();

    this.getDesignList();

    this.getDesignerList();

    this.getDesShowImgList();
  },
  computed:{
    
  },
  methods:{
      async getBannerList() {
      const res= await getBannerListApi();
      this.swiperList = res.results[0].homeimg;
    },

    async getDesignerList() {
      const res= await getDesignerListApi();
      this.designerList = res.results[0].designerList;
    },

    async getDesShowImgList() {
      const res= await getDesignerListApi();
      this.desShowImg = res.results[1].picList;
      console.log(this.desShowImg)
    },

     async getDesignList() {
      const res= await getDesignListApi();
      this.detailsList = res.results[0].detailsList;
      console.log(res);
    },



    onClickRight() {
      Toast('按钮');
    },

  },
  components: {
    Swiper,
    Head,
    Exchange,
    Recommend
  }
});
</script>

<style lang="scss" scoped>
.index{
  margin:0;
  padding:0; 
  .like{
    .title{
      width: 94%;
      height:50px;
      display:flex;
      flex-direction: row;
      justify-content:space-between;
      margin-top:10px;
      line-height: 50px;
      padding:10px 10px 0 10px;
      p{
        font-size:25px;
        font-weight: 800;
      }
      span{
        color: #666;
        font-size:15px;
        font-weight: 700;
      }
    }
  .box{
    width: 95%;
    height:200px;
    box-shadow: 2px 3px 13px 0px #ccc;
    margin: 0 auto;
    border-radius: 20px;
    .top{
      margin-top:20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .touxiang{
        width: 70px;
        height: 70px;
        margin:10px;
      }
      div{
        font-size:10px;
        width: 100px;
        margin:10px 5px;
        line-height: 70px;
        height:70px;
        .name{
        font-size:16px;
        font-weight: 800;
        width: 100px;
        line-height: 25px;
        height:25px;
        }
        span{
        line-height: 20px;
        height:20px;
        }
       }
      button{
        width: 60px;
        height: 30px;
        margin:5px 0;
        color: #f6483f;
        border:1px solid #f6483f;
        border-radius: 10px;
        font-size:14px;
        background: #fff;
        margin:30px 10px 30px 90px;
         }
      }
    .bottom{
      width: 100%;
      display:flex;
      flex-direction: row;
      justify-content: space-around;
      .van-image{
        width: 100px;
        height: 100px;
      }
    }    
     }
    }
   }
</style>