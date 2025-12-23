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

import UserDashboard from "./pages/user/UserDashboard";
import SelectMedicine from "./pages/user/SelectMedicine";
import SelectStore from "./pages/user/SelectStore";
import UploadPrescription from "./pages/user/UploadPrescription";

import ProtectedUserRoute from "./routes/ProtectedUserRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* LOGIN ROUTES */}
        <Route path="/login/user" element={<UserLogin />} />
        <Route path="/login/delivery" element={<DeliveryLogin />} />
        <Route path="/login/chemist" element={<ChemistLogin />} />

        {/* SIGNUP ROUTES */}
        <Route path="/signup/user" element={<UserSignup />} />
        <Route path="/signup/delivery" element={<DeliverySignup />} />
        <Route path="/signup/chemist" element={<ChemistSignup />} />

        {/* PROTECTED USER ROUTES */}
        <Route
          path="/user/dashboard"
          element={
            <ProtectedUserRoute>
              <UserDashboard />
            </ProtectedUserRoute>
          }
        />

        <Route
          path="/user/order/medicine"
          element={
            <ProtectedUserRoute>
              <SelectMedicine />
            </ProtectedUserRoute>
          }
        />

        <Route
          path="/user/order/store"
          element={
            <ProtectedUserRoute>
              <SelectStore />
            </ProtectedUserRoute>
          }
        />

        <Route
          path="/user/order/upload"
          element={
            <ProtectedUserRoute>
              <UploadPrescription />
            </ProtectedUserRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
