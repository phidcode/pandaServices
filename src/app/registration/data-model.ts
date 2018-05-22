export class User {
    firstName = '';
    lastName = '';
    emailAddress = '';
    phoneNumbers: Phone[];
    addresses: Address[];
    jobs: Job[];
    properties: Property[];
    assets: Asset[];
}

export class Phone {
    type = '';
    number = '';
}

export class Address {
    street = '';
    city = '';
    province = '';
    postalCode = '';
}

export class Job {
    type = '';
    title = '';
    annualIncome = '';
}

export class Property {
    type = '';
    usage = '';
    addresses: Address[];
    propertyTax = '';
    condoFees = '';
}

export class Asset {
    numberOfAssets = '';
    downPmtAmt = '';
}
