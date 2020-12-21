<template>
  <div>
    <van-button type="primary">主要按钮</van-button>
    <router-view />
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>