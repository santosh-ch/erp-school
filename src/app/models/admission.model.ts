import { Student, StudentDefault } from "./student.model";

export interface Admission {
    student: Student,
    branch?: string,
    referredBy: number,
    expectedDOJ?: Date,
    prevSchool?: string,
    gaurdian: string
}

export const AdmissionDefault: Admission = {
    student: { ...StudentDefault },
    branch: "",
    expectedDOJ: new Date(),
    prevSchool: "",
    referredBy: 1,
    gaurdian: ""
}