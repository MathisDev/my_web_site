
window.onload = function() {
    checksize()
};
function checksize() {
    var largeur = screen.width;
    console.log(largeur);
    if (largeur < 1200) {
        console.log("Vous etes sur telephone");
        resize1()
       
    } else {
        resize2()
        console.log("Vous n'estes pas sur votre telephone")
    }
}
function resize1(){
    let bando = document.getElementById("bando");
    /*let classBtnDevis = document.getElementById("class-btn-devis");
    let btnDevis = document.getElementById("btn-devis");*/
    let a = document.getElementById("bandoli1");
    let a1 = document.getElementById("bando-a1");
    let b = document.getElementById("bandoli2");
    let b2 = document.getElementById("bando-a2");
    let c = document.getElementById("bandoli3");
    let c3 = document.getElementById("bando-a3");
    let d = document.getElementById("bandoli4");
    let d4 = document.getElementById("bando-a4");
    let aa = document.getElementById("contentLogo");
    let dd1 = document.getElementById("b1");
    let dd2= document.getElementById("b2");
    let dd3 = document.getElementById("b3");
    a.style.marginLeft = "0px";
    b.style.marginLeft = "0px";
    c.style.marginLeft = "0px";
    d.style.marginLeft = "0px";

    bando.style.height = "230px";


    a1.style.height = "92px";
    a1.style.width = "175px";
    a1.style.backgroundColor = "black";
    a1.style.color = "black"; 

    b2.style.height = "92px";
    b2.style.width = "175px";
    b2.style.backgroundColor = "black";
    b2.style.color = "black";

    c3.style.height = "92px";
    c3.style.width = "175px";
    c3.style.backgroundColor = "black";
    c3.style.color = "black";

    d4.style.height = "92px";
    d4.style.width = "175px";
    d4.style.backgroundColor = "black";
    d4.style.color = "black";
    
    aa.onclick = function() {
        console.log("START FUNCTION 'hover' ")
        a1.style.transition = "1s";
        b2.style.transition = "1s";
        c3.style.transition = "1s";
        d4.style.transition = "1s";
        aa.style.transition = "1s";
        dd1.style.transition = "1s";
        dd1.style.transition = "1s";
        dd1.style.transition = "1s";
        bando.style.transition = "1s";
        
        bando.style.backgroundColor ="#DECCCC";
        a1.style.backgroundColor = "#DECCCC";
        b2.style.backgroundColor = "#DECCCC";
        c3.style.backgroundColor = "#DECCCC";
        d4.style.backgroundColor = "#DECCCC";
        aa.style.backgroundColor = "#DECCCC";
        dd1.style.backgroundColor = "black";
        dd2.style.backgroundColor = "black";
        dd3.style.backgroundColor = "black";
        
        aa.onclick = function() {
            console.log("START FUNCTION 'counterHover' ")
            a1.style.transition = "1s";
            b2.style.transition = "1s";
            c3.style.transition = "1s";
            d4.style.transition = "1s";
            aa.style.transition = "1s";
            dd1.style.transition = "1s";
            dd1.style.transition = "1s";
            dd1.style.transition = "1s";
            
            bando.style.backgroundColor ="black";
            a1.style.backgroundColor = "black";
            b2.style.backgroundColor = "black";
            c3.style.backgroundColor = "black";
            d4.style.backgroundColor = "black";
            aa.style.backgroundColor = "black";
            dd1.style.backgroundColor = "white";
            dd2.style.backgroundColor = "white";
            dd3.style.backgroundColor = "white";
            aa.onclick = function() {
                console.log("START FUNCTION 're-hover' ")
                a1.style.transition = "1s";
                b2.style.transition = "1s";
                c3.style.transition = "1s";
                d4.style.transition = "1s";
                aa.style.transition = "1s";
                dd1.style.transition = "1s";
                dd1.style.transition = "1s";
                dd1.style.transition = "1s";
                
                bando.style.backgroundColor ="#DECCCC";
                a1.style.backgroundColor = "#DECCCC";
                b2.style.backgroundColor = "#DECCCC";
                c3.style.backgroundColor = "#DECCCC";
                d4.style.backgroundColor = "#DECCCC";
                aa.style.backgroundColor = "#DECCCC";
                dd1.style.backgroundColor = "black";
                dd2.style.backgroundColor = "black";
                dd3.style.backgroundColor = "black";
            }
        } 
    }


}
function resize2() {

}
