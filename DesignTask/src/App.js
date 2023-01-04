
import 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Components/header';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}/> 
      </Routes>
      </BrowserRouter>
  );
}

export default App;
