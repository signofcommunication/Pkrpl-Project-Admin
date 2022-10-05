import { TextField, Button, Typography } from "@mui/material";
import { useProvider } from "../../utils/FirebaseProvider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Login.module.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useProvider();
  const navigate = useNavigate();
  const warn = (txt) => toast.error(txt);

  async function submitForm(e) {
    e.preventDefault();

    try {
      await login(email, password);
      alert("Login Success");
      navigate("/");
    } catch (e) {
      if (e.code === "auth/invalid-email") warn("Please use proper email!");
      if (e.code === "auth/user-not-found")
        warn("Sorry, Only admin can login!");
      if (e.code === "auth/wrong-password") warn("Wrong Password!");
    }
  }

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <ToastContainer />
        <form className={styles.form_signin} onSubmit={submitForm}>
          <Typography variant="h4" className={styles.form_signin_heading}>
            Login
          </Typography>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
          />
          <br />
          <TextField
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            required
          />
          <br />
          <Button variant="contained" type="submit">
            Login
          </Button>
        </form>
      </div>
    </>
  );
}

export default Login;
