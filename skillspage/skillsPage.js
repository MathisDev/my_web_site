
// Taille de la fenetre
hauteur = window.innerHeight;  
largeur = window.innerWidth;

    // Main function
// Tableau principale
hauteur = hauteur - 120;
largeur = largeur - 40 
mainTableau = document.getElementById("mainTableau")
mainTableau.style.width = ""+largeur+"px";
mainTableau.style.height = ""+hauteur+"px";

//Tableau Secondaire


// Responcive 
if (largeur < 1023) {
    mainBorder = document.getElementById("mainTableau")
    mainTableau.style.border = "none"
    ts = document.getElementById("titreSkills")
    ct = document.getElementById("container")
    ts.style.fontSize = "20px"
    ts.style.bottom = "60px"
    ct.style.width = "1px"
    ct.style.height = "1pxs"


} 

