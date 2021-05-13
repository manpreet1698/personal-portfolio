const navSlider = () => {
    const hamburger = document.querySelector('.burger');
    const navbar = document.querySelector('.nav');
    const links = document.querySelectorAll('.nav a.home-style');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('nav-active');
        links.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            }
            else{
                link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        
        hamburger.classList.toggle('toggle');
        links.forEach.toggle('hide-menu');
    });

}
const  toTop = document.querySelector('.to-top');
window.addEventListener("scroll", () =>{
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})
navSlider();

function submitForm() {
    // Get the first form with the name
    // Usually the form name is not repeated
    // but duplicate names are possible in HTML
    // Therefore to work around the issue, enforce the correct index
    var frm = document.getElementsByName('simple-contact-form')[0];
    frm.submit(); // Submit the form
    frm.reset();  // Reset all form data
    return false; // Prevent page refresh
 }