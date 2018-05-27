export class User {
    firstName = '';
    lastName = '';
    emailAddress = '';
    phoneNumber: Phone;
    address: Address;
    job: Job;
    properties: Property;
    assets: Asset;
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
