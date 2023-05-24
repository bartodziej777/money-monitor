import { Routes as Router, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

export default function Routes() {
  return (
    <Router>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Router>
  );
}
