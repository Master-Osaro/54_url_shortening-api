import { useState } from "react";

const CopyBtn=({urlItemResponseObj})=>{
    const [showCopiedText, setShowCopiedText] = useState("");
    const copyShortURL=(params)=> {
            navigator.clipboard.writeText(params).then(function() {
            console.log('Async: Copying to clipboard was successful! ' + params);
        }, function(err) {
        console.error('Async: Could not copy text: ', err);
        });
    }    
    /*============ TimeOut Functions ===========*/
    const changeCopyBtnText=()=> {
        setShowCopiedText(false)
    }

    if(showCopiedText){
        setTimeout(changeCopyBtnText, 3500);
    }
    return <button className={`btn btn-shorten ${showCopiedText?'btn-copied':''}`} onClick={()=>{
        copyShortURL(urlItemResponseObj.full_short_link);
        setShowCopiedText(true);
        }}>{showCopiedText?'Copied!':'Copy'}
    </button>
}

export default CopyBtn