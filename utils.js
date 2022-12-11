module.exports.getInput = async (day) => {
    const { readFileSync } = require("fs")
    const token = readFileSync("./session.txt").toString()
    const fetch = require("node-fetch")
    const res = await fetch(`https://adventofcode.com/2022/day/${day}/input`, {
        headers: {
            cookie: "session=" + token
        }
    })
    const input = await res.text()
    return input
}