<template>
  <div>
    <div 
    v-for="(item, index) in particular"
    :key="index"
    >
    <p>{{item.text1}}</p>
    </div>
  </div>
</template>

<script lang="ts"> 

import { ref } from 'vue';
import { getDesignListApi} from "../utils/api";


import { defineComponent } from 'vue'
export default defineComponent({
  props: ["particularId"],
  data() {
    return {
      particular:[],
      id:this.particularId,
    };
  },
  mounted() {
    this.Particular();
  },
  methods:{
     async Particular() {
      const res= await getDesignListApi({id: this.id});
      this.particular = res.results[1].particular;
      console.log(this.particular);
    },

  },
  components: {
  }
});
</script>

<style lang="scss" scoped>

</style>