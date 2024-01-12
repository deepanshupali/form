import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import RequestForm from "./pages/RequestForm";

import { Routes, Route } from "react-router-dom";
import Success from "./pages/Success";
import Layout from "./pages/Outlet";
import RequireAuth from "./pages/requireAuth";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="success" element={<Success />} />
      </Route>

      <Route element={<RequireAuth allowedRoles="employee" />}>
        <Route path="form" element={<RequestForm />} />
      </Route>

      <Route element={<RequireAuth allowedRoles="admin" />}>
        <Route path="admin" element={<Admin />} />



      </Route>
    </Routes>
  );
}

export default App;
