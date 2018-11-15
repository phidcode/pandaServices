import { FileUpload } from '../upload/fileupload';

export class Mortgage {
    purpose: Purpose;
    type: '';
    term: '';
    occupancy: '';
    creditScore: '';
    otherDebts?: OtherDebts[];
    lenderInfo?: LenderInfo;
    personalInfo?: PersonalInfo;
    jobInfo?: JobInfo;
    personalInfo2nd?: PersonalInfo;
    jobInfo2nd?: JobInfo;
    propertyInfo?: PropertyInfo;
    images: FileUpload[];
    createDate?: Date;
}

export class Purpose {
    type: '';
    homePrice?: number;
    amortizationPeriod?: number;
    downPayment?: number;
    paymentFrequency?: number;
    currentMortgageBalance?: number;
    remainingAmortization?: number;
    additionalFundsNeeded?: number;
    mortgageAmount?: number;
}

export class OtherDebts {
    type: '';
    amount: number;
    monthPayment: number;
}

export class ApplicantInfo {
    personalInfo: PersonalInfo;
    jobInfo: JobInfo;
}

export class PersonalInfo {
    firstName: '';
    lastName: '';
    emailAddress: '';
    contactNumber: '';
    address: Address;
}

export class Address {
    street: '';
    city: '';
    province: '';
    postalCode: '';
}

export class LenderInfo {
    type: string;
}
export class JobInfo {
    profession: '';
    annualIncome: '';
    incomeType: '';
}

export class PropertyInfo {
    type: '';
    usage: '';
    tax: '';
    fees: '';
    address: Address;
}

export const header = [
    'type',
    'term',
    'occupancy',
    'creditScore',
    'purpose.type',
    'purpose.',
];
