import React from 'react';

function Alphabet(props) {
    return ( 
        <span style={
            {
                fontSize:"53px",
                color:props.color,
                backgroundColor:"lightpink",
                margin: "2px",
                border:"1px solid black",
                borderRadius:"5px",
                padding:"5px"
                
            }
        }>
            {props.children}
        </span>
     );
}

export default Alphabet;