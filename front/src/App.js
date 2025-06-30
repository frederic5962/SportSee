import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavTop from './components/NavTop';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SideBar from './components/SideBar';

function App() {
  return (
    <Router>
      <NavTop />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
