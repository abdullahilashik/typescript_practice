console.log('----------- UTILITY TYPES -----------');

// partials

enum Gender {
    MALE,
    FEMALE,
    UNAVAILABLE
}

interface Person {
    name: string,
    age: number,
    gender: Gender
}

const p1 : Person  = {
    name: 'ashik',
    age: 30,
    gender: Gender.UNAVAILABLE
}

const updatePersons = (person: Person, propsToUpdate: Partial<Person>) : Person => {
    return {...person, ...propsToUpdate};
}


console.log(p1);

const p2: Person = updatePersons(p1, {gender: Gender.MALE})
console.log(p2);