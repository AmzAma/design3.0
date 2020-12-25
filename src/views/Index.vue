<template>
  <div class="index">
   <Head :navList="navList" />
      <!-- 轮播 -->
    <Swiper :swiperList="swiperList"/>
    <!-- 8个 -->
    <van-grid
      :border="false"
      :column-num="4">
    <van-grid-item
      v-for="(item, index) in gridList" 
      :key="index" 
    >
    <van-image 
     :src="item.gridimgs" />
    <van-grid-item  :text="item.gridname" />
  </van-grid-item>
</van-grid>
    <!-- 设计 -->
   <div
    v-for="(item, index) in designList" :key="index" >
     <van-image :src="item.designpic" class="touxiang" />
     <p class="title">{{item.designtitle}}</p>
     <button>关注</button>
      
     <div>
     <van-image :src="item.designimgs" class="imgs" />
     <span class="zw">整屋</span>
     <p class="text">{{item.designtext}}</p>
     <p class="span">{{item.designspan}}</p>
     </div> 
     
     <div class="icon">
     <van-icon name="cart-o" />
     <van-icon name="comment-o" />
     <van-icon name="star-o" />  
     </div>
   </div>
  </div>
</template>

<script lang="ts"> 
import Swiper from "../components/Index/Swiper.vue";
import Head from "../components/Index/Head.vue";
import { ref } from 'vue';
import { getBannerListApi} from "../utils/api";

import { getGridListApi} from "../utils/api";

import { getDesignListApi} from "../utils/api";

import { Toast } from 'vant'
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      swiperList: [],
      gridList:[],
      designList:[],
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
    };
  },
  // setup() {
  //   const active = ref(0);
  //   return { active };
  // },
  mounted() {
    this.getBannerList();

    this.getGridList();

    this.getDesignList();
  },
  methods:{
      async getBannerList() {
      const res= await getBannerListApi();
      this.swiperList = res.results[0].homeimg;
    },

      async getGridList() {
      const res= await getGridListApi();
      this.gridList = res.results[0].gridList;
      console.log(res);
    },

      async getDesignList() {
      const res= await getDesignListApi();
      this.designList = res.results[0].designList;
      console.log(res);
    },

    onClickRight() {
      Toast('按钮');
    },
  },
  components: {
    Swiper,
    Head,
  
  }

});
</script>

<style lang="scss" scoped>
.index{
  margin:0;
  padding:0;
  
  div{
    height:100%;
   .touxiang{
    width:40px;
    height:40px;
    border-radius:20px;
    float: left;
    margin-left:10px;
  }
  .title{
    font-size:14px;
    line-height: 40px;
    height: 40px;
    display: inline-block;
    vertical-align:top;
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
    float: right;
    margin-right:10px;
  }
  div{
    position: relative;
    .imgs{
    margin-top:10px;
    width:94%;
    }
    .zw{
    position: absolute;
    top:200px;
    left:0;
    display: inline-block;
    color: #fff;
    font-size: 14px;
    font-weight: 800;
    line-height: 30px;
    width:40px;
    height:30px;
    left:30px;
    bottom: 100px;
    border-radius: 0 10px 0 10px;
    background: #d5ba8d;
    }
    .text{
      position: absolute;
      width: 250px;
      overflow: hidden;
      text-overflow:ellipsis;   
      white-space: nowrap;
      top:205px;
      left:80px;
      font-size:20px;
      font-weight: 900;
      color: white;
    }
    .span{
    position: absolute;
    top:240px;
    left:30px;
    font-size: 14px;
    color: white;
    }
  }
  .icon{
    display: flex;
    flex-direction:row;
    justify-content:space-around;
    font-size:30px;
    margin: 10px 0;
  }
  }
}
</style>