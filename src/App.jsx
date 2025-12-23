import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import UserLogin from "./pages/UserLogin";
import DeliveryLogin from "./pages/DeliveryLogin";
import ChemistLogin from "./pages/ChemistLogin";
import UserSignup from "./pages/UserSignup";
import DeliverySignup from "./pages/DeliverySignup";
import ChemistSignup from "./pages/ChemistSignup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login/user" element={<UserLogin />} />
        <Route path="/login/delivery" element={<DeliveryLogin />} />
        <Route path="/login/chemist" element={<ChemistLogin />} />
        <Route path="/signup/user" element={<UserSignup />} />
        <Route path="/signup/delivery" element={<DeliverySignup />} />
        <Route path="/signup/chemist" element={<ChemistSignup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
