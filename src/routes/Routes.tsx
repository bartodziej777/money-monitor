import { Routes as Router, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Forgot from "../pages/forgot/Forgot";
import Navigation from "../components/Navigation";
import ProtectedRoute from "../components/ProtectedRoute";
import UnprotectedRoute from "../components/UnprotectedRoute";

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
        <Route path="settings" />
      </Route>
      <Route
        path="/login"
        element={
          <UnprotectedRoute>
            <Login />
          </UnprotectedRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <UnprotectedRoute>
            <Signup />
          </UnprotectedRoute>
        }
      />
      <Route
        path="/forgot"
        element={
          <UnprotectedRoute>
            <Forgot />
          </UnprotectedRoute>
        }
      />
    </Router>
  );
}
