// import React from 'react'

// export default function Main () {
//     return(
//         <h1>
//             Hello
//         </h1>
//     )
// }

import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function Main() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="buttons-container">
          <Link to="/images" className="study">
            Adm Imagens
          </Link>

          <Link to="/notices" className="give-class">
            Adm Avisos
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Main;
