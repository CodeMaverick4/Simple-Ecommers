import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/home';
import MainLayout from './layout/mainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/about';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={'about'} element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
