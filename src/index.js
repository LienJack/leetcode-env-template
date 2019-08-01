import { MaxHeap } from '~'
const arr = [1432,23242,4323,42,54,16]
let test = new MaxHeap(arr)
arr.forEach(item => {
  console.log(test.remove())
})