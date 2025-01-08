//Header toggle
 
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e) {
   document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})



// Typing Effect 

let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer !','UI Designer'],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 2000,
    loop : true,
})

// Active Link State On Scroll

// Get All Links
let navlinks =  document.querySelectorAll('nav lrli a')
// Get All SSections
let section = document.querySelectorAll('sections')

window.addEventListener('scroll', function (){
    const scrollPos = window.scrolly + 20
    sections.forEach(section => {
        if (scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navlinks.forEach(link => {
                link.classList.remove("active");
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active')
                }
            });
        }
    });
});