
// import React, { useState, useEffect } from "react";
// import api from "../../services/api";

// import "./styles.css";

// export default function CadNotices() {
//   const [notices, setNotices] = useState([]);

//   useEffect(() => {
//     api.get("notices").then((response) => {
//       setNotices(response.data);
//     });
//   }, []);

//   async function handleAddNotice() {
 
//     await api.post("notices", {
//       title: '',
//       description: '',
//     });
//   }

//   // async function remove(notices){
//   //   await api.delete('notices', {
//   //     title: `{notices.title}`,
//   //     description: `{notices.description}`
//   //   })
//   // }


   


//   return ( 
     
//     <>
//       <div className="grid-container">
//         <div className="item1">Header</div>
        
//         <div className="item3">
//           <div>
//             {notices.map((notice) => (
//               <div className="notice">
//                 <h4>{notice.title}</h4> {notice.description}
//               </div>
//             ))}
//           </div>
          
//         </div>
//         <div className="item4">
//           <div>
//             <form action="/action_page.php">
//               <label for="fname">Título</label>
//               <input
//                 type="text"
//                 id="fname"
//                 name="firstname"
//                 placeholder="Título do aviso"
//                 value={handleAddNotice.title}
//               />

//               <label for="lname">Desrcrição</label>
//               <input
//                 type="text"
//                 id="lname"
//                 name="lastname"
//                 placeholder="Descrição do aviso"
//                 value={handleAddNotice.description}
//               />

//               <button className="cad" type="button" onClick={handleAddNotice}>
//                 Cadastrar
//               </button>
//             </form>
//           </div>
          
//         </div>
//       </div>

    
//     </>
//   );
// }

import React, {useState}from 'react'

import AddUserForm from './AddUserForm'
import UserTable from './UserTable'
import "./styles.css";

  const CadNotices = () => {

  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const initialFormState = { id: null, name: '', username: '' }
  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }


  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  )
}

export default CadNotices