import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MapView from "./pages/MapView";
import Dashboard from "./pages/Dashboard";
import styled, { css } from "styled-components";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const Layout = styled.div`
  height: max-content;
  max-width: 1366px;
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;

  ${(props) =>
    !props.showAfter &&
    css`
      &::after {
        content: "";
        position: absolute;
        right: 0;
        z-index: -1;
        width: 37%;
        height: 100%;
        background-color: #fcf5f3;
      }
    `}
`;

function App() {
  const location = useLocation();
  const noAfter = location.pathname.includes("/hotels");
  return (
    <Layout showAfter={noAfter}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hotels/:id" element={<MapView />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Layout>
  );
}

export default App;

<Navbar />;
