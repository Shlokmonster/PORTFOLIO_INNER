import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Desktop from './components/os/Desktop';

function App() {
  return (
    <Router basename='/'>
      <div className='App'>
        <Routes>
          <Route path='/*' element={<Desktop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
