// :::::::::::::::::::::::::::::::::::::
// Search query on Pretekla dela page
// :::::::::::::::::::::::::::::::::::::
let konceptTest = document.querySelector("#web-dev-category");


function removeToggledCategor() {
    // Function that removes toggled categoryes
    let theToggledCategory = document.querySelector(".toggled-category")
    theToggledCategory.classList.remove("toggled-category")
}

// Search query
const projectGridNav = document.querySelector("#previous-work")

projectGridNav.addEventListener("click", (event)=> {
    if (event.target.id === "all-categories") {
        removeToggledCategor()
        event.target.classList.add("toggled-category")
        console.log("Pritisnil si gumb za vse skupaj");
    } 
    else if (event.target.id === "all-categories") {
        removeToggledCategor()
        event.target.classList.add("toggled-category")
        console.log("Pritisnil si gumb za development");
    }
    else if (event.target.id === "web-dev-category") {
        removeToggledCategor()
        event.target.classList.add("toggled-category")
        console.log("Pritisnil si gumb za web dev");
    }
    else if (event.target.id === "ui-ux-category") {
        removeToggledCategor()
        event.target.classList.add("toggled-category")
        console.log("Pritisnil si gumb za UI / UX");
    }
    else if (event.target.id === "branding-category") {
        removeToggledCategor()
        event.target.classList.add("toggled-category")
        console.log("Pritisnil si gumb za branding");
    }

})



// • Remove toggled class from every element

// • Creates an array for every category of portfolio post
// • Store them in an array
// • Add the possibility of adding and removing classes to specific item in array

