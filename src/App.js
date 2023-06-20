import Home from "./routes/Home";
import Gallery from "./routes/Gallery";
import Shop from "./routes/Shop";
import Contact from "./routes/Contact";
import { Route , Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/contact" element={<Contact/>}/>

    </Routes>
    </div>
  );
}

export default App;
