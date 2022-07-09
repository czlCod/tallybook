<template>
<div class="div-nav">
  <nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    月月记账本
  </a>
</nav>

 </div>
</template>

<script lang='ts'>
import {defineComponent,ref, reactive, toRefs, SetupContext} from 'vue'
interface Data {
}
 export default defineComponent({
   name: 'header',
   props: {
   },
   components: {

   },
setup(props, ctx: SetupContext){

const data: Data = reactive<Data>({
})
return {
...toRefs(data),
}
},
 })
</script>

<style>
.div-nav{
  padding: 6px 0;
  border-bottom: 1px solid rgb(202, 197, 197);
  font-weight: bold;
}


</style>