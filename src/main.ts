interface StudentIml {
    [key: string ] : string | number | number[]
    name: string,
    cgpa: number,
    classes: number[]
}

const student : StudentIml = {
    name: 'ashik',
    cgpa: 3.60,
    classes: [101, 102, 205],
    reputation: 'high'
};

const logStudentKey = (student: StudentIml, key: keyof StudentIml) : void => {
    console.log(`Student ${key}: ${student[key]}`);
};


// interface Incomes {
//     [key: string] : number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle';
type Incomes = Record<Streams, number>; 

const income : Incomes = {
    salary: 100,
    bonus: 200,
    sidehustle: 599
};

for(let item in income){
    const val = income[item as keyof Incomes];
    console.log(`${item} : ${val}`)
}