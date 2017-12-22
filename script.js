window.addEventListener("load", function () {

var headerElt = document.getElementById('header-elt');
var titleHeaderElt = document.getElementById('title-header-elt');
var otherTitles = document.querySelectorAll('h1');
var whiteSquareHeaderElt = document.getElementById('white-title-header-elt');
var bambooStrawsWhiteContainer = document.getElementById('the-bamboo-straws-white-square');
var bambooPara = document.querySelector('.the-bamboo-title-container p:nth-child(2)');
var bambooCards = document.querySelectorAll('.the-bamboo-straws .card-container .card');
var purchaseButton = document.querySelector('.purchase a');
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
var footerImg = document.querySelector('footer div .logo');
var footerButton = document.querySelector('footer .superjoli-button');
var footerBorder = document.querySelectorAll('footer .superjoli-button .border-button');
var footerBackground = document.querySelector('footer .superjoli-button span:last-child');
var formElt = document.querySelector('form');
var labelElt = document.querySelector('#label-submit');
var documentElt = /(MSIE 10)|(Edge\/\d.)|(MSIE 9)|(rv:11.0)/i.test(navigator.userAgent)  ? document.body : document.documentElement;

if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {documentElt = document.body;}
if(!(window.ActiveXObject) && "ActiveXObject" in window) {documentElt = document.documentElement;}

if(!(window.ActiveXObject) && "ActiveXObject" in window) {
  headerElt.className += ' animated fadeIn';
} else {
  headerElt.classList.add('animated', 'fadeIn');
}


    if (window.matchMedia("(min-width: 749px)").matches) {
        purchaseBackground.style.opacity = 0;
        footerBackground.style.opacity = 0;
    }

    setTimeout(function() {
      if(!(window.ActiveXObject) && "ActiveXObject" in window) {
        titleHeaderElt.className += ' animated fadeIn';
      } else {
        titleHeaderElt.classList.add('animated', 'fadeIn');
      }
    }, 270);

    if (window.matchMedia("(max-width: 750px)").matches) {
        footerBackground.textContent = "Conception: SUPERJOLI.COM";
    }

    labelElt.addEventListener('click', function() {
        formElt.submit();
    });

    if (window.matchMedia("(min-width: 750px)").matches) {
        window.addEventListener('scroll', function () {
          if(!(window.ActiveXObject) && "ActiveXObject" in window) {
            whiteSquareHeaderElt.className += ' animated fadeInUp';
          } else {
            whiteSquareHeaderElt.classList.add('animated', 'fadeInUp');
          }

            if (Number(documentElt.scrollTop) >= 600) {
                console.log('bonjour2');
                showOnScrollElt(otherTitles[1], 500, 'titleAnime');
                setTimeout(showOnScrollElt, 50, bambooPara, 700, 'afterLeftIn');
            }

            if (documentElt.scrollTop >= 700) {
                setTimeout(function () {
                    bambooPara.classList.remove('afterLeftIn');
                    bambooPara.classList.add('afterRightOut');
                }, 1000)
            }

            showOnScrollElt(bambooStrawsWhiteContainer, 875, 'scaleSquare');

            if (documentElt.scrollTop >= 1250) {
                for (var i = 0; i < bambooCards.length; i++) {
                    var addTime = i * 250;
                    setTimeout(showOnScrollElt, addTime, bambooCards[i], 980, 'fadeInUp');
                }
            }

            if (documentElt.scrollTop >= 1650) {
                showOnScrollElt(purchaseBorder[1], 1050, 'fadeInDownFadeOut');
                showOnScrollElt(purchaseBorder[3], 1050, 'fadeInUpFadeOut');
                setTimeout(showOnScrollElt, 200, purchaseBorder[0], 1050, 'fadeInRightFadeOut');
                setTimeout(showOnScrollElt, 200, purchaseBorder[2], 1050, 'fadeInLeftFadeOut');
                setTimeout(function () {
                    purchaseBackground.style.opacity = 1;
                }, 700);
                setTimeout(function () {
                    purchaseButton.classList.add('shadow');
                }, 650);
            }

            showOnScrollElt(otherTitles[2], 2500, 'titleAnime');
            showOnScrollElt(changeWhiteSquare, 2750, 'scaleSquare');

            if (documentElt.scrollTop >= 3100) {
                for (var i = 0; i < changeCards.length; i++) {
                    var addTime = i * 250;
                    setTimeout(showOnScrollElt, addTime, changeCards[i], 3100, 'fadeInUp');
                }
            }

            showOnScrollElt(otherTitles[3], 3800, 'titleAnime');

            showOnScrollElt(useBambooSquare, 4250, 'scaleSquare');

            if (documentElt.scrollTop >= 4250) {
                for (var i = 0; i < useBambooCards.length; i++) {
                    var addTime = i * 250;
                    setTimeout(showOnScrollElt, addTime, useBambooCards[i], 4050, 'fadeInUp');
                }
            }

            if (documentElt.scrollTop >= 4650) {
                showOnScrollElt(useBambooSquare2, 4580, 'fadeIn')
                for (var i = 0; i < useBambooCards2.length; i++) {
                    var addTime = i * 250;
                    setTimeout(showOnScrollElt, addTime, useBambooCards2[i], 4780, 'fadeInUp');
                }
            }

            showOnScrollElt(otherTitles[4], 5240, 'titleAnime');

            showOnScrollElt(otherTitles[4], 5240, 'titleAnime');
            if (documentElt.scrollTop >= 5240) {
                setTimeout(showOnScrollElt, 300, aboutSquare, 5240, 'fadeIn');
            }

            if (documentElt.scrollTop >= 5240) {
                for (var i = 0; i < aboutP.length; i++) {
                    var addTime = i * 150;
                    setTimeout(showOnScrollElt, 100 + addTime, aboutImg[i], 4780, 'fadeIn');
                    setTimeout(showOnScrollElt, 300 + addTime, aboutH2[i], 4780, 'fadeIn');
                    setTimeout(showOnScrollElt, 500 + addTime, aboutP[i], 4780, 'fadeIn');
                }
            }

            if (documentElt.scrollTop >= 6440) {
                showOnScrollElt(otherTitles[5], 6440, 'titleAnime');
                setTimeout(showOnScrollElt, 600, contactUl, 6440, 'fadeIn');
            }

            if (documentElt.scrollTop >= 7040) {
                showOnScrollElt(otherTitles[6], 7040, 'titleAnime');
                setTimeout(showOnScrollElt, 600, newletterP, 7040, 'fadeIn');
                setTimeout(showOnScrollElt, 800, newletterForm, 7040, 'fadeIn');
            }

            if (documentElt.scrollTop >= 7840) {
                showOnScrollElt(otherTitles[7], 7840, 'titleAnime');
                for (var i = 0; i < footerLi.length; i++) {
                    var addTime = i * 150;
                    setTimeout(showOnScrollElt, 150 + addTime, footerLi[i], 7840, 'fadeIn');
                }
                setTimeout(showOnScrollElt, 600, footerImg, 7840, 'fadeIn');

                showOnScrollElt(footerBorder[1], 7840, 'fadeInDownFadeOut');
                showOnScrollElt(footerBorder[3], 7840, 'fadeInUpFadeOut');
                setTimeout(showOnScrollElt, 200, footerBorder[0], 7840, 'fadeInRightFadeOut');
                setTimeout(showOnScrollElt, 200, footerBorder[2], 7840, 'fadeInLeftFadeOut');
                setTimeout(function () {
                    footerBackground.style.opacity = 1;
                }, 700);
                setTimeout(function () {
                    footerButton.classList.add('shadow');
                }, 650);
            }
        });
    }

    purchaseButton.addEventListener('click', function(e) {
       e.preventDefault();
       document.querySelector('.pop-up').classList.add('active');
       document.querySelector('.pop-up').style.pointerEvents = 'auto';
    });

    document.querySelector('.pop-up').addEventListener('click', function(e) {
        document.querySelector('.pop-up').classList.remove('active');
        document.querySelector('.pop-up').style.pointerEvents = 'none';
    });

function showOnScrollElt(elt, startAnimPosition, anim) {
    if(documentElt.scrollTop >= startAnimPosition ) {
        if(!(window.ActiveXObject) && "ActiveXObject" in window) {
          elt.className += ' animated ' + anim + " ";
        } else {
          elt.classList.add('animated', anim);
        }
    }
}
});
