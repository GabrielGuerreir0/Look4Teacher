import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import Input from "../../components/Input";

export function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogin() {
    auth?.login();
    navigate("/dashboard");
  }

  return (
    <div className={styles.background}>
      <div className={styles.content}>
        <div className={styles.contentForm}>
          <img
            className={styles.logo}
            src="./src/assets/L4T_logo.png"
            alt="Logo"
          />
          <h1 className={styles.title}>Login</h1>
          <Input type="email" />
          <Input type="password" />
          <button className={styles.button} onClick={handleLogin}>
            Entrar
          </button>
        </div>
        <div className={styles.contentPlaneta}>
          <img
            className={styles.planeta}
            src="./src/assets/planeta.png"
            alt="Planeta"
          />
        </div>
      </div>
    </div>
  );
}
