var projectCard = document.querySelector(".card");
var introSubtitle = document.querySelector(".intro-subtitle")

var dataText = "An aspiring software developer."

function typeWriter() {
        var dataTextArray = dataText.split("");
        dataTextArray.forEach(setTimeout(function(letter) {
           introSubtitle.textContent += letter
        }), 2000) 

    

};

//typeWriter();




$(window).scroll(function() {
    $('.progress').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+800) {
            $(this).addClass("stretchRight");
        }
    });
});