const div = (a,b) => {
    if (b < 0) {
        console.log('not for negative nums')
    } else if (b===0) {
        console.log('wrong operation for null')
    } else if (b===undefined) {
        console.log('value can not be a empty')
    }else if (typeof (b) === "string"){
        console.log('not for string')
    }
    else {
        return a / b
    }
}

let res = div(6, 'a')
if (res != undefined) {
    console.log(res)
}
console.log('----try_catch')
try {
    throw new Error('Error text')
}catch (e) {
    console.log(e.message)
}

const newDiv = (a,b) => {
    if ( b < 0) {
        throw new Error('not for negative nums')
    }else if (b===0) {
        throw new Error('wrong operation for null')
    }else if (b===undefined) {
        throw new Error('value can not be a empty')
    }else if (!isFinite(b)) {
        console.log('not for string')
    }
    return a/b
}
try {
    const result = newDiv(7,'a')
    console.log(result)
}catch (e) {
    console.log(e.message)
}