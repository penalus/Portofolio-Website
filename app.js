function dropDown() {
    document.getElementById("dropDownContent").classList.toggle("show");
}    

window.onclick = function(a) {
    if(!a.target.matches('.dropbtn')) {
        var dropDown = document.getElementById("dropDown");
        if(dropDown.classList.contains('show')) {
            dropDown.classList.remove("show");
        }
    }
}