const fs = require("fs")
const input = fs.readFileSync("./input.txt", "utf8").split("\n")

let IDSum = 0;
input.forEach((game) => {
    const gameID = parseInt(game.split(":")[0].split("Game ")[1])
    game = game.split("; ")
    let redCount = 0;
    let blueCount = 0;
    let greenCount = 0;
    game.forEach((line) => {
    if (line.includes("red")) {
        const match = line.match(/(\d+) red/);
        if (match[1] > redCount) {
          redCount = parseInt(match[1]);
        }
    }
    if (line.includes("blue")) {
        const match = line.match(/(\d+) blue/);
        if (match[1] > blueCount) {
          blueCount = parseInt(match[1]);
        }
    }
    if (line.includes("green")) {
        const match = line.match(/(\d+) green/);
        if (match[1] > greenCount) {
          greenCount = parseInt(match[1]);
        }
    }
    })
    if (redCount <= 12 && blueCount <= 14 && greenCount <= 13) {
        IDSum += gameID
    }
})
console.log(IDSum)