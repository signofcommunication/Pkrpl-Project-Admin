import { TextField, Button, Typography } from "@mui/material";
import { useProvider } from "../../utils/FirebaseProvider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login/styles";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, user } = useProvider();
  const navigate = useNavigate();

  async function submitForm(e) {
    e.preventDefault();

    try {
      await login(email, password);
      alert("Login Success");
      navigate("/");
    } catch (e) {
      if (e.code === "auth/invalid-email") alert("Please use proper email!");
      if (e.code === "auth/user-not-found")
        alert("Sorry, Only admin can login!");
      if (e.code === "auth/wrong-password") alert("Wrong Password!");
    }
  }

  useEffect(() => {
    document.title = "Login";
  }, []);

  return (
    <>
      <div class="wrapper">
        <form class="form-signin" onSubmit={submitForm}>
          <Typography variant="h4" className="form-signin-heading">
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
