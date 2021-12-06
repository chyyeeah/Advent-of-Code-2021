const {drawings, boards} = require('./data/day4');
const {
    checkHorizontal,
    checkVertical,
    checkMajorDiagonal,
    checkMinorDiagonal,
    findSum,
} = require('./Day04-1');

const findLastWinner = (d, b) => {
    const drawnNumbers = new Set(),
        winners = new Set(),
        numBoards = b.length;
    for (let i = 0; i < d.length; i++) {
        const num = d[i];
        drawnNumbers.add(num);
        for (let j = 0; j < b.length; j++) {
            if (!winners.has(j) &&
                (
                    checkHorizontal(b[j], drawnNumbers) ||
                    checkVertical(b[j], drawnNumbers) ||
                    checkMajorDiagonal(b[j], drawnNumbers) ||
                    checkMinorDiagonal(b[j], drawnNumbers)
                )
            ) {
                winners.add(j);
                if (winners.size === numBoards) {
                    console.log(b[j])
                    return findSum(b[j], drawnNumbers) * num;
                }
            }
        }
    }
    return 0;
};

console.log(findLastWinner(drawings, boards));