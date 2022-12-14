//Symbol нужны для того чтобы исключить конфликты имен в объектах
const mySymbol = Symbol();
const newSymbol = Symbol();

console.log(mySymbol)
//console.log(newSymbol === mySymbol)

const person = {name: 'Sergey', lastname: 'Petrov'}

person.age = 32;
person [mySymbol] = 'hello'
person [newSymbol] = 'Hello'

for (let name in person) {
    console.log(name)
}
console.log(person[mySymbol])

//Итераторы

const arr = [33,44,55,66]
for (let i = 0; i<arr.length; i++) {
    console.log(arr[i])
}

function range (from, to, step) {
    for (let i = from; i < to; i = i+step) {
        console.log(i)
    }
}

console.log('range---------------')
range(10,30, 2)

function sum () {
    let res = 0
    for (let i = 0; i<arguments.length; i++) {
        console.log(arguments[i])
        res += arguments[i]
    }
    return res
}

console.log('----------sum')
sum(11,2,3,4,5,6)

const iterator = {
    next() {
        return {value: '', done: ''}
    }
}

for (let el of arr) {

}

//next() => {value: 33, done: false} - 1st iteration
//next() => {value:44, done:false} - 2nd iteration
//next() => {value:66, don:false} - 4st iteration
//next() => {don:true} - 5st iteration}

const objectWithIterator = {}
objectWithIterator[Symbol.iterator] = function () {
    let i = 0
    return{
        next() {
            return {
                value: i,
                done: i++===10
            }
        }
    }
}
console.log('---------generator')
for (let num of objectWithIterator) {
    console.log(num)
}

function rangeIterator (from, to) {
    const objectWithIterator = {}
    objectWithIterator[Symbol.iterator] = function () {
        let i = from
        return{
            next() {
                return {
                    value: i,
                    done: i++===to
                }
            }
        }
    }
    return objectWithIterator
}

console.log('__________newRange')
for (let num of rangeIterator(10,30)) {
    console.log(num)
}
