import React from 'react'
import loadingGif from "../images/gif/loading-arrow.gif"

function Loading() {
    return (
        <div className="loading">
         <h6>Just a While.....</h6>  
         <img src={loadingGif }/>
        </div>
    )
}

export default Loading
