var Ghost = document.getElementById("GhostButton");
Ghost.onclick = function() {
    var SearchString = document.getElementById("GhostText").value;
    window.open("https://www.google.com/search?q=haunted-places-in-" + SearchString);
}

var Footer = document.getElementById("footer");
Footer.onclick = function() {
    window.open("https://www.linkedin.com/in/jahnaviprasad/");
}