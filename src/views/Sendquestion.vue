<template>
<div class="send">
  <van-nav-bar title="发布问题" :placeholder ="true" :fixed="true" :border="false">
    <template #right>
      <van-icon name="http://42.192.149.116:3001/images/msgNavbar.png" size="18" />
    </template>
    <template #left>
      <van-icon name="cross" size="18" @click="backClick" />
    </template>
  </van-nav-bar>

  <van-cell-group>
    <van-field v-model="value" placeholder="添加标题，最少5个字" />
  </van-cell-group>

  <textarea></textarea>
</div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      value: '',
    };
  },
  methods:{
    backClick(){
      this.$router.go(-1);
    }
  }
})
</script>

<style lang="scss" scoped>
  .van-icon-cross::before{
    color: rgb(80,80,80);
  }
  textarea{
    width: 375px;
    padding: 0 15px;
    height: 150px;
    font-size: 18px;
  }
  

</style>