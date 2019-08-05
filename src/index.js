const arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
function flat (arr) {
   while (arr.some(item => {
      return Array.isArray(item)
   })) {
      arr = [].concat(...arr)
   }
   console.log('float',arr)
   arr = Array.from(new Set(arr))
   arr = arr.sort((a,b) => {return a - b})
   return arr
}

console.log(flat(arr))