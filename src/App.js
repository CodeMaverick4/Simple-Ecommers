import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import MainContent from './components/main-content';

function App() {
  return (
    <div className="position-relative">
      <Topbar />
      <h1>The Generic</h1>
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
