document.title = "Kinga Kot | Portfolio";

/*SCROLLING TO SPECIFIC PAGE SECTION*/
const about = document.querySelector("#about");
about.addEventListener("click", () => {
    const aboutMeHeading = document.querySelector(".aboutme-heading");
    aboutMeHeading.scrollIntoView({behavior:"smooth"});
});

const projects = document.querySelector("#projects");
projects.addEventListener("click", () => {
    const projectsHeading = document.querySelector(".projects-heading");
    projectsHeading.scrollIntoView({behavior:"smooth"});
});

const skills = document.querySelector("#skills");
skills.addEventListener("click", () => {
    const skillsHeading = document.querySelector(".skills-heading");
    skillsHeading.scrollIntoView({behavior:"smooth"});
});


/*VIDEO IN MOTION WHILE HOVERED ON*/
const video = document.querySelectorAll("video");

for (let i = 0; i < video.length; i++){
    video[i].addEventListener("mouseenter",
        function (element) {
        video[i].play()
        })
        video[i].addEventListener("mouseout",
        function (element) {
        video[i].pause()
        })
}


/* HAMBURGER MENU mobile*/
const hamburgerOpen = document.querySelector(".fa-bars");
const hamburgerClose = document.querySelector(".fa-times");
const navMobile = document.querySelector(".nav-container");


function hamburgerMenuOpen() {
    navMobile.style.display = "flex";
    hamburgerClose.style.display = "inline-block";
    hamburgerOpen.style.display = "none";
};

function hamburgerMenuClose() {
    navMobile.style.display = "none";
    hamburgerClose.style.display = "none";
    hamburgerOpen.style.display = "inline-block";
};

hamburgerOpen.addEventListener("click", hamburgerMenuOpen);
hamburgerClose.addEventListener("click", hamburgerMenuClose);