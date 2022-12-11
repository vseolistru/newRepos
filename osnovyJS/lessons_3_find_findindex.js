//find возвращает массив работает с массивами

const array = [22,33,44,55,66]

let res = array.find(item => {
    if (item >= 40 && item <=50)  {
        return true
    }
})
console.log(res)


const baseArray = [
    {'name':'Ivan', 'age':16},
    {'name':'Sergey', 'age':20},
    {'name':'Anton', 'age':22},
    {'name':'Samvel', 'age':26},
]
let resArray = baseArray.find(item => item.age <= 18)
console.log(resArray)

// filter возвращает массив
let newArray = baseArray.filter(item => item.age <= 18)
console.log(newArray)


// findIndex работает с массивами

const indexedArray = [22,33,44,55,66,77]

let resultArray = indexedArray.findIndex(item =>{
    if (item >=500 ) {
        return true
    }
})
console.log(resultArray)

//LastIndexOf работает со строками и массивами, возвращает последний индекс массива

const someString = 'Hello'
let resString = someString.lastIndexOf('l')
console.log(resString)