import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin, Signup, Start, FindID, FindPasswordStep1, FindPasswordStep2, Home } from "./pages";
import { StudentProvider } from "./context/StudentContext";

const App = () => {
  return (
    <StudentProvider> {/* ✅ 전역 상태 관리하는 Provider 추가 */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="findid" element={<FindID />} />
          <Route path="findpasswordstep1" element={<FindPasswordStep1 />} />
          <Route path="findpasswordstep2" element={<FindPasswordStep2 />} />
          <Route path="home" element={<Home />} />
          <Route path="*" element={<span children={"없는 페이지"} />} />
        </Routes>
      </BrowserRouter>
    </StudentProvider>
  );
};

export default App;
