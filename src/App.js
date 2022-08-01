import './App.css';
import {BrowserRouter as Router,  Routes, Route} from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import SignIn from './pages/Sign IN/SignIn';
import SignUp from './pages/Sign UP/SignUp';
import keycloak from './keycloak';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import Home from './pages/Homepage/Homepage';
import Playlist from './pages/PlayList/PlayList';
import AddMusic from './pages/Add-Music/AddMusic';
import Contact from './pages/Contact/Contact';
import PrivateRoute from './Helpers/PrivateRoute';
import EditForm from './components/EditForm';
import SongDetails from './pages/SongDetails/SongDetails';
import RenderOnAnonymous from './components/RenderOnAnonymous';
import RenderOnAuthenticated from './components/RenderOnAuthenticated';
import AuthenticatedRoute from './components/AuthenticatedRoute'
import { Switch } from '@mui/material';
function App() {
  return (
    <>
      <ReactKeycloakProvider authClient={keycloak}>
    <Router>
      <Routes>
        <Route exact path="/"  element={<Landing/>}></Route>
        <Route exact path="/Sign-In" element={<SignIn/>}></Route>
        <Route exact path="/Sign-Up" element={<SignUp/>}></Route>
        {/* <AuthenticatedRoute path="/Home" ><Home/></AuthenticatedRoute> */}
         <Route exact path="/Home" element={<Home/>}></Route> 
        
        <Route exact path="/Your-Playlist" element={<Playlist/>}></Route>
        <Route exact path="/AddMusic" element={<AddMusic/>}></Route>
        <Route exact path="/EditForm" element={<EditForm/>}></Route>  
        <Route exact path="/Contact" element={<Contact/>}></Route>
        <Route exact path="/SongDetails" element={<SongDetails/>}></Route>
      </Routes>
      <div>
        {/* <RenderOnAnonymous><Landing /></RenderOnAnonymous> */}
       {/* <RenderOnAuthenticated><Home /></RenderOnAuthenticated>  */}
      </div>
    </Router>
    </ReactKeycloakProvider>
    </>
  );
}

export default App;