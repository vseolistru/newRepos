const arr = [1,2,3,9,7,6,7,10,11];
console.log(`idx-2 :`, arr[2]);
console.log('array length: ',arr.length)

arr.push(12);
console.log(arr)
console.log(arr.pop())
console.log(arr)

//indexOf
console.log(arr.indexOf(7))
console.log(arr.indexOf(7,-7))
// console.log(arr.indexOf(10))

if (arr.indexOf(7)!==-1) {
    console.log('element in array')
}
else console.log('element is not in idx')

if (~arr.indexOf(17)) {
    console.log('element in array')
}
else console.log('element is not in idx')


const newArray = ['Hi', 'hello']
// console.table(newArray)
console.log(newArray.indexOf('hello'))

let result = -1;
const item = 10
let from = 0

function someIndexOf () {
    for (let i = from; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    return result
}

console.log(someIndexOf(arr))