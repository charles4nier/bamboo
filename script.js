var headerElt = document.getElementById('header-elt');
var titleHeaderElt = document.getElementById('title-header-elt');
var whiteSquareHeaderElt = document.getElementById('white-title-header-elt');
var bambooStrawsWhiteContainer = document.getElementById('the-bamboo-straws-white-square');
var bambooTitle = document.getElementById('bamboo-title');
var bambooPara = document.querySelector('.the-bamboo-title-container p:nth-child(2)');
var bambooCards = document.querySelectorAll('.the-bamboo-straws .card-container .card');
var changeCards = document.querySelectorAll('.the-change .card-container .card');
var documentElt = document.documentElement;


window.addEventListener("load", function () {
    headerElt.classList.add('animated', 'fadeIn');
    setTimeout(function() {
        titleHeaderElt.classList.add('animated', 'fadeIn');
    }, 270);
});

window.addEventListener('scroll', function() {
    whiteSquareHeaderElt.classList.add('animated', 'fadeInUp')
    if(documentElt.scrollTop >= 600) {
        showOnScrollElt(bambooTitle, documentElt.scrollTop, 500,'titleAnime');
        setTimeout(showOnScrollElt, 50, bambooPara, documentElt.scrollTop, 700, 'afterLeftIn');

    }

    if(documentElt.scrollTop >= 700) {
        setTimeout(function() {
            bambooPara.classList.remove('afterLeftIn');
            bambooPara.classList.add('afterRightOut');
        }, 1000)
    }

    showOnScrollElt(bambooStrawsWhiteContainer, documentElt.scrollTop, 875, 'scaleSquare');



    if(documentElt.scrollTop >= 950) {
        for(var i = 0; i < bambooCards.length; i++ ) {
            var addTime = i * 150;
            setTimeout(showOnScrollElt, addTime, bambooCards[i], documentElt.scrollTop, 980, 'fadeInUp');
        }
    }

    if(documentElt.scrollTop >= 2900) {
        for(var i = 0; i < changeCards.length; i++ ) {
            var addTime = i * 150;
            setTimeout(showOnScrollElt, addTime, changeCards[i], documentElt.scrollTop, 2900, 'fadeInUp');
        }
    }

    console.log(documentElt.scrollTop);
});

function showOnScrollElt(elt, scrollPosition, startAnimPosition, anim) {
    if(scrollPosition >= startAnimPosition ) {
        elt.classList.add('animated', anim);
    }
}

