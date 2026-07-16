const song = document.getElementById('homesong');
const discBtn = document.querySelector('.disc-container');
const discImg = document.querySelector('.discimage');

if (discBtn && song && discImg) {
  discBtn.addEventListener('click', function(event) {
    event.preventDefault();

    if (song.paused) {
      song.play();
      discImg.style.animationPlayState = 'running';
    } else {
      song.pause();
      discImg.style.animationPlayState = 'paused';
    }
  });

  discBtn.addEventListener('dblclick', function() {
    const link = document.createElement('a');
    link.href = 'images01/Bella_Kali.mp3';
    link.download = 'Bella_Kali.mp3';
    link.click();
    console.log('Download started :3');
  });
}
