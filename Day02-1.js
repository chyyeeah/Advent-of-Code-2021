const directions = require('./data/day2');

const findPosition = (d) => {
    let posHorizontal = posDepth = 0;
    for (let i = 0; i < d.length; i++) {
        const [horizontal, distance] = d[i];
        if (horizontal === 'up') posDepth -= distance;
        if (horizontal === 'down') posDepth += distance;
        if (horizontal === 'forward') posHorizontal += distance;
    }
    return posHorizontal * posDepth;
};

console.log(findPosition(directions));
