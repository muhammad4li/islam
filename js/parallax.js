window.addEventListener("scroll", function(event) {
    const obj = document.getElementById("centered");
    obj.style.backgroundPositionY = this.scrollY * 0.7 + "px";

});
