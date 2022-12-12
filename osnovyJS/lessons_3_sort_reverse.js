//reverse мутирует исходный массив

const newArray = [22,33,44,55,66]
newArray[100] = 200
newArray.reverse()
console.log(newArray)

//sort мутирует исходный массив

const someArray = [333,222,555,666,777]

someArray.sort((a,b) => b-a)
//console.log(res)
console.log(someArray)

const objectArray = [
    {'name':'Ura', 'age':18},
    {'name':'Serega', 'age':29},
    {'name':'Vovan', 'age':27},
    {'name':'Alesha', 'age':25},
    {'name':'Andryhan', 'age':32},
]

objectArray.sort( (a,b)=>{
    console.log('a: '+a.age, 'b: '+b.age, 'разность: ' +(a.age-b.age) )
    return a.age-b.age
})

console.log(objectArray)