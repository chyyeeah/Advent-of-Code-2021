const {depths} = require('./data/day1.js');

const numIncrease = (depths) => {
    let num = 0;
    for (let i = 1; i < depths.length; i++) {
        const prev = depths[i - 1];
        const curr = depths[i];
        if (curr > prev) num++;
    }
    return num;
};

console.log(numIncrease(depths));
