export interface Admission {
    student: Student,
    branch?: string,
    referredBy: number,
    expectedDOJ?: Date,
    prevSchool?: string,
    gaurdian: string
}

export interface Student {
    name: string,
    age: number,
    standard: number,
    dob: Date
}


export const StudentDefault: Student = {
    name: "",
    age: 0,
    standard: 0,
    dob: new Date()
}

export const AdmissionDefault: Admission = {
    student: {...StudentDefault},
    branch: "",
    expectedDOJ: new Date(),
    prevSchool: "",
    referredBy: 1,
    gaurdian: ""
}