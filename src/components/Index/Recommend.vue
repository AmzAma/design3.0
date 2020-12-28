<template>
   <div class="like">
      <div class="title">
     <p>为你推荐</p>
     </div>
     
     <div
    v-for="(item, index) in detailsList" :key="index" >
     <van-image :src="item.designpic" class="touxiang" />
     <p class="wenben">{{item.designtitle}}</p>
     <button>关注</button>
     <div @click="goToParticular(item.particularId)"> 
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
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    detailsList: Array,
  },
  methods:{
    goToParticular(id) {
      this.$router.push({ name: "Particular", params: { particularId: id } });
    },
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
      font-size:25px;
      font-weight: 800;
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
  .wenben{
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
