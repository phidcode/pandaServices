export class User {
    firstName = '';
    lastName = '';
    emailAddress = '';
    phoneNumber: Phone;
    address: Address;
    profession: Profession;
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

export class Profession {
    type = '';
    jobTitle = '';
    annualIncome = '';
}

export class Property {
    type = '';
    usage = '';
    address: Address;
    propertyTax = '';
    condoFees = '';
}

export class Asset {
    numberOfAssets = '';
    downPmtAmt = '';
    downPmtSources = [];
}
