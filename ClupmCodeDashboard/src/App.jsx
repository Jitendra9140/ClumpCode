import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./components/ProtectedRoute";

// Lazy-loaded pages/components
const Home = lazy(() => import("./Home"));
const Login = lazy(() => import("./pages/LoginPage"));
const Signup = lazy(() => import("./pages/Signup"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

function App() {
  return (
    <BrowserRouter>
      {/* Suspense shows fallback UI while lazy components load */}
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
