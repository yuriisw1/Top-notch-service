let ready = (callback) => {
   if (document.readyState != "loading") callback();
   else document.addEventListener("DOMContentLoaded", callback);
}

//--Aдаптив-дроподаунов-на телефоны
let isMobile = {
   Android: function () { return navigator.userAgent.match(/Android/i); },
   BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
   iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
   Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
   Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
   any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
   body.classList.add('touch');
   let arrow = document.querySelectorAll('.arrow');
   for (i = 0; i < arrow.length; i++) {
      let thisLink = arrow[i].previousElementSibling;
      let subMenu = arrow[i].nextElementSibling;
      let thisArrow = arrow[i];

      thisLink.classList.add('parent');
      arrow[i].addEventListener('click', function () {
         subMenu.classList.toggle('open');
         thisArrow.classList.toggle('active');
      });
   }

} else {
   body.classList.add('mouse');
}

var lazyLoadInstance = new LazyLoad({
   elements_selector: ".lazy"
   // ... more custom settings?
});

ready(() => {
   //-----MENU-----//
   jQuery(document).ready(function () {
      jQuery('.topbar__burger').click(function (event) {
         jQuery('.topbar__burger,.topbar__body').toggleClass('active');
         jQuery('body').toggleClass('lock');
      });
   });

   //--magific-popup-video--//
   jQuery(document).ready(function () {
      jQuery('.popup-youtube').magnificPopup({
         disableOn: 700,
         type: 'iframe',
         mainClass: 'mfp-fade',
         removalDelay: 160,
         preloader: false,
         fixedContentPos: false
      });
   });



   //IBG
   jQuery(document)[0].querySelectorAll(".ibg").forEach(el => {
      if (el.querySelector('img')) {
         el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
         el.querySelector('img').style.display = 'none';
      }
   });

   //accordion
   jQuery(document).ready(function () {
      jQuery('.pull-up').click(function (event) {
         if (jQuery('.section').hasClass('one')) {
            jQuery('.pull-up').not(jQuery(this)).removeClass('.active');
            jQuery('.toolbar__list').not(jQuery(this).next()).slideUp(300);
         }
         jQuery(this).toggleClass('active').next().slideToggle(300);
      });
   });
});