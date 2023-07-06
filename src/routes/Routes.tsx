import { Routes as Router, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Forgot from "../pages/forgot/Forgot";
import Navigation from "../components/Navigation";
import ProtectedRoute from "../components/ProtectedRoute";

export default function Routes() {
  return (
    <Router>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Navigation />
          </ProtectedRoute>
        }
      >
        <Route path="/calendar" />
        <Route path="/transactions" />
        <Route path="/me" />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot" element={<Forgot />} />
    </Router>
  );
}

//TODO: trasa dla * z komponentem notFound
