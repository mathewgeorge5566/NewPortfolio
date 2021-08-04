
/* About Tabs   */
 const tabsContainer = document.querySelector(".about-tabs"),
   aboutSection = document.querySelector(".about-section");

  tabsContainer.addEventListener("click",(e) =>{ 
  if(e.target.classList.contains("tab-item")&& !e.target.classList.contains("active")){
  tabsContainer.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
  const target=e.target.getAttribute("data-target");
  aboutSection.querySelector(".tab-content.active").classList.remove("active");
  aboutSection.querySelector(target).classList.add("active");
  }
}); 
/* toggle navbar*/
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () =>{
    console.log("hi");
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
}
/*active section */
document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
         
         navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() =>{
           document.querySelector("section.active").classList.remove("active","fade-out");
           document.querySelector(e.target.hash).classList.add("active");
           window.scrollTo(0,0)
           navToggler.classList.remove("hide");
           
        },500);
    }

});