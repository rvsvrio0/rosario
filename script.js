const discBtn = document.querySelector('.disc-container');

discBtn.addEventListener('click', function() {
    // 1. Trigger the download
    const link = document.createElement('a');
    link.href = 'images01/Bella_Kali.mp3'; // Path to your file
    link.download = 'Bella_Kali.mp3'; // Desired file name
    link.click();

    // 2. You can add extra logic here!
    console.log("Download started :3");
    // Example: alert("Thanks for downloading!");
});