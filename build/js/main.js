"use strict";
const student = {
    name: 'ashik',
    cgpa: 3.60,
    classes: [101, 102, 205],
    reputation: 'high'
};
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
const income = {
    salary: 100,
    bonus: 200,
    sidehustle: 599
};
for (let item in income) {
    const val = income[item];
    console.log(`${item} : ${val}`);
}
