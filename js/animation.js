const ANCHOR_SELECTOR = 'a[href^=\"#\"]';
const ANCHOR_ATTRIBUTE = 'href';
const EVENT_TYPE = 'click';
const SCROLL_BEHAVIOR = 'smooth';

/**
 * Smooth scrolling
*/
document.querySelectorAll(ANCHOR_SELECTOR)
        .forEach((anchor) => {
            anchor.addEventListener(EVENT_TYPE,  function (event) {
                event.preventDefault();

                document.querySelector(this.getAttribute(ANCHOR_ATTRIBUTE)).scrollIntoView({
                    behavior: SCROLL_BEHAVIOR,
                });
            });
        });

