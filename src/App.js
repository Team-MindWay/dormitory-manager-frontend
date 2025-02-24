import React from "react";
import StartPage from "./pages/StartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import FindIdPage from "./pages/FindIDPage";
import FindPasswordStep1Page from "./pages/FindPasswordStep1Page";
import FindPasswordStep2Page from "./pages/FindPasswordStep2Page";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="signin" element={<SigninPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="findid" element={<FindIdPage />} />
        <Route path="findpasswordstep1" element={<FindPasswordStep1Page />} />
        <Route path="findpasswordstep2" element={<FindPasswordStep2Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
