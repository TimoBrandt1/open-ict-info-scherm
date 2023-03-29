// import logo from './logo.svg';
import './App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Dashboard from './pages/dashboard/Dashboard';
import Screen from './pages/screen/Screen';
import KennisdelingScreen from './components/screen/KennisdelingScreen';

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
        <Route path="formscreen" element={<Layout />} >
          <Route index element={<KennisdelingScreen />} />
        </Route>
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
