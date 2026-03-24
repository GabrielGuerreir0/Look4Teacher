import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import { useNavigate } from "react-router-dom";

export function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogin() {
    auth?.login();
    navigate("/dashboard");
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleLogin}>Entrar</button>
    </>
  );
}
