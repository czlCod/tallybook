<template>
<div class="itemBox">
<ul class="con-item-box" v-for="(item,index) in tally.slice(1,11)" :key="item.id">
  <li class="con-item-item con-item-space con-item-1">{{index+1}}</li>
  <li class="con-item-item con-item-space">{{item.type}}</li>
  <li class="con-item-item con-item-space">{{item.time}}</li>
  <li class="con-item-item con-item-space">{{item.category}}</li>
  <li class="con-item-item con-item-space">{{item.amount}}</li>
 </ul>
</div>

<!-- 分页器 -->
<div class="pageBox">
<ul class="page">
  <li class="page-item">
    <a>
      <span>&laquo;</span>
    </a>
    </li>
  <li class="page-item"><a>1</a></li>
  <li class="page-item"><a>2</a></li>
  <li class="page-item"><a>3</a></li>
  <li class="page-item"><a>
      <span>&raquo;</span>
    </a></li>
</ul>
</div>

</template>

<script lang='ts'>
import {defineComponent,ref, reactive, toRefs, SetupContext, inject} from 'vue'
interface Data {
}
 export default defineComponent({
   name: 'contentitem',
   props: {
    tally:{
      type:Array
    }
   },
   components: {

   },
   
setup(props, ctx: SetupContext){

//接受从父组件传递过来的数据
const tally = inject("tally")



const data: Data = reactive<Data>({
})
return {
...toRefs(data),
tally,
}
},
 })
</script>

<style>
/* .itemBox{
  background-color: rgb(30, 135, 135);
  display: block;
  width: 100%;
  height: 350px;
} */

.con-item-box{
display: flex;
border-bottom: 1px solid rgb(202, 197, 197);
}

.con-item-item{
  flex: 2;
  text-align: center;
  padding: 5px 0;
  font-family: initial;
}

.con-item-1{
  flex: 1;
}

.con-item-space{
  border-right: 1px solid rgb(202, 197, 197);
}


/* 分页器 */
/* #page-nav{
  display: block;
  
} */
/* .pagination{

  left:40px;
} */

.pageBox{
  width: 100%;
  display: flex;
}

.page{
margin: 0 auto;
}

.page-item{
  display: inline-block;
  font-size: 15px;
  padding: 5px;
  line-height: 30px;
}

</style>