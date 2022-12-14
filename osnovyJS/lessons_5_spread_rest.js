//spread - actions of spread...[1,22,33,44] => 1,22,33,44 for name sum(...nums) => sum(1,22,33,44)
const nums = [1,22,33,44]

function sum () {
    let res = 0
    for (let i = 0; i<arguments.length; i++) {
        res += arguments[i]
    }
    return res
}
const result = sum(...nums)
console.log(result)

// rest когда оператор используется для создания переменных интерпретатор "узнает" что это rest
// когда ...nums приходит в качестве аргумента в функцию то это spread

const arr = [22,33,44,55]
const [f,s,...t] = arr
console.log(f,s,...t)

const newArray = [...nums, ...arr]
console.log(newArray)