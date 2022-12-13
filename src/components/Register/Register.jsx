import { TextField, Button, Typography } from "@mui/material";
import { useProvider } from "../../utils/FirebaseProvider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../Login/Login.module.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register: reg } = useProvider();
  const navigate = useNavigate();
  const warn = (txt) => toast.error(txt);

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      await reg(email, password);
      navigate("/login");
    } catch (e) {
      if (e.code == "auth/email-already-in-use") warn("Email already in used");
    }
  }

  useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <div className={styles.wrapper}>
      <ToastContainer />
      <form className={styles.form_signin} onSubmit={handleSubmit}>
        <Typography variant="h4" className={styles.form_signin_heading}>
          Register
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
          Register
        </Button>
      </form>
    </div>
  );
}

export default Register;
