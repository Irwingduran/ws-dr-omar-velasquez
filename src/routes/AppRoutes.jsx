import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../utils/ScrollToTop';
import Home from '../pages/home/Home';
import Service1 from '../pages/service1/Home';
import Service2 from '../pages/service2/Home';
import Service3 from '../pages/service3/Home';

const AppRoutes = () => {
  return (
    <Router>
       <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Service1" element={<Service1 />} />
        <Route path="/Service2" element={<Service2 />} />
        <Route path="/Service3" element={<Service3 />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
