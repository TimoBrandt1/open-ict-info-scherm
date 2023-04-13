// import logo from './logo.svg';
import './App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Dashboard from './pages/dashboard/Dashboard';
import Screen from './pages/screen/Screen';
import KennisdelingScreen from './components/screen/KennisdelingScreen';
import SlideOverzicht from "./components/slide-overzicht/component.SlideOverzicht"
import Screens from "./pages/screen/Screens"
import FormKennisdeling from './components/forms/FormKennisdeling';
import FormShowcaseProjecten from './components/forms/FormShowcaseProjecten';
import ShowcaseProjectenScreen from './components/screen/ShowcaseProjectenScreen'
import ChooseForm from './components/forms/ChooseForm';

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
        <Route path="kennisdelingscreen" element={<Layout />} >
          <Route index element={<KennisdelingScreen />} />
        </Route>
        <Route path="formshowcaseprojecten" element={<Layout />} >
          <Route index element={<FormShowcaseProjecten />} />
        </Route>
        <Route path="kennisdelingform" element={<Layout />} >
          <Route index element={<FormKennisdeling />} />
        </Route>
        <Route path="*" element={<h1>404: Not Found</h1>} />
        <Route path="screens" element={<Layout />} >
          <Route index element={<Screens />} />
        </Route>
        <Route path="SlideOverzicht" element={<Layout />} >
          <Route index element={<SlideOverzicht />} />
        </Route>
        <Route path="showcaseprojectenscreen" element={<Layout />} >
          <Route index element={<ShowcaseProjectenScreen />} />
        </Route>
        <Route path="chooseform" element={<Layout />} >
          <Route index element={<ChooseForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
