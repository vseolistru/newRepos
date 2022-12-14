//logic operator
// >, < , >=, <=, !=, ==

console.log(`is 5>2`, 5>2)
console.log(`is 5>2`, 5<2)

console.log(`is equal 5 & 5`, 5=='5')
console.log(`is not equal 5 & 6`, 5!=6)

//Составные выражения

// и - &&
// или ||

console.log(`&&`, 1==1 && 2==2)
console.log(`||`, 1==1 || 2!=3)

// ветвление

let age = 17
if (age < 18) {
    console.log(`Dented`)
}
else {
    console.log(`passed`)
}
let salary = 2000

salary >= 1500 && age >= 22 ? console.log(`Lets Dance`) : console.log(`Go to work slave`)

// switch case
let status = `idle`

switch (status) {
    case `loading`: {
        console.log(`status is idle`);
        break;
    }
    case `loading`: {
        console.log(`status is loading`);
        break;
    }
    case `respond`: {
        console.log(`status is respond`);
        break;
    }
    case `error`: {
        console.log(`status is error`);
        break;
    }
    default : {
        console.log(`status default`);
        break;
    }
}