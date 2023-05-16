function generateLinks() {
    var textInput = document.getElementById("textInput").value;
    var roundCount = document.getElementById("roundCount").value;
    var regex = /page%22%3A[0-9]+%7D/;
    
    if (regex.test(textInput)) {
        for (var i = 0; i <= roundCount - 1; i++) {
            var link = textInput.replace(regex, "page%22%3A" + i + "%7D");
            // add link to page
            var node = document.createElement("LI");
            var textnode = document.createTextNode(link);
            node.appendChild(textnode);
            document.getElementById("links").appendChild(node);
        }
        document.getElementById("copyButton").style.display = "block";
        document.getElementById("refreshButton").style.display = "inline-block";
    } else {
        // handle invalid input
        document.getElementById("bottom-left").style.opacity = "1";
    }
}

function copyLinks() {
    let linksList = Array.from(document.querySelectorAll('#links li')).map(el => el.textContent).join('\n');
    navigator.clipboard.writeText(linksList);
}
