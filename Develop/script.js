var projectCard = document.querySelector(".card");
var introSubtitle = document.querySelector(".intro-subtitle")

var dataText = "An aspiring software developer."

function typeWriter() {
    for (var i=0; i<dataText.length; i++) {
        if (i<dataText.length) {
            introSubtitle.textContent += dataText[i]
    }

}

}

//typeWriter();

