// :::::::::::::::::::::::::::::::::::::
// Search query on Pretekla dela page
// :::::::::::::::::::::::::::::::::::::

const projectGridNav = document.querySelector("#previous-work")

projectGridNav.addEventListener("click", (event)=> {
    if (event.target.id === "all-categories") {
        console.log("Pritisnil si gumb za vse skupaj");
    } 
    else if (event.target.id === "all-categories") {
        console.log("Pritisnil si gumb za development");
    }
    else if (event.target.id === "web-dev-category") {
        console.log("Pritisnil si gumb za web dev");
    }
    else if (event.target.id === "ui-ux-category") {
        console.log("Pritisnil si gumb za UI / UX");
    }
    else if (event.target.id === "branding-category") {
        console.log("Pritisnil si gumb za branding");
    }
})


console.log(projectGridNav);

// • Creates an array for every category of portfolio post
// • Store them in an array
// • Add the possibility of adding and removing classes to specific item in array

