import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
// import Info from './pages/Info.jsx'
// import Browse from './pages/Browse.jsx'
import Selection from "./pages/MovieSelection.jsx";
import NotFound from "./pages/404.jsx";
import CarouselPage from "./pages/CarouselPage";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/info' element={<Info />} />
        <Route path='/browse' element={<Browse />} /> */}
        <Route path='/carousel' element={<CarouselPage />}/>
        <Route path="/selection" element={<Selection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

