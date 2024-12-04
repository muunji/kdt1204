const returnArr = () => {
  return [1,2,3];
}

const test = returnArr();
console.log(test);

const testTwo = test.forEach((item,index)=> {
  test[index] = item + 1;
});

console.log(test);