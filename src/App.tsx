import './App.css';
import { Examples } from './components/examples/Examples';
import { Navbar } from './components/navbar/Navbar';
import { Todo } from './components/todo/Todo';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{padding:20}}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
