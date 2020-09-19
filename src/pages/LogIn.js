import React from "react";

function LogIn({
  email,
  setemail,
  password,
  setpassword,
  handleLogin,
  handleSignup,
  hasAaccount,
  sethasAaccount,
  emailError,
  passwordError,
}) {
  return (
    <div>
      <div>
        <label>email</label>
        <input
          type="email"
          autoFocus
          required
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <p>{emailError}</p>
      </div>
      <div>
        <label>password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <p>{passwordError}</p>
      </div>
      <div>
        {hasAaccount ? (
          <>
            <button onClick={handleLogin}>sign in</button>
            <p>
              Don't have an account?
              <button onClick={()=>sethasAaccount(!hasAaccount)}>sign up</button>
            </p>
          </>
        ) : (
          <>
            <button onClick={handleSignup}>sign up</button>
            <p>
              Have an account? <button onClick={()=>sethasAaccount(!hasAaccount)}>sign in</button>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default LogIn;
