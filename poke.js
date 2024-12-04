const https = require('https');
const http = require('http');

//todo pokeapi 가져오기
//todo server 생성
//todo 필요한 정보 출력
const url = "https://pokeapi.co/api/v2/pokemon/ditto";

const server = http.createServer((request, response)=> {
  if(request.url ==='/' && request.method === "GET") {
    https.get(url,(pokeRes)=>{
      let data ="";

      pokeRes.on("data",(chunk)=> {
        data += chunk;
      });
      pokeRes.on("end",()=>{
        try {
          const jsonData = JSON.parse(data);
          response.writeHead(200,{"content-type":"application/json"});
          response.end(JSON.stringify(jsonData));
        }catch (error) {
          response.writeHead(500,{'content-type':'text/plain'});
          response.end('Error');
        }
      });
    })
  } else {
    response.writeHead(404,{'content-type':'text/plain'});
    response.end('Not-Found');
  }
}) 

server.listen(3000,()=>{
  console.log("http://localhost:3000")
})