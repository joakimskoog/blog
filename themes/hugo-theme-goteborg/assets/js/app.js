document.addEventListener('DOMContentLoaded', function(event) {
    var flag = 0;

    let menuToggle = document.querySelector('.menu-button');
    let menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function(event) {
        event.preventDefault();

        if(flag == 0) {
            menuToggle.classList.add('active');
            menu.classList.add('visible');
            flag = 1;
        }
        else {
            menuToggle.classList.remove('active');
            menu.classList.remove('visible');
            flag = 0;
        }
    });
});