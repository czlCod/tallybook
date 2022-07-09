import axios from 'axios'
export function getData(url:string){
  axios({
    method:"get",
    url:"url"
  }).then((res)=>{
    console.log(res.data);
    
  })
}