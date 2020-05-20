import React from "react";
import "./css/Errorpage.css";
import notfound from "../notfound.png";

function Errorpage() {
    return(
        <div>

            <div className="box-sherlock"><img className="img-sherlock" src={notfound}
                                               alt="404 page not found"/></div>
            <h1 className="text-center text-404">4 0 4</h1>
            <h1 className="text-center">Page Not Found</h1>
        </div>
    );
}

export default Errorpage;