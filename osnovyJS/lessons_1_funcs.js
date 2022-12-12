// Func declaration
function someFunc (args) {
    //do something
    return {some:'object'}
}
//function expression
var someFunc1;
var result = someFunc1(1)
console.log(result)
//не сработает функции объявленные при помощи expression не всплывают
// var someFunc1 = function (args) {return {some:'object'}};
//также не сработает
someFunc1 = function (args) {return {some:'object'}};

// сработает
function someFunc1 (args) {return {some:'object'}};

function fn (filter) {
    filter()
}
fn(function () {
    console.log('some action')
})

//arrow function

var fn2 = () => {
    return {mess:'Hello arrow'}
}
//var fn2 = () =>'Hello arrow'
var res = fn2()

console.log(res)