
const scrollItems = document.getElementsByClassName('todays-picks-scroll-item');
const active = document.querySelector('.active')[0];

for (var i = 0; i < scrollItems.length; i++) {
    scrollItems[i].addEventListener('mouseup', function() {
      // Remove the "active" class from all divs
      for (var j = 0; j < scrollItems.length; j++) {
        scrollItems[j].classList.remove('active');
      }
      // Add the "active" class to the clicked div
      this.classList.add('active');
      filter(this.getAttribute('value'))
    });
  }


const scrollLists = document.getElementsByClassName('todays-picks-cards-scroll');

const filter = (number) =>{

  for (var i = 0; i < scrollLists.length; i++) {
    scrollLists[i].classList.remove('active-scroll');
    console.log('index', i);
  }
  scrollLists[number].classList.add('active-scroll');
}
