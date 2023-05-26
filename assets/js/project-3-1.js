// // Function addClass() -  Start
// function addClass() {
//     let section = document.getElementsByClassName('section');
//     let sectionBox = document.getElementsByClassName('section-content-box');
//     let mobNav = document.getElementsByClassName('navbar-collapse')[0];
//     mobNav.className = "navbar-collapse justify-content-end collapse";
//     for (let i = 0; i <= section.length; i++) {
//         section[i].className = "section fade-in";
//         sectionBox[i].className = "section-content-box zoom";
//         // Remove
//         setTimeout(removeClass, 3000);
//         function removeClass() {
//             section[i].className = "section";
//             sectionBox[i].className = "section-content-box";
//         }
//     } // For loop - End
// } // Function addClass() - End

// Scroll to show logo
function showHide() {
    if (document.documentElement.scrollTop > 150) {
        navLogo.className = "rounded-circle fade-in";
    } else {
        navLogo.className = "rounded-circle nav-logo nav-logo-hide";
    }
};
