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
  // console.log(scroll);
  console.log(scroll);

  if (three) {
    if (scroll > 120) {
      three.style.display = 'none';
    }
  }

  // Spin element four when scroll is past 100px
  if (four) {
    if (scroll < 70) {
      four.style.opacity = '0';
      four.style.transform = `rotateX(0deg)`; // Reset rotation when scrolling up past 100px
    } else if (scroll >= 70 && scroll <= 800) {
      four.style.opacity = '1';
      const rotation = (scroll - 70) * (360 / 800); // 360deg across 800px (100-900)
      four.style.transform = `rotateX(${rotation}deg)`;
    } else if (scroll > 500 && scroll < 1000) {
      four.style.transform = `rotateX(360deg) translateZ(${rotation}2px)`; // Stop at 360 degrees
      four.style.position = 'fixed';
    } else if (scroll >= 1300) {
      four.style.display = 'none';
    }
  }
});
