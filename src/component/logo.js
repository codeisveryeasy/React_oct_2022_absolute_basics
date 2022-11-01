import React from 'react';

function Logo(props) {
    return ( 
        <span>
           {props.brand}{props.yr}
        </span>
     );
}

export default Logo;