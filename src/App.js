import { BrowserRouter,Routes,Route } from "react-router-dom";
import Hero from "./sections/Hero/Hero";
import Check from "./pages/check/Check";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' >
            <Route index element={<Hero />} />
            <Route path='check' element={<Check />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
