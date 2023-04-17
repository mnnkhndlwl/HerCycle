import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./sections/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./sections/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Exercises from "./pages/Exercises/Exercises";
import Health from "./pages/Health/Health";
import Community from "./pages/Community/Community";
import Pregnancy from "./pages/Pregnancy/Pregnancy";
import Quiz from "./pages/Quiz/Quiz";
import Blog from "./pages/Blog/Blog";
import Check from "./pages/Check/Check";
import Doctors from "./pages/Doctors/Doctors";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import ChatComponent from "./components/ChatBot/ChatBot";

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
            <Route path="community" element={<Community />} />
            <Route path="pregnancy" element={<Pregnancy />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>
        <Newsletter />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
