const {drawings, boards, tests} = require('./data/day4');

const checkHorizontal = (b, nums) => {
    for (let row = 0; row < b.length; row++) {
        const line = b[row];
        for (let col = 0; col < line.length; col++) {
            if (!nums.has(line[col])) break;
            if (col === line.length - 1) return true;
        }
    }
    return false;
};
const checkVertical = (b, nums) => {
    const cols = b[0].length;
    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < b.length; row++) {
            const line = b[row];
            if (!nums.has(line[col])) break;
            if (row === b.length - 1) return true;
        }
    }
    return false;
};
const checkMajorDiagonal = (b, nums) => {
    for (let i = 0; i < b.length; i++) {
        if (!nums.has(b[i][i])) return false;
    }
    return true;
};
const checkMinorDiagonal = (b, nums) => {
    for (let i = b.length - 1; i >= 0; i--) {
        if (!nums.has(b[i][b.length - 1 - i])) return false;
    }
    return true;
};

// console.log(checkHorizontal(tests['unhappy'], tests['drawnNums']));
// console.log(checkVertical(tests['unhappy'], tests['drawnNums']));
// console.log(checkMajorDiagonal(tests['unhappy'], tests['drawnNums']));
// console.log(checkMinorDiagonal(tests['unhappy'], tests['drawnNums']));
// console.log(checkHorizontal(tests['horizontal'], tests['drawnNums']));
// console.log(checkVertical(tests['vertical'], tests['drawnNums']));
// console.log(checkMajorDiagonal(tests['majorDiagonal'], tests['drawnNums']));
// console.log(checkMinorDiagonal(tests['minorDiagonal'], tests['drawnNums']));

const findSum = (b, nums) => {
    let sum = 0;
    for (let row = 0; row < b.length; row++) {
        for (let col = 0; col < b[row].length; col++) {
            const num = b[row][col];
            if (!nums.has(num)) sum += num;
        }
    }
    return sum;
};

const findWinner = (d, b) => {
    const drawnNumbers = new Set();
    for (let i = 0; i < d.length; i++) {
        const num = d[i];
        drawnNumbers.add(num);
        for (let j = 0; j < b.length; j++) {
            if (checkHorizontal(b[j], drawnNumbers)) {
                return findSum(b[j], drawnNumbers) * num;
            }
            if (checkVertical(b[j], drawnNumbers)) {
                return findSum(b[j], drawnNumbers) * num;
            }
            if (checkMajorDiagonal(b[j], drawnNumbers)) {
                return findSum(b[j], drawnNumbers) * num;
            }
            if (checkMinorDiagonal(b[j], drawnNumbers)) {
                return findSum(b[j], drawnNumbers) * num;
            }
        }
    }
    return 0;
};

// console.log(findWinner(drawings, boards));

module.exports = {
    checkHorizontal, 
    checkVertical, 
    checkMajorDiagonal, 
    checkMinorDiagonal,
    findSum,
};