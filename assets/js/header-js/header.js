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
const four = document.getElementById('para-four');

// Initialize two with starting position
if (header) {
  header.style.overflow = 'hidden';
  header.style.overflowY = 'scroll';
}

if (two) {
  two.style.bottom = '-30em';
}

if (four) {
  four.style.opacity = '0';
}

document.addEventListener('scroll', () => {
  const scroll = window.scrollY;

  // Spin element four when scroll is past 500px
  if (four) {
    if (scroll >= 100 && scroll < 800) {
      four.style.opacity = '1';
      const rotation = (scroll - 100) * (360 / 700); // 360deg across 700px (100-800)
      four.style.transform = `rotate(${rotation}deg)`;
    } else if (scroll >= 800) {
      four.style.transform = `rotateY(360deg)`; // Stop at 360 degrees
      four.style.opacity = '0'; // if it reaches 800
    }
  }
});
// if (four) {
//   if (scrollPosition >= 70) {
//     four.style.opacity = '1';
//     four.style.transform = `rotate(0deg)`;
//   } else {
//     four.style.opacity = '0';
//   }

//   if (scrollPosition >= 500) {
//     // four.style.transform = `rotate(45deg)`;
//     // four.style.transform = `rotate3d(1, 1, 1, 360deg)`;
//     four.style.transform = `rotateY(180deg)`;
//     four.style.transition = '1s ease-in-out';
//   }

//   if (scrollPosition > 750) {
//     four.style.opacity = '0';
//   }
// }

////////////////////// PARALLAX SCROLLING WITH TIMING ANG DURATION //////////////////////

// const containerSpin = [
//   { transform: 'rotate(0) scale(1)' },
//   { transform: 'rotate(180deg) scale(1.1)' },
// ];

// const containerTiming = {
//   duration: 2000, // 2s
//   iteration: 1,
// };

// const companyDescription = document.querySelector('.company-description');

// companyDescription.addEventListener('scroll', () => {
//   companyDescription.animate(containerSpin, containerTiming);
// });
