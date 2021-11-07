console.log("Helo every one!")

// ::::::::::::::::::::::::::::::
// Header disappear on scroll
// ::::::::::::::::::::::::::::::

document.addEventListener("DOMContentLoaded", ()=> {
    let el_autohide = document.querySelector(".mg-autohide");

    if (el_autohide) {
        var last_scroll_top = 0;
        window.addEventListener("scroll", ()=> {
            let scroll_top = window.scrollY;
            if (scroll_top < last_scroll_top) {
                el_autohide.classList.remove("scrolled-dowm");
                el_autohide.classList.add("scrolled-up");
            }
            else {
                el_autohide.classList.remove("scrolled-up");
                el_autohide.classList.add("scrolled-down");
            }
            last_scroll_top = scroll_top;
        });
    }
});