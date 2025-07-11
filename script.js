const container = document.querySelector('.turkanbuttoncontainer');
const image = container.querySelector('.turkanbutton');

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const deltaX = (x - centerX) / centerX;
  const deltaY = (y - centerY) / centerY;
  
  const rotateX = deltaY * 10; // adjust intensity
  const rotateY = deltaX * 10; // adjust intensity

  image.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
});

container.addEventListener('mouseleave', () => {
  image.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
});
