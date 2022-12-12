// name, sum, someVar, newVar, sum1

//переменные var выносятся на верхний уровень это навзывается всплытие или хостинг
//var name;
//if (10>100) {
//     name = "Some Name"
// }
//name = 'New Name'

if (10 > 100) {
    var name = "Some Name"
}

console.log(name)
const newName = "Some New Name"
console.log(newName)
let letName = "Some mutable Name"
console.log(letName)
letName = "Mutable Name"
console.log(letName)


//functions

function sum (a,b) {
    //a ,b
    return a + b
}
console.log(sum(2,5))

//closure
//Каждая функция помнит где была обьявлена и может
// пользоваться переменными области видимости которая была доступна на тот момент

const someVar = 10;
const newVar = 20;

function sum1 (a,b) {
    //a, b, result
    let result = a + b + someVar + newVar
    return result
}
console.log(sum1(3, 7))

function fn1 (b,c) {
    function fn2 (d, e) {
        return someVar + b + c + d+ e
    }
    console.log(fn2(5,7))
}

fn1(3,2)

//хостинг для функций
var result = sum3(2,3)
console.log('result for sum+3: '+result)
function sum3 (a,b) {
    return a+b
}
