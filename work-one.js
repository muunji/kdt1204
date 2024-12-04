const returnArr = () => {
  return [1,2,3];
}

const test = returnArr();
console.log("첫번째:" +test);

test.forEach((item,index)=> {
  test[index] = item + 1;
});

console.log("두번째:"+test);

const testTwo = test.map((item)=>{
  return item + 1;
})

console.log("세번재:"+testTwo);