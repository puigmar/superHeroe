import React, { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const lastPath = localStorage.getItem("lastPath");
  const handleLogin = () => {
    history.replace(lastPath);
    dispatch({
      type: types.login,
      payload: {
        name: "Ferran",
      },
    });
  };
  return (
    <div className='container mt-5'>
      <h1>Login</h1>
      <hr />
      <button type='button' className='btn btn-primary' onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
