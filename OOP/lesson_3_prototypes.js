function Player (login, score=100) {
    this.login = login
    this.score = score
}

//Прототипы - это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга.
//любая функция содержит объект проитип который выступает как шаблон, от которого объект наследует методы и свойства.

Player.prototype.increaseScore = function (num) {
    this.score += num
    console.log(`${this.login} score is ${this.score}`)
}

Player.prototype.decreaseScore = function (num) {
    this.score -= num
    console.log(`${this.login} score is ${this.score}`)
}

const player1 = new Player('tor', 140)

player1.increaseScore(10)