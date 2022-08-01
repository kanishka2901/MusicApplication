import UserService from "../services/UserService";
import {Link, Navigate} from 'react-router-dom';
//const RenderOnAuthenticated = ({ children }) => (UserService.isLoggedIn()) ? children : null;
const RenderOnAuthenticated = ({ children }) => (UserService.isLoggedIn()) ? (<Navigate to="/Home"/>) : null;

export default RenderOnAuthenticated