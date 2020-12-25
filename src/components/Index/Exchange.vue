<template>
   <div class="like">
      <div class="title">
     <p>猜你喜欢</p>
     <span @click="change">换一换</span>
     </div>
     <div class="box"
      v-for="(item, index) in showArr"
      :key="index">
      <div class="top">
     <van-image :src="item.desPortait" class="touxiang" />
     <div>
     <p class="name">{{item.desName}}</p>
     <span>受业主欢迎设计师</span>
     </div>
     <button>关注</button>
      </div>
      <div class="bottom">
        <div v-for="item in desShowImg[index]" :key="item">
          <van-image :src="item" />
        </div>
      </div>
     </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    designerList: Array,
    desShowImg: Array
  },
  data() {
    return {
      arr: [] as number[]
    }
  },
  watch: {
    designerList() {
      this.change()
    }
  },
  computed: {
    showArr(): any[] {
      return this.arr.map(item => {
        return this.designerList[item]
      })
    }
  },
  methods: {
    change() {
      let num: number = Math.floor(Math.random() * (this.designerList.length - 1))
      this.arr = [num, num + 1]
      console.log('arr', this.arr)
    }
  }
});
</script>

<style lang="scss" scoped>
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
</style>
