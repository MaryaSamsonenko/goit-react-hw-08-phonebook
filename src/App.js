import { useDispatch } from "react-redux";
import { useEffect, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { PublicRoute } from "./components/Routes/PublicRoute";
import { PrivateRoute } from "./components/Routes/PrivatRoutes";
import { AppBar } from "./components/AppBar/AppBar";
import { GlobalStyle } from "./common/GlobalStyle";
import { authOperations } from "./redux/auth/authOperations";
import { StartPage } from "./pages/startpage/startpage";
import { LoginPage } from "./pages/loginpage/loginpage";
import { RegisterPage } from "./pages/registerpage/registerpage";
import { Phonebook } from "./pages/phonebook/phonebook";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <AppBar />
      <Suspense fallback="">
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <StartPage />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Phonebook />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Toaster />
      </Suspense>
    </>
  );
};
