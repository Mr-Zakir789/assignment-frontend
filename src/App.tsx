import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PrivateRoutes } from './routes/privateRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<PrivateRoutes />} /> 
      </Routes>
    </Router>
  );
}

export default App;
