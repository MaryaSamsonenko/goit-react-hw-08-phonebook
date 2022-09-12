import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { PublicRoute } from "./hooks/Routes/PublicRoute";
import { PrivateRoute } from "./hooks/Routes/PrivateRoute";
import { Layout } from "./layout/Layout";
import { GlobalStyle } from "./style/GlobalStyle";
import { authOperations } from "./redux/auth/authOperations";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { Phonebook } from "./pages/Phonebook/Phonebook";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={
              <PublicRoute>
                <HomePage />
              </PublicRoute>
            }
          />
          <Route
            path="signup"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Phonebook />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};
