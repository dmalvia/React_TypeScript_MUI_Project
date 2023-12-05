import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputBase,
  Link,
  Typography,
} from "@mui/material";
import movieBg from "../../assets/movie-bg1.jpg";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandle = (e: any) => {
    e.preventDefault();
    console.log(`Email : ${email} and Password : ${password}`);
    setEmail("");
    setPassword("");
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${movieBg})`,
        backgroundSize: "contain",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Box
        p={4}
        sx={{
          width: "100%",
          background: "rgba(0,0,0,0.75)",
          maxWidth: "380px",
        }}
      >
        <Typography variant="h2" mb={3} fontSize="1.25rem">
          Sign Up
        </Typography>
        <Box component="form" sx={{ color: "#fff" }} onSubmit={submitHandle}>
          <InputBase
            required
            placeholder="Email address"
            type="email"
            fullWidth
            sx={{
              mb: 2,
              padding: "5px 10px",
              background: "#fff",
              fontSize: "15px",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBase
            required
            placeholder="Password"
            type="password"
            fullWidth
            sx={{
              mb: 1,
              padding: "5px 10px",
              background: "#fff",
              fontSize: "15px",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
            sx={{ color: "#fff" }}
          />
          <Button variant="contained" fullWidth sx={{ mt: 2 }} type="submit">
            Sign In
          </Button>
          <Box>
            <Typography fontWeight={300} mt={2}>
              <Link href="#" underline="hover" sx={{ color: "#fff" }}>
                Forgot Password
              </Link>
            </Typography>
            <Typography fontWeight={300} mt={2}>
              <Link href="#" underline="hover" sx={{ color: "#fff" }}>
                Don't have an account ? Sign up
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
