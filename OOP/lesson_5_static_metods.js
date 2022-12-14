const players = []

class Player {
    //static не будет унаследованно экземпляром
    static totalPlayers = 0;

    constructor(login, score = 100) {
        this.login = login
        this.score = score
        Player.totalPlayers ++;
    }
    increaseScore(num = 10) {
        this.score +=num
        console.log(`${this.login} num is ${this.score}`)
    }
    decreaseScore(num = 10) {
        this.score -= num
        console.log(`${this.login} num is ${this.score}`)
    }
    static create (login, score = 100) {
        return new Player(login, score)
    }
    static sortByScore (a,b) {
        return a.score - b.score
    }
}

class PaidPlayer extends Player{

    static totalPlayers = 0

    constructor(login, score = 100, accountBalance = 50) {
        super(login, score);
        this.accountBalance = accountBalance
        PaidPlayer.totalPlayers++
    }
    increaseBalance(amount) {
        this.accountBalance += amount
        console.log(`${this.login} my balance ${this.accountBalance}`)
    }
}

const player4 = new PaidPlayer('mike', 120)
const player3 = new Player('Tom')
const player2 = new Player('sergic')
const player1 = Player.create('sam', 152)

player3.increaseScore(32)
players.push(player4, player3, player2, player1)

console.log(Player.totalPlayers)
console.log(PaidPlayer.totalPlayers)

players.sort(Player.sortByScore)
console.log(players)