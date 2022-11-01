import React from 'react';

function Search(props) {

    let score = props.children
    
    const welcome=()=>{
        return(
            <span>I am from moon!</span>
        )
    }

    const iAmClicked=()=>{
        console.log("Button clicked!" + props.children)
    }


    return ( 
        <span>
            <input type="text" placeholder='Search....'/>
            <br />
            Value of props.children: {score}
            <br />
            Welcome: {welcome()}
            <br />
            <button onClick={iAmClicked}>Click me!</button>
        </span>
     );
}

export default Search
