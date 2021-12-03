const diagnostic = require('./data/day3');

const verifyLifeSupport = (d) => {
    const readingLength = d[0].length;
    let pointer = count = 0;
    let oxygen = [...d];
    while (oxygen.length > 1) {
        const zeroes = [], ones = [];
        for (let i = 0; i < oxygen.length; i++) {
            const data = oxygen[i];
            if (data[pointer] === '0') {
                zeroes.push(data);
            } else {
                ones.push(data);
            }
        }

        if (zeroes.length > ones.length) {
            oxygen = zeroes;
        } else {
            oxygen = ones;
        }
        count++;
        pointer = count % readingLength;
    }

    pointer = count = 0;
    let co2 = [...d];
    while (co2.length > 1) {
        const zeroes = [], ones = [];
        for (let i = 0; i < co2.length; i++) {
            const data = co2[i];
            if (data[pointer] === '0') {
                zeroes.push(data);
            } else {
                ones.push(data);
            }
        }
        if (zeroes.length <= ones.length) {
            if (zeroes.length > 0) {
                co2 = zeroes;
            } else {
                co2 = ones;
            }
        } else {
            if (ones.length > 0) {
                co2 = ones;
            } else {
                co2 = zeroes;
            }
        }
        count++;
        pointer = count % readingLength;
    }

    return parseInt(oxygen.join(''), 2) * parseInt(co2.join(''), 2);
};

// console.log(verifyLifeSupport([
//     '00100',
//     '11110',
//     '10110',
//     '10111',
//     '10101',
//     '01111',
//     '00111',
//     '11100',
//     '10000',
//     '11001',
//     '00010',
//     '01010',
// ]));
console.log(verifyLifeSupport(diagnostic));
