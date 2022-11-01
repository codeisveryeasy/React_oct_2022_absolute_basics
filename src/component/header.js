import React from 'react';
import Logo from './logo';
import Search from './search';

function Header(props) {
    return ( 
        <div style={{border:"1px solid red", margin:"5px", padding:"5px"}}>
            <Logo brand={props.company} yr={props.years}></Logo>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Search>{props.years}</Search>
            <p>{props.company}</p>
        </div>
     );
}

export default Header;