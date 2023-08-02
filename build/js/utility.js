"use strict";
console.log('----------- UTILITY TYPES -----------');
// partials
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["UNAVAILABLE"] = 2] = "UNAVAILABLE";
})(Gender || (Gender = {}));
const p1 = {
    name: 'ashik',
    age: 30,
    gender: Gender.UNAVAILABLE
};
const updatePersons = (person, propsToUpdate) => {
    return Object.assign(Object.assign({}, person), propsToUpdate);
};
console.log(p1);
const p2 = updatePersons(p1, { gender: Gender.MALE });
console.log(p2);
