import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import {store} from "./store"
import HttpService from "./services/HttpService";
import UserService from "./services/UserService";
import RenderOnAuthenticated from './components/RenderOnAuthenticated';
import RenderOnAnonymous from './components/RenderOnAnonymous';
import Landing from './pages/Landing/Landing';
import Homepage from './pages/Homepage/Homepage';
import { ThemeProvider } from './components/ToggleModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
  <React.StrictMode>
    <Provider store={store}> 
    <ThemeProvider>
      <App />
    </ThemeProvider>
      
    </Provider>
  </React.StrictMode>
</>
);

UserService.initKeycloak(root.render);
HttpService.configure();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
