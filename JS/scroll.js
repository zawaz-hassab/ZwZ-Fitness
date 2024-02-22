


window.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.box');
    
    boxes.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3; // Adjust as needed
        
        if (boxPosition < screenPosition) {
            box.classList.add('fade-in');
        } else {
            box.classList.remove('fade-in');
        }
    });
});



window.addEventListener('scroll', function() {
    const boxes = document.querySelectorAll('.classes .container .box');
    const screenPosition = window.innerHeight / 1.3; // Adjust as needed
    
    boxes.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        
        if (boxPosition < screenPosition) {
            box.classList.add('scroll-animation');
        } else {
            box.classList.remove('scroll-animation');
        }
    });
});

 






document.addEventListener("DOMContentLoaded", function() {
    var elements = document.querySelectorAll('.animate-on-scroll');
  
    function checkViewport() {
      for (var i = 0; i < elements.length; i++) {
        var position = elements[i].getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        if (position < windowHeight * 0.75) {
          elements[i].classList.add('active');
        }
      }
    }
  
    window.addEventListener('scroll', function() {
      checkViewport();
    });
  
    // Initial check when the page loads
    checkViewport();
  });















// start change





document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll('.custom-animate');

  function checkInView() {
      elements.forEach(function(element) {
          var bounding = element.getBoundingClientRect();
          if (
              bounding.top >= 0 &&
              bounding.left >= 0 &&
              bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
              bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          ) {
              element.classList.add('active');
          } else {
              element.classList.remove('active');
          }
      });
  }

  checkInView();

  window.addEventListener('scroll', function() {
      checkInView();
  });
});






// footer


document.addEventListener("DOMContentLoaded", function() {
  var elements = document.querySelectorAll('.animate-move');

  function checkInView() {
      elements.forEach(function(element) {
          var bounding = element.getBoundingClientRect();
          if (
              bounding.top >= 0 &&
              bounding.left >= 0 &&
              bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
              bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
          ) {
              element.classList.add('active');
          } else {
              element.classList.remove('active');
          }
      });
  }

  function scrollAnimationLoop() {
      checkInView();
      requestAnimationFrame(scrollAnimationLoop);
  }

  scrollAnimationLoop();
});








document.getElementById('next').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
}
