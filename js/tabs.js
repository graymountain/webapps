function openCity(evt, cityName) {
    
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //If already opened tab is clicked again
    if (evt.currentTarget.className.indexOf(" active") !== -1) {
        evt.currentTarget.className = evt.currentTarget.className.replace(" active", "");
        evt.currentTarget.blur();
        window.focus();
        return;
    }
    
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

/*
function clickBody(evt) {
    
    var i, activetab, tabcontent, className;

    //if clicked on tabs or tabcontent
    if (hasSomeParentTheClass(evt.srcElement, "tabcontent")) {
        return;
    }
    if (hasSomeParentTheClass(evt.srcElement, "tablinks")) {
        return;
    }

    //if clicked outside
    className = evt.srcElement.className;
    if (className.indexOf("tablinks") === -1 && className.indexOf("tabcontent") === -1) {
        activetab = document.getElementsByClassName(" active");
        if (activetab && activetab.length) {
            activetab[0].className = activetab[0].className.replace(" active", "");
        }
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
    }

}

function hasSomeParentTheClass(element, classname) {
    if (element.className && element.className.split(' ').indexOf(classname)>=0) return true;
    return element.parentNode && hasSomeParentTheClass(element.parentNode, classname);
}*/