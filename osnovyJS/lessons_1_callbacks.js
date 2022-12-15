//twoSquared inside copyArrayAndDoIt is a callback
//функция twoSquared получает вызов из другой функции - отложенный вызов
// а функция copyArrayAndDoIt становится функцией высшего порядка тк принимает функцию в качестве параметра

function twoSquared (num) {
    return num **2
}

function copyArrayAndDoIt (arr, fn) {
    const resultArray = []
    for (let i = 0; i <arr.length; i++) {
        resultArray.push(fn(arr[i]))
    }
    return resultArray
}

arr = [15,16,17,18]

console.log(copyArrayAndDoIt(arr, twoSquared))
