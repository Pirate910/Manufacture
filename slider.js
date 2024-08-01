


const furnitureSwiper = new Swiper('.swiper-furniture', {

  slidesPerView: 4,

  breakpoints: {

    840:{
      slidesPerView:2,
    },

    1080: {
      slidesPerView: 2,
    },  

    1220: {
      slidesPerView: 3,
    },

    1440: {
      slidesPerView: 4,
    },

  },

  loop: true,
  autoplay: {
    delay: 2000,
  },

  pagination: {
    el: '.swipper-furniture__pagination',
    type:'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

});


const swiperImage = document.querySelectorAll(".image-slide__image");
const swiperElButton = document.querySelectorAll(".swiper-el-button");
const swiperFurnitureWrapper = document.querySelector('.swiper-furniture')
console.log(swiperFurnitureWrapper)

swiperImage.forEach((swiperImage, index) => {
  swiperImage.addEventListener('click', (e) => {
    if (e.target) {
      swiperImage.classList.toggle("active");
    }

    setTimeout(() => {
      if (swiperImage.classList.contains('active')) {
        swiperElButton[index].classList.remove('none');
      } else {
        swiperElButton[index].classList.add('none');
      }
    }, 250);

  });
});

const swiperSlide = document.querySelector(".swiper-slide");

const masterSwiper = new Swiper('.swiper-master', {

  slidesPerView: 3,

  breakpoints:{
    840:{
      slidesPerView:2,
    },
    
    1080: {
      slidesPerView: 2,
    },  

    1220: {
      slidesPerView: 2,
    },

    1440: {
      slidesPerView: 3,
    },
  },  

  loop:true,
  autoplay:{
    delay:5000,
  },
  
  pagination: {
    el: '.swiper-master__pagination',
    type: 'bullets',
    clickable:true,
  },

  navigation: {
    nextEl: '.swiper-master-btn-next',
    prevEl: '.swiper-master-btn-prev',
  },

});


const environmentSwiper = new Swiper('.swiper-environment', {

  slidesPerView: 3,
  loop:true,
  autoplay:{
    delay:5000,
  },

  breakpoints:{
    840:{
      slidesPerView:2,
    },
    
    1080: {
      slidesPerView: 2,
    },  

    1220: {
      slidesPerView: 2,
    },

    1440: {
      slidesPerView: 3,
    },
  },  

  
  pagination: {
    el: '.swiper-environment__pagination',
    type: 'bullets',
    clickable:true,
  },

  navigation: {
    nextEl: '.swiper-environment-btn-next',
    prevEl: '.swiper-environment-btn-prev',
  },

});
// function checkButtonVisibility(swiperImage, swiperElButton) {
//   if (swiperImage.classList.contains('active')) {
//     swiperElButton.classList.remove('none');
//   } else {
//     swiperElButton.classList.add('none');
//   }
// }

// console.log(swiperElButton);
// console.log(swiperImage);

// checkButtonVisibility(swiperImage, swiperElButton);



// function defaultSwiperImg(){
//   swiperImage.classList.remove('active')
// }

// window.addEventListener('click', (e)=>{
//   if(e.target == swiperImage){
//     defaultSwiperImg();
//   }
// })