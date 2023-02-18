import axios from "axios"
import { useEffect, useState } from "react"
import { isValid } from "../utils/validate"
import CopyBtn from "./CopyBtn";
const URLShortener=()=>{
    const savedUrlList = JSON.parse(localStorage.getItem("urlList"));
    const [cURL, setcURL] = useState("");
    const [urlList, setUrlList] = useState(checkLocalStorage());
    const [validUrlState, setValidUrlState] = useState("");
    const [responseDelayed, setResponseDelayed] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const shortenURL=async(params)=> {
        if(params){
            await axios.get('https://api.shrtco.de/v2/shorten?url='+params)
            .then(function (response) {
                console.log(response);
                setUrlList([...urlList, response.data.result] )
            })
            .catch(function (error) {
                console.log(error);
                setValidUrlState(false)
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
        setValidUrlState("")
    }

    if(validUrlState===false){
        setTimeout(changeUrlState, 3500);
    }

    function checkLocalStorage() {
        if (savedUrlList) {
            return savedUrlList;
        } 
        else{
            return []
        }
    }

    ///get saved URL List from local storage
    useEffect(()=>{
        localStorage.setItem("urlList", JSON.stringify(urlList.slice(-3)));
    },[urlList])
    
    return <section className="section section__URL" id="boostLink">
        <div className="container">
            <form action="" onSubmit={(e)=>{
                e.preventDefault();
                validUrlState===true?shortenURL(cURL):shortenURL('');
                errorHelper();
            }}>
                <div className="form-group">
                    <input type="text" placeholder="Shorten a link here..."  aria-label="Enter link to shorten" id="url_input" className={`url_input ${validUrlState===false?'error-input':''}`} onChange={(e)=>{setcURL(e.target.value)}}/><button type="submit" className="btn btn-shorten" onClick={()=>{setValidUrlState(isValid(cURL));}}>Shorten It!</button>
                </div>
                <p className={`${validUrlState===false?'error show':''}`} aria-describedby="url_input" aria-live="assertive">{validUrlState===""?'':validUrlState===true?"": errorMessage}</p>
            </form>
            <ul className="url__list" aria-live="polite">
                {
                    urlList&&urlList.length?urlList.slice(-3).map((urlItemResponseObj, index)=>{
                        return <li className="url__item" key={index}>
                                    <p className="url">{urlItemResponseObj.original_link}</p>
                                    <div className="url__btn-group">
                                        <p>{urlItemResponseObj.full_short_link}</p>
                                        <CopyBtn urlItemResponseObj={urlItemResponseObj}/>
                                    </div>
                                </li>
                    }):""
                }
            
            </ul>
            {
            urlList&&urlList.length?<div className="url__clear-btn">
                <button className="btn btn-primary btn-clear" onClick={()=>{setUrlList([])}}>Clear List</button>
            </div>:""
            }
            
        </div>
    </section> 
}

export default URLShortener