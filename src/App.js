import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Home from './pages/home';
import MainLayout from './layout/mainLayout';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/about';
import Store from './pages/store';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={'store'} element={<Store />} />
          <Route path={'about'} element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
