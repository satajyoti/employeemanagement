import logo from './logo.svg';
import './App.css';
import Create from './Create'; 
import { BrowserRouter, Switch, Route, Link,Routes } from 'react-router-dom';
import Read from './Read';

function App() {
  return (
    
    <div className="center">
      
      <BrowserRouter>   
      <Routes>
        <Route path='/' element={<Create></Create>}  />
        <Route path='/create' element={<Create></Create>} />
        <Route path='/read' element={<Read></Read>} />
        <Route path="*" element={<Create></Create>} />
      </Routes>
      </BrowserRouter>   
      
    </div>
    
  );
}

export default App;
