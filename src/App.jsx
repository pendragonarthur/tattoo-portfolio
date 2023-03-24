import "./App.sass";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
      <div className="copy">
        <p>2023. All rights reserved.&copy;</p>
      </div>
    </div>
  );
}

export default App;
