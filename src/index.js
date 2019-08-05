var a
async function async1(){
  console.log('async1 start');
  //  await async2();
  debugger
   await Promise.resolve(console.log('async2'))
   console.log('里面',a)
   console.log('async1 end')
}
async function async2(){
   console.log('async2')
   a = 1
}

console.log('script start');
async1();
console.log('外面',a)
console.log('script end')

