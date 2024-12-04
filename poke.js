const http = require('http');
const https = require('https');

//todo pokeapi 가져오기
//todo server 생성
//todo 필요한 정보 출력

const url = "https://pokeapi.co/api/v2/pokemon/ditto";

https.get(url,(Response)=>{
  let data=""

  Response.on("data",(chunk)=>{
    data += chunk;
  });

  Response.on("end",()=>{
    const result = JSON.parse(data);
    console.log(result);
  })
}).on("error",(err)=>{
  console.error("ERROR",err.message);
})