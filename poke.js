const http = require('http');
const fs = require('fs');

const server = http.createServer(function(request,response){
  const responseData = fs.readFileSync("https://pokeapi.co/api/v2/pokemon/ditto","utf-8",function(err,data){
    if(err) {
      console.error(err);
    }else {
      return data;
    }
  });
  // const Data = JSON.parse(responseData);
  response.writeHead(200,{"content-type":"text/html"});
  response.write(responseDataData);
  response.end();
});

server.listen(3000,function(){
  console.log("http://localhost:3000");
})