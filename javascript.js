//tilføj eventlistener til burger menu
/*document.querySelector("burger_menu").addEventListener("click", startSide)

function startSide() {
    window.
}*/


let currentView;
let nextView;
let previousView;

currentView = 1; //nuværrende billede
newView = 0; //næste billede



//skjuler alle billeder

document.querySelector("#billede2").classList.add("skjul_billede");
document.querySelector("#billede3").classList.add("skjul_billede");
document.querySelector("#billede4").classList.add("skjul_billede");
document.querySelector("#billede5").classList.add("skjul_billede");


//tilføj eventlistener til knapper: næste/tidligere
document.querySelector("#next_button").addEventListener("click", nextPicture);

document.querySelector("#previous_button").addEventListener("click", previousPicture);

//næste billede
function nextPicture() {

    //fjern eventlistener fra næste knap
    document.querySelector("#next_button").removeEventListener("click", nextPicture);

    if (currentView < 5) {
        console.log("hvis nuværrende er under 8: + 1");
        newView = currentView + 1;
    }

    if (currentView == 5) {
        console.log("hvis 8, næste billed er 1");
        newView = 1;
    }
    if (currentView > 5) {
        console.log("hvis over 8, billed er 1");
        currentView = 1;
    }
    if (currentView == 0) {
        console.log("hvis 0, er nuværende 8");
        currentView = 5;
    }
    //consol log
    console.log("næste billede" + " billedet før: " + currentView + " nye billede: " + newView);

    document.querySelector("#billede" + newView).classList.remove("skjul_billede");

    document.querySelector("#billede" + newView).classList.add("vis_billede");

    document.querySelector("#billede" + currentView).classList.add("skjul_billede");

    document.querySelector("#billede" + currentView).classList.remove("vis_billede");

    currentView++;
    newView++;

    document.querySelector("#next_button").addEventListener("click", nextPicture);
}


function previousPicture() {
    //fjern eventlistener
    document.querySelector("#previous_button").removeEventListener("click", previousPicture);

    if (currentView > 1) {
        console.log(" ");
        newView = currentView - 1;

    }

    if (currentView == 1) {
        console.log("if current is 1, new is 8");
        newView = 5;
    }

    if (currentView == 0) {
        console.log("if current is 0, current is 8");
        currentView = 5;
    }
    if (currentView > 5) {
        console.log("if curent is more than 8, current is 1");
        currentView = 1;
    }


    console.log("prev image function" + " image before was: " + currentView + " new image is: " + newView);

    document.querySelector("#billede" + newView).classList.remove("skjul_billede");

    document.querySelector("#billede" + newView).classList.add("vis_billede");

    document.querySelector("#billede" + currentView).classList.add("skjul_billede");

    document.querySelector("#billede" + currentView).classList.remove("vis_billede");

    newView--;

    currentView--;

    //tilføj  eventlistener igen
    document.querySelector("#previous_button").addEventListener("click", previousPicture);

}



document.querySelector("#indledning_galleri_web").addEventListener("mousedown", visWeb);

document.querySelector("#indledning_galleri_ux").addEventListener("mousedown", visUx);

document.querySelector("#indledning_galleri_animation").addEventListener("mousedown", visAnimation);

document.querySelector("#indledning_galleri_indhold").addEventListener("mousedown", visIndhold);

//burger_menu links


document.querySelector("#nav_indledning").addEventListener("mousedown", visIndledning);


function visIndledning() {
    console.log("vis indledning");

    //skift baggrundsbilled
    document.getElementById("header_baggrund").src = 'images/aarhus_fiskeholdet.jpg';

    //skjul alle andre sektioner
    document.querySelector("#portfolie_web").classList.remove("vis_section");
    document.querySelector("#portfolie_ux").classList.remove("vis_section");
    document.querySelector("#portfolie_indhold").classList.remove("vis_section");
    document.querySelector("#portfolie_animation").classList.remove("vis_section");

    document.querySelector("#portfolie_web").classList.add("hide_section");
    document.querySelector("#portfolie_ux").classList.add("hide_section");
    document.querySelector("#portfolie_indhold").classList.add("hide_section");
    document.querySelector("#portfolie_animation").classList.add("hide_section");


    //Vis indledning
    //Fjern hide
    document.querySelector("#portfolie_indledning").classList.add("vis_section");
    document.querySelector("#portfolie_indledning").classList.remove("hide_section");
}



document.querySelector("#nav_web").addEventListener("mousedown", visWeb);


function visWeb() {
    console.log("vis web");
    // skift tema billed


    document.getElementById("header_baggrund").src = 'images/frontpage_web_01.JPG';

    //skjul alle andre sektioner
    document.querySelector("#portfolie_indledning").classList.remove("vis_section");
    document.querySelector("#portfolie_ux").classList.remove("vis_section");
    document.querySelector("#portfolie_indhold").classList.remove("vis_section");
    document.querySelector("#portfolie_animation").classList.remove("vis_section");

    document.querySelector("#portfolie_indledning").classList.add("hide_section");
    document.querySelector("#portfolie_ux").classList.add("hide_section");
    document.querySelector("#portfolie_indhold").classList.add("hide_section");
    document.querySelector("#portfolie_animation").classList.add("hide_section");
    //Vis indledning
    //Fjern hide
    document.querySelector("#portfolie_web").classList.add("vis_section");
    document.querySelector("#portfolie_web").classList.remove("hide_section");
}


document.querySelector("#nav_ux").addEventListener("mousedown", visUx);


function visUx() {
    console.log("vis ux");

    //skjul alle andre sektioner
    document.querySelector("#portfolie_indledning").classList.remove("vis_section");
    document.querySelector("#portfolie_web").classList.remove("vis_section");
    document.querySelector("#portfolie_indhold").classList.remove("vis_section");
    document.querySelector("#portfolie_animation").classList.remove("vis_section");

    document.querySelector("#portfolie_indledning").classList.add("hide_section");
    document.querySelector("#portfolie_web").classList.add("hide_section");
    document.querySelector("#portfolie_indhold").classList.add("hide_section");
    document.querySelector("#portfolie_animation").classList.add("hide_section");
    //Vis indledning
    //Fjern hide
    document.querySelector("#portfolie_ux").classList.add("vis_section");
    document.querySelector("#portfolie_ux").classList.remove("hide_section");
}

document.querySelector("#nav_animation").addEventListener("mousedown", visAnimation);


function visAnimation() {
    console.log("vis animation");

    //skjul alle andre sektioner
    document.querySelector("#portfolie_indledning").classList.remove("vis_section");
    document.querySelector("#portfolie_web").classList.remove("vis_section");
    document.querySelector("#portfolie_indhold").classList.remove("vis_section");
    document.querySelector("#portfolie_ux").classList.remove("vis_section");

    document.querySelector("#portfolie_indledning").classList.add("hide_section");
    document.querySelector("#portfolie_web").classList.add("hide_section");
    document.querySelector("#portfolie_indhold").classList.add("hide_section");
    document.querySelector("#portfolie_ux").classList.add("hide_section");
    //Vis indledning
    //Fjern hide
    document.querySelector("#portfolie_animation").classList.add("vis_section");
    document.querySelector("#portfolie_animation").classList.remove("hide_section");
}


document.querySelector("#nav_indhold").addEventListener("mousedown", visIndhold);


function visIndhold() {
    console.log("vis indhold");

    //skjul alle andre sektioner
    document.querySelector("#portfolie_indledning").classList.remove("vis_section");
    document.querySelector("#portfolie_web").classList.remove("vis_section");
    document.querySelector("#portfolie_animation").classList.remove("vis_section");
    document.querySelector("#portfolie_ux").classList.remove("vis_section");

    document.querySelector("#portfolie_indledning").classList.add("hide_section");
    document.querySelector("#portfolie_web").classList.add("hide_section");
    document.querySelector("#portfolie_animation").classList.add("hide_section");
    document.querySelector("#portfolie_ux").classList.add("hide_section");
    //Vis indledning
    //Fjern hide
    document.querySelector("#portfolie_indhold").classList.add("vis_section");
    document.querySelector("#portfolie_indhold").classList.remove("hide_section");
}



/*document.getElementById("tryk_mig").addEventListener("mousedown", visOmmig);*/


function visOmmig() {
    console.log("vis om mig");

    document.getElementById("header_baggrund").src = 'images/fiskeholdet_oroe_01.JPG';
    //skjul alle andre sektioner
    document.querySelector("#mig_cv").classList.remove("vis_section");

    document.querySelector("#mig_cv").classList.add("hide_section");

    //Vis indledning
    //Fjern hide
    document.querySelector("#mig_om").classList.add("vis_section");
    document.querySelector("#mig_om").classList.remove("hide_section");
}

/*document.querySelector("#nav_cv").addEventListener("mousedown", visOmcv);*/


function visOmcv() {
    console.log("vis om cv");

    //skjul alle andre sektioner
    document.querySelector("#mig_om").classList.remove("vis_section");

    document.querySelector("#mig_om").classList.add("hide_section");

    //Vis indledning
    //Fjern hide
    document.querySelector("#mig_cv").classList.add("vis_section");
    document.querySelector("#mig_cv").classList.remove("hide_section");
}


document.querySelector("#nav_indledning_02").addEventListener("mousedown", visIndledning);
document.querySelector("#nav_web_02").addEventListener("mousedown", visWeb);
document.querySelector("#nav_ux_02").addEventListener("mousedown", visUx);

document.querySelector("#nav_animation_02").addEventListener("mousedown", visAnimation);


document.querySelector("#nav_indhold_02").addEventListener("mousedown", visIndhold);

document.querySelector(".menu_mobil").addEventListener("mousedown", showBurger)

function showBurger() {

    document.querySelector("#nav_burger_menu").style.display = "block";
    document.querySelector(".menu_mobil").removeEventListener("mousedown", showBurger);
    document.querySelector(".menu_mobil").addEventListener("mousedown", hideBurger);
}

function hideBurger() {

    document.querySelector("#nav_burger_menu").style.display = "none";
    document.querySelector(".menu_mobil").removeEventListener("mouseodown", hideBurger);
    document.querySelector(".menu_mobil").addEventListener("mousedown", showBurger);
}
