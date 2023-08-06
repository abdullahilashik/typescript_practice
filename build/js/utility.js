"use strict";
console.log('----------- UTILITY TYPES -----------');
// partials
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
    Gender[Gender["NOTSET"] = 2] = "NOTSET";
})(Gender || (Gender = {}));
const p1 = {
    name: 'ashik',
    age: 30,
    gender: Gender.NOTSET
};
console.log(p1);
const updatePerson = (person, propsToUpdate) => {
    return Object.assign(Object.assign({}, person), propsToUpdate);
};
const p2 = updatePerson(p1, { gender: Gender.MALE });
console.log(p2);
const gradingSystem = {
    ashik: 'a',
    arefin: 'b',
    abdullah: 'a'
};
const gradeData = {
    ashik: { assign1: 1, assign2: 90 },
    arefin: { assign2: 2, assign1: 4 },
    abdullah: { assign1: 1, assign2: 99 }
};
// pick and ommit
const picked = {
    assign1: 90
};
const ommited = {
    assign2: 90
};
