import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:9090/auth",
 realm: "Musicapp_keycloak",
 clientId: "music-keycloak",
});

export default keycloak;