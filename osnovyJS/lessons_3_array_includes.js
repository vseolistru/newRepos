const arr = [1,2,3,9,7,6,7,10,11];

// console.log(arr.includes(3))
// console.log(arr.includes(3,6))


const users = [
    {'name': 'Ivanov', 'age' : '23'},
    {'name': 'Ionov', 'age' : '27'},
    {'name': 'Petrov', 'age' : '26'},
    {'name': 'Alexeev', 'age' : '33'},
]

let newUsers = users.filter(item=>item.name.toLowerCase().includes('p') )

console.log(newUsers)