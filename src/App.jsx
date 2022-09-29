import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import { Footer, Header } from "./Components";
// Pages
import { Home, Error404 } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
