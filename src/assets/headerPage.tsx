import {Link} from "react-router-dom";
import React from "react";

function headerPage (){
    return <div>
        <h1> weiterleiten zu den Seiten: </h1>
        <Link to = "/characters"> Characters</Link>
        <Link to = "/Home/Willkommen"> Willkommen</Link>
    </div>

}
export default headerPage