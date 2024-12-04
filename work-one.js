const returnArr = () => {
  return [1,2,3];
}

const test = returnArr();
console.log("첫번째:" +test);

test.forEach((item,index)=> {
  test[index] = item + 1;
});

console.log("두번째:"+test);

//method chain
const testTwo = test.map((item)=>{
  return item + 1;
}).map((item)=>{
  return item + 10;
})
console.log("세번재:"+testTwo);

//풀어서 작성하면
// const testTwo = test.map((item)=>{
//   return item + 1;
// })
// const testThree = testTwo.map((item)=>{
//   return item + 10;
// })