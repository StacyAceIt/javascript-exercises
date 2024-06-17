const removeFromArray = function(array, ...args) {
        let res = [];
        array.forEach(element => {
            (!args.includes(element)) ? res.push(element):null;
            
        });
        return res
        // return array.filter(x => !args.includes(x));

};

// Do not edit below this line
module.exports = removeFromArray;
