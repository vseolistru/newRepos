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
//хостинг нераспространяется на const
const newName = "Some New Name"
console.log(newName)
let letName = "Some mutable Name"
//хостинг не распространяетя на let
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

//(Функции, которые возвращаются из других функции)
//(Возвращаемая функция запоиинает область видимости в скрытый ключ [[Scope]])

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

console.log('_________Example Scope')

function hello (args) {
    const helloName = () => {
        console.log('Hello', args)
    }
    return helloName
}
const retFunc = hello(newName)
retFunc()

console.log("_______Example independent count")

function outer() {
    let counter = 0;
    function incrementCounter () {
        console.log( ++counter)
    }
    return incrementCounter
}

const myCounter1 = outer();
myCounter1()
myCounter1()
console.log('next counter')
const myCounter2 = outer();
myCounter2()
myCounter2()
myCounter2()