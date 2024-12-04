const http = require('http');
const fs = require('fs');

//todo pokeapi 가져오기
//todo server 생성
//todo 필요한 정보 출력

const url = "https://pokeapi.co/api/v2/pokemon/ditto";

fetch(url)
  .then(data => {return data.json()})
  .then(res=>{console.log(res)})
//promise를 반환