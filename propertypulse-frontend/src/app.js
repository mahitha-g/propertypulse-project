

import React from 'react';
   import './App.css';
   import Register from './components/Register';
   import Login from './components/Login';

   function App() {
     return (
        <div >
       <div >
         <h1>MERN Authentication Example</h1>
         <Register />
         <Login />
       </div>
       </div>
     );
   }

   export default App;