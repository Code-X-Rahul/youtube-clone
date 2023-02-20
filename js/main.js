const hamburger = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar");
const searchBtn = document.querySelector(".search-button-mobile_only");
const backBtn = document.querySelector(".back");
const mobileSearch = document.querySelector(".hidden");


hamburger.addEventListener('click', function () {
    sidebar.classList.toggle("hidden-sidebar-class");
    document.body.classList.toggle("body");
})


const toggle = () => {
    mobileSearch.classList.toggle("mobile-search-bar-div");
}
searchBtn.addEventListener('click', toggle);
backBtn.addEventListener('click', toggle);


