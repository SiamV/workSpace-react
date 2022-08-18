import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ProjectSerach from './components/ProjectSearch/ProjectSerach';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exzct path={"/"} element={<NavBar />}/>
        <Route path={"/project-search"} element={<ProjectSerach />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
