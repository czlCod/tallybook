<template>
 <div class="foot-content">

  <div></div>

 </div>
</template>

<script lang='ts'>
import {defineComponent,ref, reactive, toRefs, SetupContext} from 'vue'
interface Data {
}
 export default defineComponent({
   name: '',
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
.foot-content{
  background-color: aqua;
  width: 100%;
  height: 50px;
}

</style>