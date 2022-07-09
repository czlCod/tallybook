<template>
 
</template>

<script lang='ts'>
import {defineComponent,ref, reactive, toRefs, SetupContext} from 'vue'
interface Data {
}
 export default defineComponent({
   name: 'contentFooter',
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

<style scoped lang='scss'>

</style>