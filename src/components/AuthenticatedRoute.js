import PropTypes from 'prop-types'
import { Route } from "react-router-dom";
import UserService from "../services/UserService";
import Landing from '../pages/Landing/Landing';

const AuthenticatedRoute = ({ children, ...rest }) => (
  <Route {...rest}>
    {UserService.isLoggedIn() ? children : <Landing />}
  </Route>
)

// AuthenticatedRoute.propTypes = {
//   isLoggedIn : PropTypes.bool.isRequired;
// }

export default AuthenticatedRoute
