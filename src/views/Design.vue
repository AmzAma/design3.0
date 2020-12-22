<template>
  <ds-header />
  <ds-main />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DsHeader from '../components/Design/Header.vue'
import DsMain from '../components/Design/Main.vue'

export default defineComponent({  
  components: {
    DsHeader,
    DsMain
  }
});
</script>

<style>

</style>