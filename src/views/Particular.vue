<template>
<div>
    <van-image :src="detailsList.img1" />
    <p class="title">{{detailsList.designtext}}</p>
    <p class="title2">{{detailsList.designspan}}</p>
    <div class="top">
      <van-image :src="detailsList.designpic" class="touxiang" />
     <div>
     <p class="name">{{detailsList.designtitle}}</p>
     <span>设计费用 : {{detailsList.desPrice}}</span>
     </div>
     <button>关注</button>
    </div>
    <div class="main">
    <div class="anli">
      <span>案例简介 CASE DESCRIPTION</span>
      <p >{{detailsList.text1}}</p>
    </div>
    <van-image :src="detailsList.img2" />
    <van-image :src="detailsList.img3" />
    <van-image :src="detailsList.img4" />
    <p>{{detailsList.text2}}</p>
    <van-image :src="detailsList.img5" />
    <van-image :src="detailsList.img6" />
    <van-image :src="detailsList.img7" />
    </div>
      <div class="bottom">
      <van-image :src="detailsList.designpic" class="touxiang" />
     <div>
     <p class="name">{{detailsList.designtitle}}</p>
     <span>设计费用 : {{detailsList.desPrice}}</span>
     </div>
     <button class="gz">关注</button>
    </div>
  </div>  
</template>

<script lang="ts"> 

import { getDesignListApi} from "../utils/api";


import { defineComponent } from 'vue'
export default defineComponent({
  props: ["particularId"],
  data() {
    return {
      id: this.particularId,
      detailsList:{},
      particularId:""
    };
  },
  mounted() {
    this.getDesignList();
  },
  methods:{
      async getDesignList() {
      const res= await getDesignListApi({ id: this.id });
      const list = res.results[0].detailsList;
      this.detailsList = list.find(item => {
        return item.particularId === this.particularId
      })
    },

  }
});
</script>

<style lang="scss" scoped>
.title{
  font-size: 16px;
  text-align: left;
  font-weight: 800;
  margin:10px;
}
.title2{
  font-size: 14px;
  color: rgb(102, 102, 102);
  text-align: left;
  margin-left: 10px;
}
  .top{
      width: 95%;
      height:100px;
      box-shadow: 2px 2px 4px 3px rgb(236, 236, 236);
      margin:0 auto;
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
        margin:30px 10px 30px 70px;
         }
      }
  .main{
    .anli{
    color: rgb(102, 102, 102);
    font-size: 12px;
    height:250px;
    position: relative;
    border: 1px solid rgb(102, 102, 102);
    margin:20px 10px;
    padding:10px;
    border-radius: 5px;
    span{
    position: absolute;
    top: -10px;
    left: 10px;
    padding: 0 10px;
    background: #fff;
    }
    p{
      line-height:30px;
      text-align: left;
      text-indent:2em;
    }
    }
    .van-image{
      width: 96%;
      margin:10px 0;
    }
    p{
    color: rgb(102, 102, 102);
    font-size: 12px;
    line-height:30px;
    text-align: left;
    text-indent:2em;
    padding:10px;
    }
  }  
  .bottom{
    border: 1px solid rgb(102, 102, 102);
    margin:20px 10px;
    padding:10px;
    border-radius: 5px;
      .touxiang{
        width: 70px;
        height: 70px;
        margin:10px;
      }
      div{
        text-align: center;
        .name{
        font-size:16px;
        font-weight: 800;
        line-height: 25px;
        height:25px;
        text-align: center;
        margin:0px auto;
        }
        span{
        color: rgb(102, 102, 102);
        line-height: 20px;
        height:20px;
        font-size:13px;
        }
 
       }
       .gz{
        width: 60px;
        height: 30px;
        color: #f6483f;
        border:1px solid #f6483f;
        border-radius: 10px;
        font-size:14px;
        background: #fff;
         }
  }  
</style>