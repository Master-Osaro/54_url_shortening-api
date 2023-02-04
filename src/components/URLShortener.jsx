import axios from "axios"
import { useState } from "react"
import { isValid } from "../utils/validate"
import CopyBtn from "./CopyBtn";
const URLShortener=()=>{
    const [cURL, setcURL] = useState("");
    const [urlList, setUrlList] = useState([]);
    const [validUrlState, setvalidUrlState] = useState("");
    const [responseDelayed, setResponseDelayed] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    const shortenURL=(params)=> {
        if(params){
            axios.get('https://api.shrtco.de/v2/shorten?url='+params)
            .then(function (response) {
                console.log(response);
                setUrlList([...urlList, response.data.result] )
                localStorage.setItem("urlList", urlList);
            })
            .catch(function (error) {
                console.log(error);
                setvalidUrlState(false)
                setErrorMessage(error.response.data.disallowed_reason)
            });
        } else {
            //
        }
        
    }

    const errorHelper=()=> {
        if(!validUrlState&&cURL!==""){
            setErrorMessage('The link you entered is not valid')
        }
        else if(validUrlState===false&&cURL===""){
            setErrorMessage('Please add a link')
        }
        else{
            if(responseDelayed){
                setErrorMessage('Delay in fetching results, please try again in 5s') 
            } else{
                setErrorMessage('') 
            }
        }
    }

    /*============ TimeOut Functions ===========*/

    const changeUrlState=()=> {
        setvalidUrlState("")
    }

    if(validUrlState===false){
        setTimeout(changeUrlState, 3500);
    }

    const changeApiResponseAfter5secs=()=> {
        setResponseDelayed(true)
        setTimeout(setResponseDelayed(false), 5000);
    }


    const myStopFunction=()=> {
    // clearTimeout(myTimeout);
    }

    
    return <section className="section section__URL">
        <div className="container">
            <form action="" onSubmit={(e)=>{
                e.preventDefault();
                const currentUrlListLength = urlList.length
                setvalidUrlState(isValid(cURL));
                validUrlState===true?shortenURL(cURL):shortenURL('');
                if(currentUrlListLength<urlList.length){
                    setTimeout(changeApiResponseAfter5secs, 5000);
                }
                errorHelper();
                console.log(currentUrlListLength, urlList.length)
                
            }}>
                <div className="form-group">
                    <input type="text" placeholder="Shorten a link here..." className={`url_input ${validUrlState===false?'error-input':''}`} onChange={(e)=>{setcURL(e.target.value)}}/><button type="submit" className="btn btn-shorten">Shorten It!</button>
                </div>
                <p className={`${validUrlState===false?'error show':''} ${responseDelayed?'warn show':''}`}>{validUrlState===""?'':validUrlState===true?"": errorMessage}</p>
            </form>
            <div className="url__list">
                {
                    urlList!==[]?urlList.slice(-3).map((urlItemResponseObj, index)=>{
                        return <div className="url__item" key={index}>
                                    <div className="url">{urlItemResponseObj.original_link}</div>
                                    <div className="url__btn-group">
                                        <p>{urlItemResponseObj.full_short_link}</p>
                                        <CopyBtn urlItemResponseObj={urlItemResponseObj}/>
                                    </div>
                                </div>
                    }):""
                }
            
            </div>
            
        </div>
    </section>
}

export default URLShortener