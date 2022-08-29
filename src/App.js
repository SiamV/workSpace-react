import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Modal from './components/Modal/Modal';
import NavBar from './components/NavBar';
import ProjectSerach from './components/ProjectSearch/ProjectSerach';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<NavBar />}/>
        <Route path={"/project-search"} element={<ProjectSerach />}/>
        <Route path={"/modal"} element={<Modal/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
