let scrollItems = document.querySelectorAll('.todays-picks-scroll-item');
let active = document.querySelector('.active')[0];

for (var i = 0; i < scrollItems.length; i++) {
    scrollItems[i].addEventListener('mouseup', function() {
      // Remove the "active" class from all divs
      for (var j = 0; j < scrollItems.length; j++) {
        scrollItems[j].classList.remove('active');
      }
      // Add the "active" class to the clicked div
      this.classList.add('active');
      console.log('yes')
    });
  }