//flat создает из вложенных массивов одномерный
let array = [33,44,55,[88,77],66]
let res = array.flat()
console.log(res)

//fill создает массив и заполняет его заранее подготовленымми значениями

const a = [2,2,2,2,2,]
let newArray = a.fill(1,1,4)
console.log(newArray)

//keys

const someKeys = [33,44,55,66,99]

console.log(Object.keys(someKeys))

