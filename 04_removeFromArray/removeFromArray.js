const removeFromArray = function(array, ...args) {
        const removeSet = new Set(...args);
        return array.filter(x => !removeSet.has(x));

};

// Do not edit below this line
module.exports = removeFromArray;
