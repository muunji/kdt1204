const first = new Promise((해결)=>{
  let myName = "minji";
  해결(myName);
  //성공하면 뭐(를) 해줘
  // '무엇은' 매개변수로 전달해줄게
});

first
  .then((value)=>{
  console.log(value);

  setTimeout(()=>{console.log("느리지롱")},3000);
  
  return value
})
.then((value)=>{
  value="민지"

  setTimeout(()=>{console.log("애매지롱")},2000);
  
  console.log(value);
})
.then((value)=>{
  value = "kim"

  setTimeout(()=>{console.log("빠르지롱")},1000);

  console.log(value);
})
