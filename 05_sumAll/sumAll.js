const sumAll = function(int1, int2) {
    const sortedInts = [int1, int2];
    if(!Number.isInteger(int1) || !Number.isInteger(int2)) return "ERROR";
    if(int1 < 0 || int2 < 0) return "ERROR";


    if (int2 < int1) {
        sortedInts.shift();
        sortedInts.push(int1);
    }
    let sum = 0;
    for (let i = sortedInts[0]; i <= sortedInts[1]; i++) {
        sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
