<template>
 <div id="bigBox" class="base-border">
  <headerCon/>
  <content :tally="tally"/>
  
  <footerCon />
 </div>

</template>

<script lang='ts'>
import {defineComponent,reactive, toRefs, SetupContext,defineAsyncComponent, provide} from 'vue'

import {getData} from "./assets/js/method/getData"

import { tallyInter } from "./assets/js/interface/tally"


 export default defineComponent({
   name: 'app',
   props: {
   },
   components: {
    headerCon:defineAsyncComponent(() => import('./components/headerCon.vue')),
    content:defineAsyncComponent(() => import('./components/content/content.vue')),
    footerCon:defineAsyncComponent(() => import('./components/footerCon.vue'))
   },

   created(){
    getData("./assets/json/bills.json")
   },
setup(props, ctx: SetupContext){

 const state= reactive<{tally : tallyInter []}>({
 tally:[
  {
    id:1,
    time:111,
    type:0,
    category:'111',
    amount:10
  },
  {
    id:2,
    time:112,
    type:0,
    category:'111',
    amount:10
  },
  {
    id:3,
    time:113,
    type:0,
    category:'111',
    amount:10
  },
  {
    id:4,
    time:114,
    type:0,
    category:'111',
    amount:10
  },
  {
    id:5,
    time:115,
    type:0,
    category:'111',
    amount:10
  },
  {
    id:6,
    time:116,
    type:0,
    category:'111',
    amount:10
  },
  {
    id:7,
    time:117,
    type:0,
    category:'111',
    amount:10
  },
  {
    id:8,
    time:118,
    type:0,
    category:'111',
    amount:10
  },
  {
    id:9,
    time:119,
    type:0,
    category:'111',
    amount:10
  },
  {
    id:10,
    time:1110,
    type:0,
    category:'111',
    amount:10
  },
  {
    id:11,
    time:1111,
    type:0,
    category:'111',
    amount:10
  },
  {
    id:12,
    time:1112,
    type:0,
    category:'111',
    amount:10
  },
  {
    id:13,
    time:1113,
    type:0,
    category:'111',
    amount:10
  },
  {
    id:14,
    time:1114,
    type:0,
    category:'111',
    amount:10
  },
  {
    id:15,
    time:1115,
    type:0,
    category:'111',
    amount:10
  },
  {
    id:16,
    time:1116,
    type:0,
    category:'111',
    amount:10
  },
  {
    id:17,
    time:1117,
    type:0,
    category:'111',
    amount:10
  },
  {
    id:18,
    time:1118,
    type:0,
    category:'111',
    amount:10
  },
  {
    id:19,
    time:1119,
    type:0,
    category:'111',
    amount:10
  },
  {
    id:20,
    time:1120,
    type:0,
    category:'111',
    amount:10
  },]
 })

 provide('tally',state.tally)
return {
...toRefs(state),
}
},
 })
</script>

<style>
@import "./assets/css/base.css";

#bigBox{
  background-color: rgb(248, 249, 250);
  width: 40%;
  margin: 40px auto 0;
  outline: 1px black boild;
}
</style>
