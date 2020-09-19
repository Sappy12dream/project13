import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import { auth } from "./firebase";
import LogIn from "./pages/LogIn";
import Header from "./components/Header";

function App() {
  const [user, setuser] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [emailError, setemailError] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [hasAaccount, sethasAaccount] = useState(false);

  const clearInput = () => {
    setemail("");
    setpassword("");
  };

  const clearError = () => {
    setpasswordError("");
    setemailError("");
  };

  const handleLogin = () => {
    clearError();
    auth.signInWithEmailAndPassword(email, password).catch((err) => {
      switch (err.code) {
        case "auth/invalide-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setemailError(err.message);
          break;
        case "auth/wrong-password":
          setpasswordError(err.message);
          break;
      }
    });
  };
  const handleSignup = () => {
    clearError();
    auth.createUserWithEmailAndPassword(email, password).catch((err) => {
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setemailError(err.message);
          break;
        case "auth/weak-password":
          setpasswordError(err.message);
          break;
      }
    });
  };

  const handleLogout = () => {
    auth.signOut();
  };

  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        clearInput();
        setuser(user);
      } else {
        setuser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);
  return (
    <div className="App">
      {user ? (
        <Header handleLogout={handleLogout} />
      ) : (
        <LogIn
          email={email}
          setemail={setemail}
          password={password}
          setpassword={setpassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAaccount={hasAaccount}
          sethasAaccount={sethasAaccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
}

export default App;
