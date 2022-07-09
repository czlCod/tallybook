<template>
 <ul class="con-nav-box">
  <li class="con-nav-item con-nav-space con-nav-1">num</li>
  <li class="con-nav-item con-nav-space">type</li>
  <li class="con-nav-item con-nav-space">time</li>

  <li class="con-nav-item con-nav-space dropdown"> category
  <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
   
  </a>

  <div class="dropdown-menu">
    <a class="dropdown-item" :ref="1">一月</a>
    <a class="dropdown-item" :ref="2">二月</a>
    <a class="dropdown-item" :ref="3">三月</a>
    <a class="dropdown-item" :ref="4">四月</a>
    <a class="dropdown-item" :ref="5">五月</a>
    <a class="dropdown-item" :ref="6">六月</a>
    <a class="dropdown-item" :ref="7">七月</a>
    <a class="dropdown-item" :ref="8">八月</a>
    <a class="dropdown-item" :ref="9">九月</a>
    <a class="dropdown-item" :ref="10">十月</a>
    <a class="dropdown-item" :ref="11">十一月</a>
    <a class="dropdown-item" :ref="12">十二月</a>
  </div>
  </li>

  <li class="con-nav-item">amount</li>
 </ul>
</template>

<script lang='ts'>
import {defineComponent,ref, reactive, toRefs, SetupContext} from 'vue'
interface Data {
}
 export default defineComponent({
   name: 'contentNav',
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
.con-nav-box{
display: flex;
border-bottom: 1px solid rgb(202, 197, 197);
font-weight:bolder ;
}

.con-nav-item{
  flex: 2;
  text-align: center;
  padding: 4px 0;
}

.con-nav-1{
  flex: 1;
}
.con-nav-space{
  border-right: 1px solid rgb(202, 197, 197);
}

.dropdown-menu{
  width: 30px;
}
</style>