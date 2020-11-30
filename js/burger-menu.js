const burgerMenuButton = document.getElementsByClassName('header__burger-menu')[0];
const openMenuIcon = document.getElementsByClassName('header__open-icon')[0];
const closeMenuIcon = document.getElementsByClassName('header__close-icon')[0];
const menu = document.getElementsByClassName('header__menu-items')[0];

openMenuIcon.style.display = 'inline';
closeMenuIcon.style.display = 'none';

burgerMenuButton.addEventListener('click', function () {
    this.classList.toggle('change');
    if (openMenuIcon.style.display === 'inline') {
        openMenuIcon.style.display = 'none';

        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        menu.className = 'header__menu-items header__menu-items-mobile';

        closeMenuIcon.style.display = 'inline';
    } else {
        closeMenuIcon.style.display = 'none';

        document.getElementsByTagName('body')[0].style.overflow = 'auto';
        menu.className = 'header__menu-items';

        openMenuIcon.style.display = 'inline';
    }
})

document.querySelectorAll('li[class="header__menu-item"]')
    .forEach((menuItem) => {
        menuItem.addEventListener('click',  function (event) {
            if (window.innerWidth <= 900) {
                closeMenuIcon.style.display = 'none';

                document.getElementsByTagName('body')[0].style.overflow = 'auto';
                menu.className += menu.className.split(' ')[0];

                openMenuIcon.style.display = 'inline';
            }
        });
    });
