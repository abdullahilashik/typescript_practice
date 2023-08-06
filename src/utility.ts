console.log('----------- UTILITY TYPES -----------');

// partials

enum Gender {
    MALE,
    FEMALE,
    NOTSET
}

interface Person {
    name: string,
    age: number,
    gender?: Gender
}

const p1 : Person = {
    name: 'ashik',
    age: 30,
    gender: Gender.NOTSET
};

console.log(p1);

const updatePerson = (person: Person, propsToUpdate: Partial<Person>): Person => {
    return {...person, ...propsToUpdate};
};

const p2= updatePerson(p1, {gender:Gender.MALE});
console.log(p2);

// record
type names = 'ashik'| 'arefin' | 'abdullah'
type grades = 'a' | 'b'
const gradingSystem : Record<names, grades> = {
    ashik: 'a',
    arefin: 'b',
    abdullah: 'a'
};

interface Grades {
    assign1: number,
    assign2: number
}

const gradeData : Record<names, Grades> = {
    ashik: {assign1: 1, assign2: 90},
    arefin: {assign2: 2, assign1: 4},
    abdullah: {assign1: 1, assign2: 99}
}

// pick and ommit

const picked : Pick<Grades, 'assign1'> = {
    assign1: 90
}

const ommited : Omit<Grades, 'assign1'> = {
    assign2: 90
};