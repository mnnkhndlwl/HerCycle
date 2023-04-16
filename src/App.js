import { BrowserRouter,Routes,Route } from "react-router-dom";
import Hero from "./sections/Hero/Hero";
import Check from "./pages/check/Check";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./sections/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Exercises from "./pages/Exercises/Exercises";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' >
            <Route index element={<Hero />} />
            <Route path='check' element={<Check />} />
            <Route path='exercises' element={<Exercises />} />
          </Route>
        </Routes>
        <Newsletter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
