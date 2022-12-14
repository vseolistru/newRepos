function fn1 () {
    console.log('before fn2')
    fn2()
    console.log('after fn2')
}

function fn2 () {
    console.log('before fn3')
    fn3 ()
    console.log('after fn3')
}

function fn3 () {
    console.log('inside fn3')
}
console.log('before fn1')
fn1()
console.log('after fn1')