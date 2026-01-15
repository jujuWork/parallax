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

// Initialize two with starting position
if (two) {
  two.style.bottom = '-30em';
}

// Initialize three with starting position
if (three) {
  three.style.bottom = '30em';
  // three.style.position = 'fixed';
}

document.addEventListener('scroll', () => {
  let value = window.scrollY;
  // console.log(value);

  if (two) {
    // Start at -30em (in pixels: -480px assuming 1em = 16px) and move to 0
    let bottomValue = -480 + value * 1;
    two.style.bottom = 1 * bottomValue + 'px';
  }

  if (three) {
    // Start moving after para-two finishes (at 480px scroll)
    let adjustedValue = value - 480;
    if (adjustedValue > 0) {
      let bottomValue = 80 - adjustedValue * 1;
      three.style.bottom = bottomValue + 'px';
    } else {
      // three.style.position = 'absolute';
      three.style.bottom = '5em';
    }
  }
});
