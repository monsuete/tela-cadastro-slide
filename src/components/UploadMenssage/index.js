import React from 'react'


function CadNotices () {
  return(
    <>
      <h1>Cadastre os avisos aqui</h1>
      
        <form action="">
        <label for="fname">First name:</label><br/>
        <input type="text" id="fname" name="fname" value="John"></input><br/>
        <label for="lname">Last name:</label><br/>
        <input type="text" id="lname" name="lname" value="Doe"></input><br/><br/>
       <input type="submit" value="Submit"></input>
        </form>
    </>
  )
}

export default CadNotices