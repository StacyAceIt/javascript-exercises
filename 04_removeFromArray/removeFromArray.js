const removeFromArray = function(array, ...args) {
    function difference(setA, setB){
        return new Set([...setA].filter(x => !setB.has(x)));
    }
    return Array.from(difference(new Set(array), new Set(args)));
};

// Do not edit below this line
module.exports = removeFromArray;
