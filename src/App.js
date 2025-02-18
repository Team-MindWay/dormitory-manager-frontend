import { BrowserRouter, Route, Routes } from "react-router-dom";
import Starting from "./pages/starting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Starting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
