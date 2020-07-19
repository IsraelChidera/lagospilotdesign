var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

function openSlideMenu() {
        document.getElementById('side-menu').style.width = '250px';
        // document.getElementById('main').style.margin = '150px';
    }

function closeSlideMenu() {
        document.getElementById('side-menu').style.width = '0';
        // document.getElementById('main').style.margin = 'auto';
    }
