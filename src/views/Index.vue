<template>
  <div class="index">
   <Head :navList="navList" />

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

      <!-- 轮播 -->
    <Swiper :swiperList="swiperList"/>
    <!-- 8个 -->
    <van-grid
      :border="false"
      :column-num="4">
      <van-grid-item
        v-for="(item, index) in gridList" 
        :key="index"
        @click="goToIndexCase()" 
      >
        <van-image 
        :src="item.gridimgs" />
        <van-grid-item  :text="item.gridname" />
      </van-grid-item>
    </van-grid>
    <!-- 设计 -->
   <div
    v-for="(item, index) in detailsList" :key="index" >
     <van-image :src="item.designpic" class="touxiang" />
     <p class="title">{{item.designtitle}}</p>
     <button>关注</button>
      
     <div @click="goToParticular(item.particularId)">
     <van-image :src="item.designimgs" class="imgs" />
     <span class="zw">整屋</span>
     <p class="text">{{item.designtext}}</p>
     <p class="span">{{item.designspan}}</p>
     </div> 
     
     <div class="icon">
     <van-icon name="cart-o" />
     <van-icon name="comment-o" is-link @click="showPopup" />
     <van-icon name="star-o"  /> 
     <!-- 弹出窗口 -->
     <van-popup
     v-model:show="show"
     closeable
     round
     position="bottom"
     :style="{ height: '60%'}"
     >
     全部评论
     <ul>
      <li v-for="(item, index) in pendingList" v-bind:key="item.text" id="li">
       游客: {{ item.text }}
      <van-icon name="like-o" @click="getred"  v-bind:style="{ color: flag ? 'red':'black' }" />
      </li>
    </ul>
       <van-cell-group id="lt">
       <van-field
         center
         clearable
         placeholder="主动我们才会有故事哦~"
         id="ltl"
         v-model="str"
         v-on:keyup.13="handleKeyUp"
       >
         <template #button > 
           <van-button
           size="small"
           type="primary"
           v-on:click="handleClick"
           >发送</van-button>
        </template>
       </van-field>
       </van-cell-group>
     </van-popup>
     </div>
   </div>

  </van-pull-refresh>
  </div>
</template>

<script lang="ts"> 
import Swiper from "../components/Index/Swiper.vue";
import Head from "../components/Index/Head.vue";


import { getBannerListApi, getGridListApi, getDesignListApi } from "../utils/api";

import { Toast } from 'vant'
import { defineComponent, reactive,ref } from 'vue'
export default defineComponent({
  data() {
    return {
      flag:false,
      swiperList: [],
      gridList:[],
      detailsList:[],
      particular:[],
      particularId:"",
      list: [],
      str: '',
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
      this.detailsList = res.results[0].detailsList;
      this.particularId = this.detailsList.particularId
     
    },

    goToParticular(id) {
      this.$router.push({ name: "Particular", params: { particularId: id } });
    },

    goToIndexCase(){
      this.$router.push('/jiaz');
    },
    handleClick() {
      this.list.push({
      text: this.str,    
    });
      this.str = '';
    },
    handleKeyUp(e) {
      this.handleClick();
    },
    getred(){
      this.flag=!this.flag;
    }
  },
      computed: {
        pendingList() {
          return this.list.filter(item => {
            return !item.checked
          })
        },
      },
  components: {
    Swiper,
    Head
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
    const show = ref(false);
    const showPopup = () => {
      show.value = true;
    };
    const value = ref('');
    
    return {
      state,
      onRefresh,
      show,
      showPopup,
      value
    };
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
  .doge {
    width: 55px;
    height: 50px;
    margin-top: 30px;
  }
  .freshtitle{
    position: relative;
    top: -30px;
    color: rgb(221, 221, 221);
  }
}
</style>