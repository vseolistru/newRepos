//Базовое уссловие (терминальное)
//Правило вижения по рекурсии


function recurse (num) {
    console.log(`${num} - iteration`)
    if (num === 0){
        return 1
    }
    else return num/ recurse (num-1)
}

recurse(7)

const rec =num=> (num===0) ? 1 : num / rec(num-1)
console.log(rec(5))

const fact3 = a => (a===0) ? 1: a * fact3 (a-1)
console.log(fact3(5));