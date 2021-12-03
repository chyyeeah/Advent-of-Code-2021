const diagnostic = require('./data/day3');

const checkPowerConsumption = (d) => {
    const countZeroes = (new Array(d[0].length)).fill(0);
    for (let i = 0; i < d.length; i++) {
        const reading = d[i];
        for (let j = 0; j< reading.length; j++) {
            if (reading[j] === '0') countZeroes[j]++;
        }
    }
    const halfValue = d.length / 2;
    let gamma = [], epsilon = [];
    countZeroes.forEach(e => {
        if (e > halfValue) {
            gamma.push(0);
            epsilon.push(1);
        } else {
            gamma.push(1);
            epsilon.push(0);
        }
    });
    return parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2);
};

console.log(checkPowerConsumption(diagnostic));
