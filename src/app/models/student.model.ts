export interface Student {
    name: string,
    age: number,
    standard: number,
    dob: Date,
    percentage?: number,
    score: Score,
}

interface Score {
    maths: string,
    science: string,
    social: string,
    total?: string
}

export const scoreDefault: Score = {
    maths: "",
    science: "",
    social: ""
}

export const StudentDefault: Student = {
    name: "",
    age: 0,
    standard: 0,
    dob: new Date(),
    percentage: 0,
    score: {...scoreDefault}
}
