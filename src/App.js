// import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Dashboard from './components/pages/Dashboard';
import Screen from './components/pages/Screen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="screen" element={<Layout />} >
          <Route index element={<Screen />} />
        </Route>
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
