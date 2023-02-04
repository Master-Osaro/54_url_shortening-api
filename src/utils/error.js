export const errorMsgHelper= (errorVal)=>{
    if(errorVal===1){
        return "Please enter a valid URL"
    } else if(errorVal===2){
        return 'Delay in fetching results, please be patient'
    } 
}
