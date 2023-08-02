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
const checkBoolValue = (arg) => {
    // check if array and 
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: "ashik" }));
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
const users = [{ id: 1, name: 'ashik' }, { id: 2, name: 'arefin' }];
console.log(getUsersProperty(users, 'id'));
class Students {
    constructor(value) {
        this.id = value;
    }
    set userid(id) {
        this.id = id;
    }
    get userid() {
        return this.id;
    }
}
const s = new Students('13131010');
console.log(s.userid);
const newS = new Students(2);
newS.userid = 13131010;
console.log(`${newS.userid} => typeof ${typeof (newS.userid)}`);
newS.userid = '13131010';
console.log(`${newS.userid} => typeof ${typeof (newS.userid)}`);
