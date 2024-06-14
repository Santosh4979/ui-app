import './App.css';
import Details from './components/Details';
import Sidebar from './components/Sidebar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar/>
      <Routes>
        <Route path="/details/:name" element={<Details/>}/>
        <Route path="/" />
      </Routes>
      </Router>

     </div>

  );
}

export default App;
