import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import Abdominal from "./pages/Abdominal";
import Finger from "./pages/Finger";
import BottomBar from "./components/navBar/BottonBar";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <div className="flex-1 container flex justify-center items-center">
          <Routes>
            <Route path="/" element={<Finger />} />
            <Route path="/abdominal" element={<Abdominal />} />
          </Routes>
        </div>
        <BottomBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
