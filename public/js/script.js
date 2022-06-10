let element = document.querySelector('input[type="checkbox"]');
console.log(element)
console.log("element")


function toggleDarkMode(){
    var element = document.body;
    element.classList.toggle("dark-mode")
}

element.addEventListener("click", toggleDarkMode);