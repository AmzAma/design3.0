<template>
  <div class="csex">
    <van-nav-bar
      title="案例"
      left-arrow
    />
    <ex-main />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ExMain from '../components/CaseExhibition/Main.vue'
export default defineComponent({  
  data(){
    return{
    }
  },
  components: {
    ExMain
  },
});
</script>

<style>

</style>