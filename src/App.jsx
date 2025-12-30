import { Routes, Route, Link } from "react-router-dom";
import CreatePaste from "./pages/CreatePaste";
import ViewPaste from "./pages/ViewPaste";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import PasteList from "./pages/PasteList";

export default function App() {
  return (
    <div className="container">

      <Navbar/>

      {/* <nav>
        <Link to="/">Create Paste</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreatePaste/>}/>
        <Route path="/my-pastes" element={<PasteList />} />

        <Route path="/about" element={<About/>}/>
        <Route path="/p/:id" element={<ViewPaste />} />
      </Routes>
    </div>
  );
}
