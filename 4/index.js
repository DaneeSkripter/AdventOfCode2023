const fs = require("fs")
const input = fs.readFileSync("./input.txt", "utf-8").replace(/\r/g, "").split("\n")

const winningNumbers = []
const numbers = []

input.forEach((row) => { winningNumbers.push(row.split(" | ")[0]) }) // Fill list with winning numbers
input.forEach((row) => { numbers.push(row.split(" | ")[1]) }) // Fill list with numbers

// List formating
for (let i = 0; i < winningNumbers.length; i++) {
    winningNumbers[i] = winningNumbers[i].split(":")[1]
}

let allpoints = 0;

numbers.forEach((line, lineIndex) => {
    let cardpoints = 0;
    line.split(" ").forEach((number) => {
        winningNumbers[lineIndex].split(" ").filter((num) => num !== "").forEach((winningNumber) => {
            if (number == winningNumber) {
                if (cardpoints == 0) {
                    cardpoints++
                } else {
                    cardpoints = cardpoints * 2
                }
            }

        })
    })
    allpoints += cardpoints
    //console.log(`Card ${lineIndex + 1} has ${cardpoints} points`)
})

console.log(allpoints)
