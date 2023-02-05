import axios from "axios"
import { useEffect, useState } from "react"
import { isValid } from "../utils/validate"
import CopyBtn from "./CopyBtn";
const URLShortener=()=>{
    const savedUrlList = JSON.parse(localStorage.getItem("urlList"));
    const [cURL, setcURL] = useState("");
    const [urlList, setUrlList] = useState(checkLocalStorage());
    const [validUrlState, setvalidUrlState] = useState("");
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
                    <input type="text" placeholder="Shorten a link here..." className={`url_input ${validUrlState===false?'error-input':''}`} onChange={(e)=>{setcURL(e.target.value)}}/><button type="submit" className="btn btn-shorten" onClick={()=>{setvalidUrlState(isValid(cURL));}}>Shorten It!</button>
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
            {
            urlList!==[]?<div className="url__clear-btn">
                <button className="btn btn-primary btn-clear" onClick={()=>{setUrlList([])}}>Clear List</button>
            </div>:console.log("Empty")
            }
            
        </div>
    </section> 
}

export default URLShortener