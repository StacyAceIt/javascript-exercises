const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < 0){
        return 'ERROR';
    }
    if (start > end) {
        [start, end] = [end, start];
    }
    let total = 0;
    for (let i = start; i < end + 1; i++){
        total += i;
    }
    return total;

};

// Do not edit below this line
module.exports = sumAll;
