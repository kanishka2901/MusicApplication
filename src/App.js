import './App.css';
import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing/landing';
import SignIn from './pages/Sign IN/SignIn';
import SignUp from './pages/Sign UP/SignUp';
import Home from './pages/Homepage/Homepage';
import Playlist from './pages/PlayList/PlayList';
import AddMusic from './pages/Add-Music/AddMusic';
import Contact from './pages/Contact/Contact';
import SongComponent from './components/SongComponent';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/"  element={<Landing/>}></Route>
        <Route exact path="/Sign-In" element={<SignIn/>}></Route>
        <Route exact path="/Sign-Up" element={<SignUp/>}></Route>
        <Route exact path="/Home" element={<Home/>}></Route>
        <Route exact path="/Your-Playlist" element={<SongComponent/>}></Route>
        <Route exact path="/AddMusic" element={<AddMusic/>}></Route>
        <Route exact path="/Contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;