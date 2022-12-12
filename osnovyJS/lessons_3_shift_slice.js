//shift - мутирует
let arr = [1,3,4,5]
let newArray = arr.shift()
console.log(newArray)


//unshift - мутирует
let bArray = [3,4,5]
let someArray = bArray.unshift(3);
console.log(bArray)


//slice - не мутирует
let cArray = [22,33,44,55,66,77,88,99,]
let dArray = cArray.slice(3, 6)
console.log(dArray)
console.log(cArray)