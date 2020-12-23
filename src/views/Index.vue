<template>
  <div class="index">
    <!-- 这是设计本以及搜索栏 -->
    <div class="top"> 
     <div style="position:relative">
      <span class="designtext">设计本</span>
      <van-search
        v-model="value"
        placeholder="新中式"
        background="transparent"
        shape="round"
      />
    </div>   
    </div>
    <!-- 切换 -->
    <van-tabs v-model:active="active" color="#fff">
    <van-tab title="我的关注" ></van-tab>
    <van-tab title="个性推荐"></van-tab>
    </van-tabs>
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
import { getBannerListApi} from "../utils/api";

import { getGridListApi} from "../utils/api";

import { getDesignListApi} from "../utils/api";

import { Toast } from 'vant'
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      value: '',
      active: 2,
      swiperList: [],
      gridList:[],
      designList:[]
    };
  },
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
    },

      async getDesignList() {
      const res= await getDesignListApi();
      this.designList = res.results[0].designList;
    },

    onClickRight() {
      Toast('按钮');
    },
  },
  components: {
    Swiper,

    gridList() {
      return this.$store.state.home.gridList;
    },
     designList() {
      return this.$store.state.home.designList;
    }
  }

});
</script>

<style lang="scss" scoped>
.index{
  margin:0;
  padding:0;
  .top{
    width: 100%;
    height:60px;
    background:#f6483f;
    div{
      display:flex;
      flex-direction: row;
    .designtext{
      color: white;
      font-size: 25px;
      font-weight: 900;
      display: inline-block;
      height:60px;
      line-height: 60px;
      margin-left:15px;
    }  
  .van-search{
    .van-search__content {
    display: flex;
    -webkit-box-flex: 1;
    padding-left: 0.32rem;
    background-color: rgba(255, 255, 255, 0.1);
    flex: 1 1 0%;
    border-radius: 0.05333rem;
}
}
    }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #f6483f;
  }
  }
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