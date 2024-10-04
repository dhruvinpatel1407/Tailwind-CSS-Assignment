 console.log('hello world!!!')
 //  Simple JavaScript for Toggle Button
 const menuBtn = document.getElementById('menu-btn');
 const mobileMenu = document.getElementById('mobile-menu');

 menuBtn.addEventListener('click', () => {
   mobileMenu.classList.toggle('hidden');
 });
 
 // JavaScript for Carousel
 const carousel = document.querySelector('#carousel .flex');
   const dots = document.querySelectorAll('button[id^="dot"]');
   let currentIndex = 0;
 
   // Function to update slide and active dot
   function goToSlide(index) {
     carousel.style.transform = `translateX(-${index * 100}%)`;
     dots.forEach(dot => dot.classList.remove('bg-lime-600'));
     dots[index].classList.add('bg-lime-600');
     currentIndex = index;
   }
 
   // Add event listeners to each dot
   dots.forEach((dot, index) => {
     dot.addEventListener('click', () => goToSlide(index));
   });
