import axios from "axios"
import { useState } from "react"
import { errorMsgHelper } from "../utils/error";
import { isValid } from "../utils/validate"
const URLShortener=()=>{
    const [cURL, setcURL] = useState("");
    const [urlList, setUrlList] = useState([]);
    const [validUrlState, setvalidUrlState] = useState("");
    const [showCopiedText, setShowCopiedText] = useState("");
    const [responseDelayed, setResponseDelayed] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    
    function shortenURL(params) {
        if(params){
            axios.get('https://api.shrtco.de/v2/shorten?url='+params)
            .then(function (response) {
                console.log(response);
                setUrlList([...urlList, response.data.result] )
                localStorage.setItem("urlList", urlList);
            })
            .catch(function (error) {
                console.log(error);
                setErrorMessage(error.response.data.disallowed_reason)
            });
        } else {
            //
        }
        
    }

    function copyShortURL(params) {
        navigator.clipboard.writeText(params).then(function() {
        console.log('Async: Copying to clipboard was successful! ' + params);
        }, function(err) {
        console.error('Async: Could not copy text: ', err);
        });
    }

    if(showCopiedText){
        setTimeout(changeCopyBtnText, 3500);
    }
    function changeCopyBtnText() {
        setShowCopiedText(false)
    }


    function changeApiResponseAfter5secs() {
        setResponseDelayed(true)
        setTimeout(setResponseDelayed(false), 5000);
    }


    function myStopFunction() {
    // clearTimeout(myTimeout);
    }

    
    return <section className="section section__URL">
        <div className="container">
            <form action="" onSubmit={(e)=>{
                e.preventDefault();
                const currentUrlListLength = urlList.length
                setvalidUrlState(isValid(cURL));
                validUrlState===true?shortenURL(cURL):shortenURL('');
                if((currentUrlListLength<urlList.length)==false){
                    setTimeout(changeApiResponseAfter5secs, 5000);
                }
                
            }}>
                <div className="form-group">
                    <input type="text" placeholder="Shorten a link here..." className={`url_input ${validUrlState===false?'error-input':''}`} onChange={(e)=>{setcURL(e.target.value)}}/><button type="submit" className="btn btn-shorten">Shorten It!</button>
                </div>
                <p className={`${validUrlState===false?'error show':''} ${responseDelayed?'warn show':''}`}>{validUrlState===false?'Please enter a valid URL':responseDelayed?'Delay in fetching results, please be patient':''}</p>
            </form>
            <div className="url__list">
                {
                    urlList!==[]?urlList.slice(-3).map((urlItemResponseObj, index)=>{
                        return <div className="url__item" key={index}>
                                    <div className="url">{urlItemResponseObj.original_link}</div>
                                    <div className="url__btn-group">
                                        <p>{urlItemResponseObj.full_short_link}</p>
                                        <button className={`btn btn-shorten ${showCopiedText?'btn-copied':''}`} onClick={()=>{
                                            copyShortURL(urlItemResponseObj.full_short_link);
                                            setShowCopiedText(true);
                                        }}>{showCopiedText?'Copied!':'Copy'}</button>
                                    </div>
                                </div>
                    }):""
                }
            
            </div>
            
        </div>
    </section>
}

export default URLShortener