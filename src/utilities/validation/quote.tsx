let errorResult:any;

const addToErrorResult = (key:string, value:string) => {
    if(!errorResult){
        errorResult = {};
    }
    errorResult[key] = value;
}

const validateCustomer:any = (firstName:string, surname:string) => {
    errorResult = null;

    if(!firstName || firstName===""){
        addToErrorResult("firstName", "First name is required.")
    }
    if(!surname || surname===""){
        addToErrorResult("surname", "Surname is required.")
    }
    return errorResult;
}

const validateCustomerDetails:any = (houseNameNumber:string, street:string, townCity:string, postcode:string, phoneNumber:string) => {
    errorResult = null;

    if(!houseNameNumber || houseNameNumber===""){
        addToErrorResult("houseNameNumber", "House name or number is required.")
    }
    if(!street || street===""){
        addToErrorResult("street", "Street name is required.")
    }
    if(!townCity || townCity===""){
        addToErrorResult("townCity", "Town/City is required.")
    }
    if(!postcode || postcode===""){
        addToErrorResult("postcode", "Postcode is required.")
    }
    if(!phoneNumber || phoneNumber===""){
        addToErrorResult("phoneNumber", "Phone number is required.")
    }
    return errorResult;
}

const validateCustomerNumbers:any = (adultNumbers:string, childNumbers: string, teenNumbers:string, eveningNumbers:string) => {
    errorResult = null;

    if(!adultNumbers || adultNumbers===""){
        addToErrorResult("adultNumbers", "Adult numbers are required.")
    }
    if(!childNumbers || childNumbers===""){
        addToErrorResult("childNumbers", "Child numbers are required.")
    }
    if(!teenNumbers || teenNumbers===""){
        addToErrorResult("teenNumbers", "Teen numbers are required.")
    }
    if(!eveningNumbers || eveningNumbers===""){
        addToErrorResult("eveningNumbers", "Evening numbers are required.")
    }
    return errorResult;
}

export {validateCustomer, validateCustomerDetails, validateCustomerNumbers};