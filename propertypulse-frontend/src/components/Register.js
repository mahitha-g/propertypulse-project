import React, { useState } from 'react';

   const Register = () => {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');

     const onSubmit = async e => {
       e.preventDefault();
       const newUser = {
         username,
         password,
       };
       try {
         const response = await fetch('/api/register', {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify(newUser),
         });
         const data = await response.json();
         console.log(data);
       } catch (err) {
         console.error('Registration Error:', err);
       }
     };

     return (
       <form onSubmit={onSubmit}>
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
           minLength="6"
           required
         />
         <button type="submit">Register</button>
       </form>
     );
   };

   export default Register;