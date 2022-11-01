import axios from 'axios';
import React, { useState } from 'react';

function AddYoutube() {

    const [title, updateTitle] = useState("")
    const [videoid, updateVideoid] = useState("")
    const [likes, updateLikes] = useState(0)
    const [dislikes, updateDislikes] = useState(0)


    const captureTitle=(event)=>{
        updateTitle(event.target.value)
    }

    const captureVideoId=(event)=>{
        updateVideoid(event.target.value)
    }

    const addVideo=()=>{
        let newVideo={
            "title": title,
             "videoid": videoid,
             "likes": likes,
             "dislikes": dislikes
           }
        console.log(newVideo)   
        axios.post("https://joyous-cowboy-boots-colt.cyclic.app/video/add",newVideo)
           .then((response)=>{
            console.log(response)
           })
           .catch((error)=>{
            console.log(error)
           })
    }

    return ( 
        <div>
            <h1>Add New Youtube Video</h1>
            <div>
                <div>
                    <label>Title:</label>
                    <input type="text" onChange={captureTitle} />
                    <br /><br />
                </div>
                <div>
                    <label>Video id:</label>
                    <input type="text" onChange={captureVideoId}/>
                    <br /><br />
                </div>
                <div>
                    <label>Like: </label>
                    <input type="number" readOnly={true} value={dislikes}/>
                    <br /><br />
                </div>
                <div>
                    <label>Dislike: </label>
                    <input type="number" readOnly={true} value={likes} />
                    <br /><br />
                </div>
                <div>
                  <button onClick={addVideo}>Add</button>
                </div>
              
            </div>
        </div>
     );
}

export default AddYoutube;