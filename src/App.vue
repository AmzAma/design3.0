<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components:{
   
  }
})
</script>
<style lang="scss">
@import './assets/css/reset';
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color:#2c3e50;
  margin:0;
  padding:0;
}
</style>