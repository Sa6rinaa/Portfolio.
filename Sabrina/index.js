
function typeWriter(element, text, speed) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);  
    }
  }
  type();
}


document.addEventListener("DOMContentLoaded", function () {
  const titreElement = document.querySelector(".Titre");
  const textToType = "Développeur Full-Stack";  
  const typingSpeed = 100;  


  typeWriter(titreElement, textToType, typingSpeed);
});


const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel-slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let currentIndex = 0;
  let autoScroll;
  const delay = 3000; 

  function moveToSlide(index) {
    carousel.style.transition = "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s";
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  function startAutoScroll() {
    autoScroll = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      moveToSlide(currentIndex);
    }, delay);
  }

  function stopAutoScroll() {
    clearInterval(autoScroll);
  }

  prevButton.addEventListener('click', () => {
    stopAutoScroll();
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(currentIndex);
    startAutoScroll();
  });

  nextButton.addEventListener('click', () => {
    stopAutoScroll();
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(currentIndex);
    startAutoScroll();
  });

  const descriptions = [
   ["Description du projet 1, partie 1", "Description du projet 1, partie 2"],
   ["Description du projet 2, partie 1", "Description du projet 2, partie 2"],
   ["Description , partie 1", "Description  partie 2"],
 ];
 

 slides.forEach((slide, index) => {
 
 
   const descButton = document.createElement('button');
   descButton.className = 'toggle-desc';
   descButton.textContent = '+';
   slide.appendChild(descButton);
 

   const descDiv = document.createElement('div');
   descDiv.className = 'description';
   descDiv.textContent = `Projet Portfolio en js `;
   slide.appendChild(descDiv);
 

   let isDescVisible = false;
   descButton.addEventListener('click', () => {
     isDescVisible = !isDescVisible;
     descDiv.style.display = isDescVisible ? 'block' : 'none';
     if (isDescVisible) stopAutoScroll();
     else startAutoScroll();
   });
 });
  startAutoScroll();