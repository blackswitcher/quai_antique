import Route from "/Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/signin", "Connexion", "/pages/singnin.html"),
    new Route("/signup", "inscription", "/pages/signup.html"),
]

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";