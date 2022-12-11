(async (part1) => {
    const { getInput } = require("./utils")
    const input = await getInput(2)
    // const input = `A Y\nB X\nC Z`

    rounds = input.split("\n")
    const cipherRPS = {
        A: "Rock",
        B: "Paper",
        C: "Scissors"
    }

    const XtoA = {
        X: "A",
        Y: "B",
        Z: "C"
    }

    const XoverY = {
        A: "C", // Rock: Scissors
        B: "A", // Paper: Rock
        C: "B"  // Scissors: Paper
    }

    const YoverX = {
        C: "A",
        A: "B",
        B: "C"
    }

    const ScoreTable = {
        lose: 0,
        draw: 3,
        win: 6,
        X: 1,
        Y: 2,
        Z: 3,
        A: 1,
        B: 2,
        C: 3,
        rock: 1,
        paper: 2,
        scissors: 3
    }

    function CalculateRoundScore(opponent, me, part1=true) {
        if (part1) {
            let finalScore = 0;
            if (XoverY[opponent] === XtoA[me]) {
                finalScore += ScoreTable.lose + ScoreTable[me]
            } else if (XoverY[XtoA[me]] === opponent) {
                finalScore += ScoreTable.win + ScoreTable[me]
            } else {
                finalScore += ScoreTable.draw + ScoreTable[me]
            }
    
            return finalScore
        } else {
            let finalScore = 0;
            const end = me // yes
            const howToLose = {
                A: "C",
                B: "A",
                C: "B"
            }
            switch (end) {
                case "X": { // lose
                    finalScore = ScoreTable[howToLose[opponent]]
                    break
                }
                case "Y": { // draw
                    finalScore = ScoreTable.draw + ScoreTable[opponent]
                    break
                }
                case "Z": { // win
                    finalScore = ScoreTable.win + ScoreTable[YoverX[opponent]]
                    break
                }
            }
            return finalScore
        }
    }
    if (part1) {
        const incorrect = [
            13490
        ]
        let score = 0;
        for (const round of rounds) {
            const [opp, me] = round.split(" ")
            const roundScore = CalculateRoundScore(opp, me)
            if (!isNaN(roundScore)) {
                score += roundScore
            } else {
                console.log(`r: ${round}`)
            }
        }
    
        if (score in incorrect) {
            console.log(`Got a previously incorrect score: ${score}`)
        } else {
            console.log(score)
        }
    } else {
        // X means you need to lose, 
        // Y means you need to end the round in a draw, 
        // and Z means you need to win.
        let score = 0;  // example should add up to 12
        for (const round of rounds) {
            const [opp, end] = round.split(" ")
            const rscore = CalculateRoundScore(opp, end, false)
            score += rscore
            
        }
        console.log(score)
    }



})(false)