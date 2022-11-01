import React, { useState } from 'react';

function LikeDislike() {

    //How do you create state? use hooks
    //useState is the one of many other hooks
    //useState hook returns 2 values
    //const [state_name, function_name_to_change_state] = useState(default_value_for_state_name)
    const [counter, changeCounter] =  useState(0)
    //we have just declared 3 things:
    //1. declared the state called counter
    //2. declared that default value in counter state is 8
    //3. declared that function changeCounter can be used to 
    //    change the value of counter state to new value
    const [likes, changeLikes] =  useState(0)
    const [dislikes, changeDislikes] =  useState(0)
    const [videoId, changeVideoId] =  useState("d-diB65scQU")

    const updateLike=()=>{
        console.log("Like clicked....")
        changeCounter(counter + 1)
        changeLikes(likes +1)
    }

    const updateDislike=()=>{
        console.log("Like clicked....")
        changeCounter(counter + 1)
        changeDislikes(dislikes +1)
    }

    const captureValue=(event)=>{
        console.log("onChange fired for input field")
        //console.log(event)
        console.log(event.target.value)
        changeVideoId(event.target.value)
        
    }
    
    return ( 
        <div>
            <h1>Like Dislike</h1>
            <div>
                Total no of time like/dislike is udpated: {counter}
            </div>
            <div>
                <button onClick={updateLike}>Like</button>
                    {likes}
                <button onClick={updateDislike}>Dislike</button>
                    {dislikes}
            </div>
            <br />  
            <div>
                Video Id:
                <input type="text"  onChange={captureValue}/> &nbsp; &nbsp;
                <button>Update</button>
            </div>
            <div>
                Video ID: {videoId}
            </div>
            <div>
            <iframe width="560" 
                    height="315" 
                    src={"https://www.youtube.com/embed/"+videoId} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                
            </iframe>
            </div>
          
        </div>
     );
}

export default LikeDislike;