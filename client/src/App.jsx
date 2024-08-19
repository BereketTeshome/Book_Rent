import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import { Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { useNavigate, useLocation } from "react-router-dom";

function App() {
  const cookie = new Cookies();
  const navigate = useNavigate();
  const locationName = useLocation().pathname;

  useEffect(() => {
    if (!cookie.get("user_token") && !sessionStorage.getItem("user_token")) {
      if (locationName !== "/signup" && locationName !== "/login") {
        navigate("/login");
      }
    }
  }, [locationName, navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: locationName !== "/signup" && locationName !== "/login" ? 10.5 : 0,
      }}
    >
      {locationName !== "/signup" && locationName !== "/login" && <Sidebar />}
      <Box sx={{ width: "100%" }}>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
