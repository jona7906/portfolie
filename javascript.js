document.querySelector("#nav_indledning").addEventListener("mousedown", visSection);

function visSection() {
    console.log("vis section");
    document.querySelector("#portfolie_indledning").classList.add("vis_section");
}
