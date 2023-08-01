"use strict";
console.log('-------- GENERICS ---------');
const echo = (arg) => arg;
const isObj = (obj) => {
    return (typeof obj === 'object' && !Array.isArray(obj) && obj !== null);
};
const isTrue = (arg) => {
    // check if array and 
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log('String', isObj('ashik')); // string
console.log('Number', isObj(1)); // number
console.log('Boolean', isObj(true)); // boolean
console.log('Boolean', isObj(false)); // boolean
console.log('Array', isObj([1, 2, 3, 4, 5])); // array
console.log('Dictionary', isObj({ "name": "ashik" })); // dictionary
console.log('null', isObj(null)); // null
console.log('undefined', isObj(undefined)); // undefined
console.log('True Check');
console.log(isTrue(1));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(null));
console.log(isTrue([]));
console.log(isTrue([1, 2]));
console.log(isTrue({ "name": "ashik" }));
