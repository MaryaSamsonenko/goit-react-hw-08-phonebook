// import { GlobalStyle } from "./common/GlobalStyle";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { authOperations } from "./redux/auth/authOperations";
import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { StartPage } from "./pages/startpage/startpage";
import { LoginPage } from "./pages/loginpage/loginpage";
import { RegisterPage } from "./pages/registerpage/registerpage";
import { Layout } from "./components/Layout/Layout";
export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {/* <Layout /> */}
      <Suspense fallback="">
        <Routes>
          <Route index path="/" element={<StartPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
