function openMenu() {
    var div = document.getElementById("drop-down");
    if (div.style.display !== "none") {
        div.style.display = "none";
    } else {
        div.style.display = "block";
    }
}

window.onload = function(){
    var closeDiv = document.getElementById("drop-down");
    var overlay = document.getElementById("body");
    document.onclick = function(e){
        if(e.target.id == "body"){
            closeDiv.style.display = "none";
        }
    };
};