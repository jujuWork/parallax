const header = document.querySelector('header');
const subBg = document.querySelector('.sub-bg');

header.addEventListener('scroll', () => {
  const scrolled = header.scrollTop;
  const maxScroll = header.scrollHeight - header.clientHeight;
  const scrollPercent = scrolled / maxScroll;

  // Move from -20em to 0
  const moveDistance = -20 + scrollPercent * 20;
  subBg.style.bottom = `${moveDistance}em`;
});
