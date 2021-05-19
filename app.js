
// wrapping the JS in window.onload so the JS will be ran once the page/window opens
window.onload = function(){
    //navigation bar slide
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('nav-links');
    
        burger.addEventListener('click',()=>{
            nav.classList.toggle('nav-active');
        });
    
    }
    navSlide();
    
    //display date
    var dt = new Date();
    document.getElementById("datetime").innerHTML = dt.toLocaleDateString();
    
    //variable pass type
    document.getElementById("hab_type").innerHTML = localStorage.getItem("selectvalue");
    
    //variable pass title
    document.getElementById("hab_title").innerHTML = localStorage.getItem("textvalue");
    
    //variable pass duration end
    document.getElementById("hab_num").innerHTML = localStorage.getItem("numvalue");
    
    //variable pass consistency (custom)
    document.getElementById("hab_date").innerHTML = localStorage.getItem("datevalue");



}

