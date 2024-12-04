const http = require('http');
const fs = require('fs');
const path = require('path')

//todo pokeapi 가져오기
//todo server 생성
//todo 필요한 정보 출력
// const pokePath = path.join(__dirname,"https://pokeapi.co/api/v2/pokemon/ditto")
// console.log(pokePath);

// const server = http.createServer(function(request,response){
  


//   const responseData = fs.readlinkSync(pokePath,"utf-8",function(err,data){
//     if(err) {
//       console.error(err);
//     }else {
//       return data;
//     }
//   });
//   // const Data = JSON.parse(responseData);
//   response.writeHead(200,{"content-type":"application/json"});
//   response.write(responseData);
//   response.end();
// });

// server.listen(3000,function(){
//   console.log("http://localhost:3000");
// })