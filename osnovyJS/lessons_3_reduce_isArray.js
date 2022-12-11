//reduce

const array = [22,33,44,55,66,77,88,99]
let newArray = array.reduce((acc, item)=>{
    console.log('acc:'+ acc, 'item: '+item)
    return acc + (item*2)
})
console.log(newArray)

const someArray = [-2,4,-5,3,-2,5,-1]
//добавим к массиву на 0-ой индкс /-2/ и результат редьюсера изменится т.к. аккумулятор 0-ой индекс станет /-2/
let namedArray = someArray.reduce((acc, item)=>{
    if (item >  0) {
        acc += item
        return acc
    }
    return acc
}, 2)
//так можно задать аккумулятор по умолчанию

console.log(namedArray)
const newNamedArray = someArray.reduce((acc,item)=> item > acc ? acc = item : acc )
console.log(newNamedArray)

const products = [
    {'id':1, 'name':'ford', 'quantity':2, 'price':200},
    {'id':2, 'name':'bmw', 'quantity':1, 'price':500},
    {'id':3, 'name':'mercedes', 'quantity':1, 'price':500},
    {'id':4, 'name':'opel', 'quantity':3, 'price':300},
]
//подсчет корзины
let total = products.reduce((acc,item)=> acc + (item.quantity*item.price),0)
console.log(total)

const cities = [
    {'id':55, 'city':'mosc'},
    {'id':75, 'city':'piter'},
    {'id':100, 'city':'kaz'},
]
let res = cities.reduce((acc,item)=>{
    acc.push(item.id)
    return acc
},[])
console.log(res)

//isArray

console.log(Array.isArray(res))