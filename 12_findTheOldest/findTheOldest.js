const findTheOldest = function(arr) {
    let minAge = -1;
    let obj;
    arr.forEach(person => {
        const currentYear = new Date().getFullYear();
        let currentAge;
        if ('yearOfDeath' in person){
            currentAge = person.yearOfDeath - person.yearOfBirth;
            
        }else{
            currentAge = currentYear - person.yearOfBirth;
        }

        if (currentAge > minAge){
            obj = person;
            minAge = currentAge;
        }
    });
    return obj;
};

// Do not edit below this line
module.exports = findTheOldest; 
