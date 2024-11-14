import Menus from "./components/Menu"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return  <BrowserRouter>
  <div>
    <header>
      <Menus />
    </header>
    <main>
      <Routes>
        <Route path="/settings" element={<Menus />} />
      </Routes>
    </main>
  </div>
</BrowserRouter>;
}
export default App;
