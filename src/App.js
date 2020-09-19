import React, { useState, useEffect } from 'react';
import "./styles/App.scss";
import { auth } from "./firebase";

function App() {
  const [user, setuser] = useState('');
  const [email, setemail] = useState("");
  const [password, setpassword] = useState('');
  const [emailError, setemailError] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const [hasAaccount, sethasAaccount] = useState(false);

  const handleLogin = ()=>{
auth.signInWithEmailAndPassword
  }
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
