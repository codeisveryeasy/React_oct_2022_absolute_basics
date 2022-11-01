import React from 'react';
import AddYoutube from '../component/addyoutube';
import Employee from '../component/employee';
import Header from '../component/header';
import LikeDislike from '../component/likedislike'

import Rainbow  from '../component/rainbow'
import Youtube from '../component/youtube';


function RootComponent() {
    return (  
     <div>
        <h1>My Root component</h1>
        <Header company="IBM" years="80"></Header>
        <Header company="AirAsia" years="21"></Header>
        <Header company="Google" years="26"></Header>
        <Header company="OBB" years="4"></Header>
        <Rainbow></Rainbow>
        <LikeDislike></LikeDislike>
        <Employee></Employee>
        <Youtube></Youtube>
        <AddYoutube></AddYoutube>
     </div>
    );
}

export default RootComponent;