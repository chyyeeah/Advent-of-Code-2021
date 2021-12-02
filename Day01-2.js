const {depths} = require('./data/day1.js');

const numIncreaseSlidingWindow = (depths) => {
    let prev = depths[0] + depths[1] + depths[2],
        num = 0;
    for (let i = 3; i < depths.length; i++) {
        const curr = prev - depths[i - 3] + depths[i];
        if (curr > prev) num++;
        prev = curr;
    }
    return num;
};

console.log(numIncreaseSlidingWindow(depths));
