<template>
 <div id="contentBox">
  <contentNav/>
  <contentItem/>
  <contentFooter/>
 </div>
</template>

<script lang='ts'>
import {defineComponent,ref, reactive, toRefs, SetupContext, defineAsyncComponent} from 'vue'
interface Data {
}
 export default defineComponent({
   name: 'content',
   props: {
   
   },
   components: {
    contentNav:defineAsyncComponent(()=>import("./contentNav.vue")),
    contentItem:defineAsyncComponent(()=>import("./contentItem.vue")),
    contentFooter:defineAsyncComponent(()=>import("./contentFooter.vue"))
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
#contentBox{
  width: 100%;
  
  overflow: hidden;
}
</style>