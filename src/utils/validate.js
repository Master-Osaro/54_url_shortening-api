const checkURLInput=(webAddress)=>{
    const webAddressValidation =  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    console.log(webAddress);
    if (webAddress.length === 0 || (webAddressValidation.test(webAddress))===false || !webAddress) {
        return  false;
    } 
    else {
        return true
    }
}

export const isValid = (webAddress)=>{
    if(!checkURLInput(webAddress)){
        console.log(false)
        return false
    } else {
        console.log(true)
        return true
    }
}
