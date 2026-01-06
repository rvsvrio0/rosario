const discBtn = document.querySelector('.disc-container');

discBtn.addEventListener('dblclick', function() {
 
    const link = document.createElement('a');
    link.href = 'images01/Bella_Kali.mp3'; 
    link.download = 'Bella_Kali.mp3';
    link.click();

  
    console.log("Download started :3");
    
});
