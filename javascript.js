//tilføj eventlistener til burger menu
/*document.querySelector("burger_menu").addEventListener("click", startSide)

function startSide() {
    window.
}*/

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
