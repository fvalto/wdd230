document.addEventListener('DOMContentLoaded', function() {
    let today = new Date();
    let dayOfWeek = today.getDay();

    const meetBanner = document.getElementById('meet-banner');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('close-banner');

    closeButton.addEventListener('click', () => {
        meetBanner.classList.remove('active');
        overlay.classList.remove('active');
    });

    if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3) {
        meetBanner.classList.add('active');
        overlay.classList.add('active');
    } else {
        meetBanner.classList.remove('active');
        overlay.classList.remove('active');
    }    
});
