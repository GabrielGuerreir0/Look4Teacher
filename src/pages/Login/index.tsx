// src/pages/Login.tsx
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
        {/* LADO ESQUERDO – FORMULÁRIO HOLOGRÁFICO */}
        <div className={styles.formSide}>
          <div className={styles.logoContainer}>
            <img
              className={styles.logo}
              src="./src/assets/L4T_logo.png"
              alt="Logo L4T"
            />
          </div>

          <h1 className={styles.title}>Entre no universo</h1>
          <p className={styles.subtitle}>Acesse sua conta L4T Idiomas</p>

          <div className={styles.form}>
            <Input type="email" placeholder="Seu email" />
            <Input type="password" placeholder="Sua senha" />

            <button className={styles.button} onClick={handleLogin}>
              ATIVAR PORTAL
            </button>
          </div>

          <p className={styles.forgot}>
            Esqueceu a senha? <span>Recuperar</span>
          </p>
        </div>

        {/* LADO DIREITO – PLANETA + OVERLAY */}
        <div className={styles.visualSide}>
          <img
            className={styles.planeta}
            src="./src/assets/planeta.png"
            alt="Planeta L4T"
          />
          <div className={styles.visualOverlay}>
            <h2 className={styles.universeText}>L4T UNIVERSE</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
