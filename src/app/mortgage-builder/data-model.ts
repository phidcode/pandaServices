export class Mortgage {
    purpose: Purpose;
    type: '';
    term: '';
    occupancy: '';
    creditScore: '';
    otherDebts?: OtherDebts[];
    personalInfo?: PersonalInfo;
    jobInfo?: JobInfo;
    propertyInfo?: PropertyInfo;
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
