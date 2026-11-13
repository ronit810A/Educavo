import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/home";

import Header from "./Component/header"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;