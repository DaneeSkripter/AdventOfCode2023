const fs = require('fs');
let result = 0;
const list = fs.readFileSync('./input.txt', 'utf8').split("\n");
list.forEach((item, index) => {
    let numList = [];
    item.split("").forEach((char) => {
        if (!isNaN(parseInt(char))) {numList.push(char)}
    })
    const number = parseInt(`${numList[0]}${numList.pop()}`)
    result += number;
})
console.log(result)