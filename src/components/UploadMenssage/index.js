// import { list } from 'postcss'
import React, { useState, useEffect } from "react";
import api from "../../services/api";

import "./styles.css";

export default function CadNotices() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    api.get("notices").then((response) => {
      setNotices(response.data);
    });
  }, []);

  async function handleAddNotice() {
    // notices.push(`Novo projeto ${Date.now()}`)

    // setNotices([...notices, `Novo projeto ${Date.now()}`])
    await api.post("notices", {
      title: `Vuejs ${Date.now()}`,
      description: "ldsfsaflksdajfdsklj",
    });
  }

  return (
    <>
      {notices.map((notice) => (
        <div className="display">
          <select
            class="form-select"
            multiple
            aria-label="multiple select example"
          >
            <option selected>Open this select menu</option>
            <option value="1">{notice.title}</option>
          </select>
          
        </div>
      ))}

      <button type="button" onClick={handleAddNotice}>
        Adiciontar Avisos
      </button>

      {/* <h1>Cadastre os avisos aqui</h1>
      
        <form action="">
        <label for="fname">First name:</label><br/>
        <input type="text" id="fname" name="fname" value="John"></input><br/>
        <label for="lname">Last name:</label><br/>
        <input type="text" id="lname" name="lname" value="Doe"></input><br/><br/>
       <input type="submit" value="Submit"></input>
        </form> */}
    </>
  );
}
