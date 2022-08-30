import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Preloader from './components/utiles/Preloader/Preloader.js'

const NavBar = React.lazy(() => import('./components/NavBar'));
const ProjectSerach = React.lazy(() => import('./components/ProjectSearch/ProjectSerach'));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<NavBar />} />
          <Suspense fallback={<Preloader />}>
            <Route path={"/project-search"} element={<ProjectSerach />} />
          </Suspense>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
