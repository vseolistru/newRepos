//this

const cat = {
    name: 'Murka',
    say () {
        setTimeout(()=>console.log(this.name),1000 )
    }
}
cat.say()

const dev = {
    name: 'Sergey',
    salary: 88,
    getBonus (sum) {
        console.log(this.name, 'has salary ', this.salary+sum )
    }
}
dev.getBonus(10)

const manager = {
    name: 'Anna',
    salary: 66,

}

//object prototype

// {
//     prototype: {
//         call: fn,
//         apply: fn,
//         bind: fn
//     }
// }

//первым параметром передаем контекс вторым аргумент методу
//Метод call() вызывает функцию с указанным значением this и индивидуально предоставленными аргументами.
dev.getBonus.call(manager, 8)
dev.getBonus.apply(manager, [10])
manager.getBonus = dev.getBonus.bind(manager)
manager.getBonus(12)