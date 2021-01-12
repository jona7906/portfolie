document.getElementById("tryk_mig").addEventListener("mousedown", visOmmig);


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
