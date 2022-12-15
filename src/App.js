import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Buy from "./pages/buy";
import Rent from "./pages/rent";
import Invest from "./pages/invest";
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/Content";
import Navbar from './components/navbar';
import Sidebar from './components/sidebar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    
      <Routes>
        
        <Route path="/" element={<Buy />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/invest" element={<Invest />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


