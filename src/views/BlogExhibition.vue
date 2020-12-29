<template>
  <div class="csex">
    <van-nav-bar
      title="博文"
      left-arrow
      @click-left="onClickLeft"
    />
    <b-ex-main />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BExMain from '../components/BlogExhibition/Main.vue'
export default defineComponent({  
  data(){
    return{
    }
  },
  components: {
    BExMain
  },
  methods:{
    onClickLeft() {
      this.$router.go(-1);
    },
  }
});
</script>

<style>

</style>