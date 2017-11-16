var headerElt = document.getElementById('header-elt');
var titleHeaderElt = document.getElementById('title-header-elt');
var otherTitles = document.querySelectorAll('h1');
var whiteSquareHeaderElt = document.getElementById('white-title-header-elt');
var bambooStrawsWhiteContainer = document.getElementById('the-bamboo-straws-white-square');
var bambooPara = document.querySelector('.the-bamboo-title-container p:nth-child(2)');
var bambooCards = document.querySelectorAll('.the-bamboo-straws .card-container .card');
var changeWhiteSquare = document.querySelector('.the-change .the-change-title-container p');
var changeCards = document.querySelectorAll('.the-change .card-container .card');
var useBambooSquare = document.querySelector('.use-of-bamboo-straws .photo-container-1 div');
var useBambooCards = document.querySelectorAll('.use-of-bamboo-straws .photo-container-1 img');
var useBambooSquare2 = document.querySelector('.use-of-bamboo-straws .photo-container-2 div');
var useBambooCards2 = document.querySelectorAll('.use-of-bamboo-straws .photo-container-2 img');
var aboutSquare = document.querySelector('.about-us div');
var aboutH2 = document.querySelectorAll('.about-us ul li h2');
var aboutImg = document.querySelectorAll('.about-us ul li img');
var aboutP = document.querySelectorAll('.about-us ul li p');
var contactUl = document.querySelector('.contact-us ul');
var newletterP = document.querySelector(".newsletter p");
var newletterForm = document.querySelector(".newsletter form");
var footerLi = document.querySelectorAll('footer div ul li');
var footerImg = document.querySelector("footer .logo");
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
        showOnScrollElt(otherTitles[1], documentElt.scrollTop, 500,'titleAnime');
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

    showOnScrollElt(otherTitles[2], documentElt.scrollTop, 2500, 'titleAnime');
    showOnScrollElt(changeWhiteSquare, documentElt.scrollTop, 2750, 'scaleSquare');

    if(documentElt.scrollTop >= 2900) {
        for(var i = 0; i < changeCards.length; i++ ) {
            var addTime = i * 150;
            setTimeout(showOnScrollElt, addTime, changeCards[i], documentElt.scrollTop, 3100, 'fadeInUp');
        }
    }

    showOnScrollElt(otherTitles[3], documentElt.scrollTop, 3800, 'titleAnime');

    showOnScrollElt(useBambooSquare, documentElt.scrollTop, 4250, 'scaleSquare');

    if(documentElt.scrollTop >= 4250) {
        for(var i = 0; i < useBambooCards.length; i++ ) {
            var addTime = i * 150;
            setTimeout(showOnScrollElt, addTime, useBambooCards[i], documentElt.scrollTop, 4050, 'fadeInUp');
        }
    }

    if(documentElt.scrollTop >= 4450) {
        showOnScrollElt(useBambooSquare2, documentElt.scrollTop, 4580, 'fadeIn')
        for(var i = 0; i < useBambooCards2.length; i++ ) {
            var addTime = i * 150;
            setTimeout(showOnScrollElt, addTime, useBambooCards2[i], documentElt.scrollTop, 4780, 'fadeInUp');
        }
    }

    showOnScrollElt(otherTitles[4], documentElt.scrollTop, 5240, 'titleAnime');

    showOnScrollElt(otherTitles[4], documentElt.scrollTop, 5240, 'titleAnime');
    if(documentElt.scrollTop >= 5240) {
        setTimeout(showOnScrollElt, 300, aboutSquare, documentElt.scrollTop, 5240, 'fadeIn');
    }

    if(documentElt.scrollTop >= 5640) {
        for(var i = 0; i < aboutP.length; i++ ) {
            var addTime = i * 150;
            setTimeout(showOnScrollElt, 100 + addTime, aboutImg[i], documentElt.scrollTop, 4780, 'fadeIn');
            setTimeout(showOnScrollElt, 300 + addTime, aboutH2[i], documentElt.scrollTop, 4780, 'fadeIn');
            setTimeout(showOnScrollElt, 500 + addTime, aboutP[i], documentElt.scrollTop, 4780, 'fadeIn');
        }
    }

    if(documentElt.scrollTop >= 6440) {
        showOnScrollElt(otherTitles[5], documentElt.scrollTop, 6440, 'titleAnime');
        setTimeout(showOnScrollElt, 600, contactUl, documentElt.scrollTop, 6440, 'fadeIn');
    }

    if(documentElt.scrollTop >= 7040) {
        showOnScrollElt(otherTitles[6], documentElt.scrollTop, 7040, 'titleAnime');
        setTimeout(showOnScrollElt, 600, newletterP, documentElt.scrollTop, 7040, 'fadeIn');
        setTimeout(showOnScrollElt, 800, newletterForm, documentElt.scrollTop, 7040, 'fadeIn');
    }

    if(documentElt.scrollTop >= 7840) {
        showOnScrollElt(otherTitles[7], documentElt.scrollTop, 7840, 'titleAnime');
        for(var i = 0; i < footerLi.length; i++ ) {
            var addTime = i * 150;
            setTimeout(showOnScrollElt, 150 + addTime, footerLi[i], documentElt.scrollTop, 7840, 'fadeIn');
        }
        setTimeout(showOnScrollElt, 600, footerImg, documentElt.scrollTop, 7840, 'fadeIn');
    }





    console.log(documentElt.scrollTop);
});






function showOnScrollElt(elt, scrollPosition, startAnimPosition, anim) {
    if(scrollPosition >= startAnimPosition ) {
        elt.classList.add('animated', anim);
    }
}

