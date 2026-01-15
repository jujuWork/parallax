// On click dropdown and image animation

function toggleDropdown(event, dropdownId) {
  event.preventDefault();
  const dropdown = document.getElementById(dropdownId);
  const button = event.currentTarget; //get the click <a>
  const arrow = button.querySelector('.drop-arr'); //get the span inside

  dropdown.classList.toggle('show');
  arrow.classList.toggle('active'); /// Toggle the active class on the span
}

// Closing the dropdown menu if users click outside
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn') && !event.target.closest('.dropbtn')) {
    let dropdowns = document.getElementsByClassName('dropdown-content');
    let arrows = document.getElementsByClassName('drop-arr'); // get all arrow span

    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      // if the dropdown is open, close it bt removing the show class
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }

    for (let i = 0; i < arrows.length; i++) {
      arrows[i].classList.remove('active');
    }
  }
};

////////////////////// PARALLAX SCROLLING //////////////////////

const header = document.querySelector('header');
const one = document.getElementById('para-one');
const two = document.getElementById('para-two');
const three = document.getElementById('para-three');

// document.addEventListener('scroll', () => {
//   let value = window.scrollY;
//   console.log(value);

//   header.style.overflow = 'hidden';
//   two.style.bottom = -0.1 * value + 'px';
// });

// Initialize two with starting position
if (header) {
  header.style.overflow = 'hidden';
  header.style.overflowY = 'scroll';
}

if (two) {
  two.style.bottom = '-30em';
}

document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  // console.log(scrollPosition);

  if (two) {
    const initialPosition = -480; // -30em in pixels
    const newBottomPosition = initialPosition + scrollPosition;
    two.style.bottom = '1 * `${newBottomPosition}px`';
  }

  // if (three) {
  //   three.style.bottom = -1 * scrollPosition + 'px';
  //   three.style.position = 'fixed';
  // }
});
// Uncomment below when ready to animate para-three
// if (three) {
//   const triggerPoint = 480; // Start after para-two finishes
//   const adjustedScroll = scrollPosition - triggerPoint;
//
//   if (adjustedScroll > 0) {
//     const newBottomPosition = triggerPoint - adjustedScroll;
//     three.style.bottom = `${newBottomPosition}px`;
//   } else {
//     three.style.position = 'absolute';
//     three.style.bottom = '10em';
//   }
// }
// });
