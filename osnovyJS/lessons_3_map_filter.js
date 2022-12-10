//map
console.log('map')
const array = ['ab','bc','cd']
array.map(item=>console.log(item+' - new element'))

const temp = [0,1,2,3,4,5,6,7,8,9,10,-1,-2,3,-4,-5]
//F= C*1.8+ 32

// temp.forEach(item => console.log(
//     item*1.8+32
// ))
temp.map(item=> console.log(
    item*1.8+32
))

const someObject = [
    {'name':' Ivanov', 'order':11, 'sum': '123,5'},
    {'name':'Sergeev  ', 'order':12, 'sum': '123.5'},
    {'name':' matilda ', 'order':13, 'sum': '123, 5'},
    {'name':' Ivanov Petr  ', 'order':14, 'sum': '123,50'},
]

const changedObject = someObject.map(item=> {
    return {
        'name': item.name.trim().toLowerCase(),
        'order': item.order,
        'sum':item.sum.replace(/ /, '').replace(/\./, ',')
    }
})

console.log(changedObject)

//filter
console.log('filter')
const newArray = [1,2,3,144,255,366]

//let aArray = newArray.filter(item => item > 7)
let aArray = newArray.filter(item => item %2 === 0 )
console.log(aArray)

const someNewArray = [3,1,3,5,4,3,2,4,5,2,1]

let middleArray = someNewArray.filter(item=> {
    if (item > 3) {
        return true
    }
})
console.log(middleArray)

const clients = [
    {'iin': 'g8f0s0sf', 'user':'Ivanov', 'debit': 4},
    {'iin': 'g8f0s0sf', 'user':'Petrov', 'debit': 0},
    {'iin': 'g8f0s0sf', 'user':'Sidorov', 'debit': 2},
    {'iin': 'g8f0s0sf', 'user':'Alexeev', 'debit': 8},
    {'iin': 'g8f0s0sf', 'user':'Ionov', 'debit': 14},
]

let creditClients = clients.filter(item=> (item.debit > 0)).sort((a,b)=>(b.debit-a.debit))
console.log(creditClients)