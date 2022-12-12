//every проверяет пока не вернет false
const array = [22,33,44,55,66]


let b = array.every(item =>{
    //console.log(item)
    if (item > 3) return true
})
//console.log(b)

const someArrayObjects = [
    {name:'Ivan', age: 22},
    {name:'Inna', age: 22},
    {name:'Serg', age: 17},
    {name:'Antuan', age: 32},
]

let res = someArrayObjects.every(item =>{
    console.log(item)
  if (item.age >= 16) {
      return true
  }
} )
console.log(res)

//some есть ли хотябы один
let result = someArrayObjects.some(item =>{
    console.log(item.name )
    if (item.age < 15 ) {
        return true
    }
})
console.log(result)