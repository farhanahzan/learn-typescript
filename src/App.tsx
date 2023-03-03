import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { Carousel } from './components/carousel/Carousel';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div style={{ padding: 20 }}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
