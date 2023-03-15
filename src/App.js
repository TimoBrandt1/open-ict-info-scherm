import './App.css';

// imports 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Layout from './components/pages/Layout';
import Screen from './components/pages/Screen';
import FormBasic from './components/pages/Form';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Screen />} />
        </Route>

        <Route path="form" element={<Layout />} >
          <Route index element={<FormBasic />} />
        </Route>
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
