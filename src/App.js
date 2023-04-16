import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./sections/Hero/Hero";
import Check from "./pages/Check/Check";
import Doctors from "./pages/Doctors/Doctors";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./sections/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Exercises from "./pages/Exercises/Exercises";
import Health from "./pages/Health/Health";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Hero />} />
            <Route path="check" element={<Check />} />
            <Route path="exercises" element={<Exercises />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="health" element={<Health />} />
          </Route>
        </Routes>
        <Newsletter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
