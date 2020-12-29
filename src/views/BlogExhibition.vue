<template>
  <div class="csex">
    <van-nav-bar
      title="博文"
      left-arrow
      @click-left="onClickLeft"
    />
    <b-ex-main :designerList="designerList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BExMain from '../components/BlogExhibition/Main.vue'
import { getDesignerListApi } from '../utils/api'
export default defineComponent({  
  props:["desId"],
  data(){
    return{
      id:this.desId,
      designerList: [],
      desId:""
    }
  },
  components: {
    BExMain
  },
  mounted(){
    this.getDesignerList();
  },
  methods:{
    onClickLeft() {
      this.$router.go(-1);
    },
    async getDesignerList() {
      const res= await getDesignerListApi({ id: this.id });
      const list = res.results[0].designerList;
      this.designerList = list.find(item => {
        return item.desId === this.desId
      })
      // console.log(this.designerList)
    },
  }
});
</script>

<style>

</style>