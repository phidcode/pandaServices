export interface Period {
    title: string;
    value: number;
}
export const amortizationPeriod: Period[] =
    [
        {
            title: '5 Years',
            value: 5
        }, {
            title: '10 Years',
            value: 10
        }, {
            title: '15 Years',
            value: 15
        }, {
            title: '20 Years',
            value: 20
        }, {
            title: '25 Years',
            value: 25
        }
    ];

export interface PaymentFrequency {
    title: string;
    value: string;
}

export const paymentFrequency: PaymentFrequency[] =
    [
        {
            title: 'Monthly',
            value: 'monthly',
        }, {
            title: 'Semi-Monthly',
            value: 'semiMonthly',
        }, {
            title: 'Bi-Weekly',
            value: 'biWeekly',
        }, {
            title: 'Weekly',
            value: 'weekly',
        },
    ];

export interface DebtType {
    title: string;
    value: string;
}

export const debtType: DebtType[] =
    [
        {
            title: 'Credit Card',
            value: 'creditCard'
        }, {
            title: 'Car Loan',
            value: 'carLoan'
        }, {
            title: 'Line of Credit',
            value: 'lineOfCredit'
        }, {
            title: 'Second Mortgage',
            value: 'secondMortgage'
        }, {
            title: 'Other Debt',
            value: 'otherDebt'
        },
    ];

export class Debt {
    debtType = '';
    debtAmount = '';
    monthlyPayment = '';
}

export interface Province {
    title: string;
    value: string;
}
export const province = [
    'Alberta',
    'British Columbia',
    'Manitoba',
    'New Brunswick',
    'Newfoundland and Labrador',
    'Northwest Territories',
    'Nova Scotia',
    'Nunavut',
    'Ontario',
    'Prince Edward Island',
    'Québec',
    'Saskatchewan',
    'Yukon'
];
export const jobIncomeType = [
    'Salaried',
    'Commission',
    'Self-Employed',
    'Part-Time'
];

export const propertyType = [
    'Condo or Apartment',
    'Townhouse',
    'Semi-Detached',
    'Detached'
];

export const propertyUsage = [
    'Principal Residence',
    'Rental'
];

export interface MortgageOption {
    title: string;
    value: string;
}
export const purpose: MortgageOption[] = [
    { title: 'Purchase', value: 'purchase' },
    { title: 'Renewal', value: 'renewal' },
    { title: 'Refinance', value: 'refinance' },
];

export const type: MortgageOption[] = [
    { title: 'Fixed', value: 'fixed' },
    { title: 'Variable', value: 'variable' },
    { title: 'Variable-Open', value: 'variableOpen' },
    { title: 'Fixed-Open', value: 'fixedOpen' },
    { title: 'Undecided', value: 'undecided' }
];

export const term: MortgageOption[] = [
    { title: '1', value: '1' },
    { title: '2', value: '2' },
    { title: '3', value: '3' },
    { title: '4', value: '4' },
    { title: '5', value: '5' },
];

export const occupancy: MortgageOption[] = [
    { title: 'Owner-Occupied', value: 'ownerOccupied' },
    { title: 'Tenant-Occupied', value: 'tenantOccupied' },
];

export const creditScore: MortgageOption[] = [
    { title: '600 to 649', value: '600to649' },
    { title: '650 to 699', value: '650to699' },
    { title: '700 to 749', value: '700to749' },
    { title: '750+', value: '750over' },
    { title: 'Not sure', value: 'notSure' }
];
