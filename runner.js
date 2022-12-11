(async () => {
    const prompts = require("prompts")
    const { readdirSync } = require("fs")

    let _choices = await readdirSync(".")
    _choices = _choices.filter((f => f.toLowerCase().startsWith("day")))
    const choices = []
    _choices.forEach(f => choices.push({title: f, value: f}))
    

    const file = await prompts({
        type: 'select',
        name: 'file',
        message: 'which file do you want to run?',
        choices: choices
    })
    require("./" + file.file)
})()
