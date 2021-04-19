export interface Student {
    id: number,
    name: string,
    age: number,
    standard: number,
    dob: Date,
    percentage?: number,
    score: Score,
    activities?: string,
    gaurdian: string
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
    id: 0,
    name: "",
    age: 0,
    standard: 0,
    dob: new Date(),
    percentage: 0,
    gaurdian: "",
    score: { ...scoreDefault }
}
