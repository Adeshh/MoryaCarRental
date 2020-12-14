<template>
  <div class="app">
    <Bar/>
       
     <div class="content">
        <router-view></router-view>
    </div> 
    
   
  </div>  
</template>
<script>

import Bar from '../src/components/Bar.vue'
export default {
  components:{
    Bar
  }
   
    
}
</script>
<style scoped>
 

                           


</style>
