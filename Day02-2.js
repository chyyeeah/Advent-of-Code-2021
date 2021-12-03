const directions = require('./data/day2');

const findPositionForRealThisTime = (d) => {
    let aim = posHorizontal = posDepth = 0;
    for (let i = 0; i < d.length; i++) {
        const [direction, value] = d[i];
        if (direction === 'down') aim += value;
        if (direction === 'up') aim -= value;
        if (direction === 'forward') {
            posHorizontal += value;
            posDepth += (aim * value);
        }
    }
    return posHorizontal* posDepth;
};

// console.log(findPositionForRealThisTime([
//     ['forward', 5],
//     ['down', 5],
//     ['forward', 8],
//     ['up', 3],
//     ['down', 8],
//     ['forward', 2],
// ]));
console.log(findPositionForRealThisTime(directions));
