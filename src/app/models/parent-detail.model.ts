import { Student, StudentDefault } from "./admission.model";

export interface ParentDetail {
    name: string,
    address: string,
    student: Student,
    admissionFee: number,
    termFee: number
}

export const ParentDetailDefault: ParentDetail = {
    name: '',
    address: '',
    admissionFee: 0,
    student: StudentDefault,
    termFee: 0
}