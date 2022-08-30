import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Preloader from './components/utiles/Preloader/Preloader.js'

const NavBar = React.lazy(() => import('./components/NavBar'));
const ProjectSerach = React.lazy(() => import('./components/ProjectSearch/ProjectSerach.jsx'));
const Modal = React.lazy(() => import('./components/Modal/Modal.jsx'))

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route exact path={"/"} element={<NavBar />} />
            <Route path={"/project-search"} element={<ProjectSerach />} />
            <Route path={"/modal"} element={<Modal />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
