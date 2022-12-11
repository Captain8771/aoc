(async (part1) => {
    const { readFileSync } = require("fs")
    const token = readFileSync("./session.txt").toString()
    const fetch = require("node-fetch")


    const res = await fetch("https://adventofcode.com/2022/day/1/input", {
        headers: {
            cookie: "session=" + token
        }
    })
    const input = await res.text()

    const elves = input.split("\n\n")
    if (part1) {
        let highest = 0
        let highestIndex = 0
        for (let i = 0; i < elves.length; i++) {
            const values = elves[i].split("\n")
            let final = 0;
            for (const num of values) {
                final += parseInt(num)
            }
            if (final > highest) {
                highest = final,
                highestIndex = i + 1
            }
        }

        console.log(`${highest}\n${highestIndex}`)
    } else {
        let answers = []
        for (const elf of elves) {
            let elfFinal = 0;
            elf.split("\n").forEach(elf => {
                elfFinal += parseInt(elf)
            });
            answers.push(elfFinal)
        }
        
        answers = answers.sort((a, b) => b - a)
        console.log(answers[0] + answers[1] + answers[2])
    }

})(false)