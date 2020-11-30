let currentCardsCount = 0;

const cards = document.getElementsByClassName('team__card-item');
const dots = document.getElementsByClassName('team__slider')[0];

/**
 * New dot element
 */
const dot = (index) => `<div class="team__slide" onclick="changeSlides(${index})"></div>`;

/**
 * Add slide dots
 */
function addSliderDots() {
    const screenWidth = window.innerWidth;
    dots.innerHTML = '';

    if (screenWidth < 777) {
        selectSmallCardSize();
    } else if (screenWidth < 1157) {
        selectMediumCardSize();
    } else {
        selectBigCardSize();
    }
}

/**
 * Set the mobile size for cards
 */
function selectSmallCardSize() {
    currentCardsCount = 1;

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = (i === 0) ? 'flex' : 'none';
    }

    addDotsToSlider(cards.length);
}

/**
 * Set the tablet size for cards
 */
function selectMediumCardSize() {
    currentCardsCount = 2;

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = (i === 0 || i === 1) ? 'flex' : 'none';
    }

    addDotsToSlider(Math.ceil(cards.length / currentCardsCount));
}

/**
 * Set the desktop size for cards
 */
function selectBigCardSize() {
    currentCardsCount = 3;

    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = (i === 0 || i === 1 || i === 2) ? 'flex' : 'none';
    }

    addDotsToSlider(Math.ceil(cards.length / currentCardsCount));
}

/**
 * Add new dots under slides
 * @param cardsCount
 */
function addDotsToSlider(cardsCount) {
    for (let i = 0; i < cardsCount; i++) {
        dots.innerHTML += dot(i);
    }
}

/**
 * Change the displayed slides
 * @param indexOfDot
 */
function changeSlides(indexOfDot) {

    changeDotColor(indexOfDot);

    for (let i = 0; i < cards.length; i++) {
        if (currentCardsCount === 1) {
            cards[i].style.display = (i === indexOfDot) ? 'flex' : 'none';
        } else if (currentCardsCount === 2) {
            cards[i].style.display = (i === (indexOfDot * currentCardsCount)
                || i === (indexOfDot * currentCardsCount + 1)) ? 'flex' : 'none';
        } else if (currentCardsCount === 3) {
            cards[i].style.display = (i === (indexOfDot * currentCardsCount)
                || i === (indexOfDot * currentCardsCount + 1)
                || i === (indexOfDot * currentCardsCount + 2)) ? 'flex' : 'none';
        }
    }
}

/**
 * Change the selected dot color
 * @param indexOfDot
 */
function changeDotColor(indexOfDot) {
    const dots = document.getElementsByClassName('team__slide');

    for (let i = 0; i < dots.length; i++) {
        if (i === indexOfDot) {
            dots[i].style.backgroundColor = '#3949ab'
        } else {
            dots[i].style.backgroundColor = '#00897b'
        }
    }
}

/**
 * Set count of slide dots
 * when open the page
 */
addSliderDots();

/**
 * Screen resizing event
 */
window.addEventListener('resize', addSliderDots);

/**
 * Screen rotation event
 */
window.addEventListener('orientationchange', addSliderDots);
