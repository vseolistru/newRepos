const input = 'Sergey Petrov Ivanovich'
//old style
const parts = input.split(' ')
// const name = parts[0]
// const lastname = parts[1]

//destructorization es6 style

const [name1, , secondName] = parts
console.log(name1, secondName)

const fn = (input) => {
    return [someName, someLastName, someSecondName] = input
}

console.log(fn(input))

//object

const user = {
    name: 'Sergey', lastname : 'Smirnov', secondName: 'Grigorievuch'
}

const {name, lastname} = user
console.log( name, lastname)