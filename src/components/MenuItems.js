import keycloak from "../keycloak";
import UserService from "../services/UserService";


export const MenuItems = [
    {
        id:1,
        title:'Profile',
        path:'/Profile',
        cName:'dropdown-link'
    },
    {
        id:2,
        title:'Your Playlist',
        path:'/Your-Playlist',
        cName:'dropdown-link'
    },
    {
        id:3,
        title:'Setting',
        path:'/Setting',
        cName:'dropdown-link'
    },
    {
        id:4,
        title:'Logout',
       // path:'/',
        onclick: UserService.doLogout,
        cName:'dropdown-link'
    },
]