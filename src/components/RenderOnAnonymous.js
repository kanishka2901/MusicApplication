import UserService from "../services/UserService";

//const RenderOnAnonymous = ({ children }) => (!UserService.isLoggedIn()) ? children : null;
//const RenderOnAnonymous = ({ children }) => (!UserService.isLoggedIn()) ? null : children;
const RenderOnAnonymous = ({ children }) => (!UserService.isLoggedIn()) ? children : null;
export default RenderOnAnonymous