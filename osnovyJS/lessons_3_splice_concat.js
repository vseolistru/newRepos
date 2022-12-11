//concat

const array_1 = [21,22,23,24]
const array_2 = [31,32,33,34]

const res = array_1.concat(array_2)
console.log(res)
const res_1 = [...array_1, ...array_2]
const res_2 = [...array_1, ...array_1]
console.log(res_2)

//concat string
let c = 'hello'
let d = 'Vitalik'
let x = c.concat(d)
console.log(x)

//splice - мутирует

let k = [33,44,55,66,77]

k.splice(2,2, 555,666)
console.log(k)

