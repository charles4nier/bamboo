var headerElt = document.getElementById('header-elt');
var titleHeaderElt = document.getElementById('title-header-elt');
var otherTitles = document.querySelectorAll('h1');
var whiteSquareHeaderElt = document.getElementById('white-title-header-elt');
var bambooStrawsWhiteContainer = document.getElementById('the-bamboo-straws-white-square');
var bambooPara = document.querySelector('.the-bamboo-title-container p:nth-child(2)');
var bambooCards = document.querySelectorAll('.the-bamboo-straws .card-container .card');
var purchaseA = document.querySelector('.purchase a');
var purchaseBorder = document.querySelectorAll('.purchase a .border-button');
var purchaseBackground = document.querySelector('.purchase a span:last-child');
var changeWhiteSquare = document.querySelector('.the-change .the-change-title-container p');
var changeCards = document.querySelectorAll('.the-change .card-container .card');
var useBambooSquare = document.querySelector('.use-of-bamboo-straws .photo-container-1 div');
var useBambooCards = document.querySelectorAll('.use-of-bamboo-straws .photo-container-1 img');
var useBambooSquare2 = document.querySelector('.use-of-bamboo-straws .photo-container-2 div');
var useBambooCards2 = document.querySelectorAll('.use-of-bamboo-straws .photo-container-2 img');
var aboutSquare = document.querySelector('.about-us .white-container div');
var aboutH2 = document.querySelectorAll('.about-us ul li h2');
var aboutImg = document.querySelectorAll('.about-us ul li img');
var aboutP = document.querySelectorAll('.about-us ul li p');
var contactUl = document.querySelector('.contact-us ul');
var newletterP = document.querySelector(".newsletter p");
var newletterForm = document.querySelector(".newsletter form");
var footerLi = document.querySelectorAll('footer div ul li');
var footer = document.querySelector("footer");
var documentElt = document.documentElement;


window.addEventListener("load", function () {
    headerElt.classList.add('animated', 'fadeIn');
    purchaseBackground.style.opacity = 0;
    setTimeout(function() {
        titleHeaderElt.classList.add('animated', 'fadeIn');
    }, 270);
});

window.addEventListener('scroll', function() {
    whiteSquareHeaderElt.classList.add('animated', 'fadeInUp');

    showEl(otherTitles[1], 'titleAnime');
    showEl(bambooPara, 'afterLeftIn');


    if(documentElt.scrollTop >= 700) {
        setTimeout(function() {
            bambooPara.classList.remove('afterLeftIn');
            bambooPara.classList.add('afterRightOut');
        }, 1000)
    }

    showEl(bambooStrawsWhiteContainer, 'scaleSquare');



    for(var i = 0; i < bambooCards.length; i++ ) {
        var addTime = i * 150;
        setTimeout(showEl, addTime, bambooCards[i], 'fadeInUp', 1000);
    }


    showEl(purchaseBorder[1], 'fadeInDownFadeOut');
    showEl(purchaseBorder[3], 'fadeInUpFadeOut');

    setTimeout(showEl, 50, purchaseBorder[0], 'fadeInRightFadeOut');
    setTimeout(showEl, 100, purchaseBorder[2], 'fadeInLeftFadeOut');
    setTimeout(function() {
        purchaseBackground.style.opacity = 1;
        purchaseA.classList.add('shadow');
    }, 500);


    showEl(otherTitles[2], 'titleAnime');
    showEl(changeWhiteSquare, 'scaleSquare');

    if(documentElt.scrollTop >= 2900) {
        for(var i = 0; i < changeCards.length; i++ ) {
            var addTime = i * 150;
            setTimeout(showEl, addTime, changeCards[i], 'fadeInUp', 900);
        }
    }

    showEl(otherTitles[3], 'titleAnime');

    showEl(useBambooSquare, 'scaleSquare');

    if(documentElt.scrollTop >= 4250) {
        for(var i = 0; i < useBambooCards.length; i++ ) {
            var addTime = i * 150;
            setTimeout(showEl, addTime, useBambooCards[i], 'fadeInUp');
        }
    }

    if(documentElt.scrollTop >= 4450) {
        showEl(useBambooSquare2, 'fadeIn')
        for(var i = 0; i < useBambooCards2.length; i++ ) {
            var addTime = i * 150;
            setTimeout(showEl, addTime, useBambooCards2[i], 'fadeInUp');
        }
    }

    showEl(otherTitles[4], 'titleAnime');

    if(documentElt.scrollTop >= 5240) {
        setTimeout(showEl, 300, aboutSquare, 'fadeIn');
    }

    if(documentElt.scrollTop >= 5240) {
        for(var i = 0; i < aboutP.length; i++ ) {
            var addTime = i * 150;
            setTimeout(showEl, 100 + addTime, aboutImg[i], 'fadeIn');
            setTimeout(showEl, 300 + addTime, aboutH2[i], 'fadeIn');
            setTimeout(showEl, 500 + addTime, aboutP[i], 'fadeIn');
        }
    }

    if(documentElt.scrollTop >= 6440) {
        showEl(otherTitles[5], 'titleAnime');
        setTimeout(showEl, 600, contactUl, 'fadeIn');
    }

    if(documentElt.scrollTop >= 7040) {
        showEl(otherTitles[6], 'titleAnime');
        setTimeout(showEl, 600, newletterP, 'fadeIn');
        setTimeout(showEl, 800, newletterForm, 'fadeIn');
    }

    if(documentElt.scrollTop >= footer.offsetTop - 650) {
        showEl(otherTitles[7], 'titleAnime', 1500);
        for(var i = 0; i < footerLi.length; i++ ) {
            var addTime = i * 150;
            setTimeout(showEl, 150 + addTime, footerLi[i], 'fadeIn', 1500);
        }
    }
    console.log(documentElt.scrollTop);
});

function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return  rect.top + scrollTop;
}

function showEl(elt, anim, addDistance) {
    var dist = addDistance || 0;
    var elPosition = offset(elt) - 650;
    if(documentElt.scrollTop >= elPosition - dist) {
        elt.classList.add('animated', anim);
    }
}
