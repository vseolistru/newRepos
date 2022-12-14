class Player {
    constructor(login, score = 100) {
        this.login = login
        this.score = score
    }
    increaseScore(num = 10) {
        this.score +=num
        console.log(`${this.login} num is ${this.score}`)
    }
    decreaseScore(num = 10) {
        this.score -= num
        console.log(`${this.login} num is ${this.score}`)
    }
}


class PaidPlayer extends Player{
    constructor(login, score = 100, accountBalance = 50) {
        super(login, score);
        this.accountBalance = accountBalance
    }
    increaseBalance(amount) {
        this.accountBalance += amount
        console.log(`${this.login} my balance ${this.accountBalance}`)
    }
}

const player4 = new PaidPlayer('mike', 120)

player4.increaseScore(30)
player4.increaseBalance(10)

console.dir(player4)