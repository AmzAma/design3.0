<template>
  <van-nav-bar title="发布问题" :placeholder ="true" :fixed="true" :border="true">
    <template #right>
      <van-icon name="http://42.192.149.116:3001/images/msgNavbar.png" size="18" />
    </template>
    <template #left>
      <van-icon name="cross" size="18" />
    </template>
  </van-nav-bar>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .van-icon-cross::before{
    color: rgb(80,80,80);
  }
</style>