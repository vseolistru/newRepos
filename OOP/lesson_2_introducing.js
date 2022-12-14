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

const player2 = new Player('somename', 80)

const player1 = {
    login: 'monster',
    score: 100,
    increaseScore(num = 10) {
        this.score +=num
    },
    decreaseScore(num = 10) {
        this.score -= num
    }
}
player2.increaseScore(15)
player2.decreaseScore(20)
