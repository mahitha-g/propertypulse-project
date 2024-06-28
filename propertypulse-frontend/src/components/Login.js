import React, { useState } from 'react';

   const Login = () => {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     const [usertype, setUsertype] = useState('');
     const userTypes=["Admin","Other"];


     const onSubmit = async e => {
       e.preventDefault();
       const user = {
         usertype,
         username,
         password,
       };
       try {
         const response = await fetch('/api/login', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(user),
         });
         const data = await response.json();
         console.log(data);
         // Handle token storage (localStorage, etc.) and redirection
       } catch (err) {
         console.error('Login Error:', err);
       }
     };

     return (
       <form onSubmit={onSubmit}>
        <label>UserType:</label>
        {userTypes.map((usertype)=>(
          <label key={usertype}>
             <input
           type="text"
           placeholder="Usertype"
           value={usertype}
           onChange={e => setUsertype(e.target.value)}
           required
         />{usertype}</label>
       
        ))}
        

         <input
           type="text"
           placeholder="Username"
           value={username}
           onChange={e => setUsername(e.target.value)}
           required
         />
         <input
           type="password"
           placeholder="Password"
           value={password}
           onChange={e => setPassword(e.target.value)}
           required
         />
        <a href="#project" className="nav__link">
            Login
          </a>
       </form>
     );
   };

   export default Login;