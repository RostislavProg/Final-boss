$(document).ready(function () {
    $('.autoplay').slick({
      slidesToShow: 3, 
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      swipe: false,
      dots: true,
      prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><img src="img/mini icons/Arrow.png" alt="arrow"></button>',
      nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><img src="img/mini icons/rArrow.png" alt="arrow"></button>',
      responsive: [
        {
          breakpoint: 1200, // размер экрана 1024
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 992, // размер экрана 1024
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });

const clickSpace = document.querySelectorAll('.clickSpace'),
      selectCardis = document.querySelectorAll('.oneCard');

clickSpace.forEach((e, i) => {
    e.addEventListener('click', ()=>{
        clickSpace.forEach(elemnt => elemnt.id='');
        selectCardis.forEach(elemnt => elemnt.style.border = '2px solid #DDDDDD');
        e.id = 'clickedBtn';
        selectCardis[i].style.border = '2px solid #F53855';
    });
});


