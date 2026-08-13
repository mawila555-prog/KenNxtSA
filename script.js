/* =========================================================
   KEN NXT SA
   WEBSITE JAVASCRIPT
========================================================= */

"use strict";


/* =========================================================
   ELEMENTS
========================================================= */

const siteHeader =
    document.getElementById("siteHeader");

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");

const bookingForm =
    document.getElementById("bookingForm");

const backToTop =
    document.getElementById("backToTop");

const yearElement =
    document.getElementById("year");

const dateInput =
    document.getElementById("date");


/* =========================================================
   CURRENT YEAR
========================================================= */

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

function updateHeader() {

    if (!siteHeader) {
        return;
    }

    if (window.scrollY > 30) {

        siteHeader.classList.add(
            "scrolled"
        );

    } else {

        siteHeader.classList.remove(
            "scrolled"
        );

    }

}

window.addEventListener(
    "scroll",
    updateHeader,
    {
        passive: true
    }
);

updateHeader();


/* =========================================================
   MOBILE MENU
========================================================= */

function openMenu() {

    if (!menuToggle || !nav) {
        return;
    }

    menuToggle.classList.add(
        "active"
    );

    nav.classList.add(
        "active"
    );

    document.body.classList.add(
        "menu-open"
    );

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Close navigation"
    );

}


function closeMenu() {

    if (!menuToggle || !nav) {
        return;
    }

    menuToggle.classList.remove(
        "active"
    );

    nav.classList.remove(
        "active"
    );

    document.body.classList.remove(
        "menu-open"
    );

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Open navigation"
    );

}


function toggleMenu() {

    if (!nav) {
        return;
    }

    const menuIsOpen =
        nav.classList.contains(
            "active"
        );

    if (menuIsOpen) {

        closeMenu();

    } else {

        openMenu();

    }

}


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        toggleMenu
    );

}


/* =========================================================
   CLOSE MOBILE MENU WHEN NAVIGATION LINK IS SELECTED
========================================================= */

if (nav) {

    const navLinks =
        nav.querySelectorAll("a");


    navLinks.forEach(
        (link) => {

            link.addEventListener(
                "click",
                closeMenu
            );

        }
    );

}


/* =========================================================
   CLOSE MENU WITH ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            nav &&
            nav.classList.contains("active")
        ) {

            closeMenu();

        }

    }
);


/* =========================================================
   CLOSE MOBILE MENU WHEN RESIZING TO DESKTOP
========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 850 &&
            nav &&
            nav.classList.contains("active")
        ) {

            closeMenu();

        }

    }
);


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    (event) => {

        if (
            !nav ||
            !menuToggle ||
            !nav.classList.contains("active")
        ) {

            return;

        }


        const clickedInsideNav =
            nav.contains(event.target);

        const clickedMenuButton =
            menuToggle.contains(event.target);


        if (
            !clickedInsideNav &&
            !clickedMenuButton
        ) {

            closeMenu();

        }

    }
);


/* =========================================================
   SMOOTH INTERNAL LINK SCROLLING
========================================================= */

const internalLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


internalLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            function (event) {

                const targetID =
                    this.getAttribute(
                        "href"
                    );


                if (
                    !targetID ||
                    targetID === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetID
                    );


                if (!target) {

                    return;

                }


                event.preventDefault();


                const headerOffset =
                    siteHeader
                        ? siteHeader.offsetHeight + 15
                        : 90;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerOffset;


                window.scrollTo({

                    top:
                        targetPosition,

                    behavior:
                        "smooth"

                });

            }
        );

    }
);


/* =========================================================
   SET MINIMUM BOOKING DATE TO TODAY
========================================================= */

if (dateInput) {

    const now =
        new Date();


    const year =
        now.getFullYear();


    const month =
        String(
            now.getMonth() + 1
        ).padStart(
            2,
            "0"
        );


    const day =
        String(
            now.getDate()
        ).padStart(
            2,
            "0"
        );


    const today =
        `${year}-${month}-${day}`;


    dateInput.setAttribute(
        "min",
        today
    );

}


/* =========================================================
   BOOKING FORM
   SEND ENQUIRY DIRECTLY TO WHATSAPP
========================================================= */

if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* ---------------------------------------------
               FORM VALUES
            --------------------------------------------- */

            const name =
                document
                    .getElementById("name")
                    ?.value
                    .trim() || "";


            const eventType =
                document
                    .getElementById("eventType")
                    ?.value || "";


            const eventDate =
                document
                    .getElementById("date")
                    ?.value || "";


            const guests =
                document
                    .getElementById("guests")
                    ?.value
                    .trim() || "";


            const location =
                document
                    .getElementById("location")
                    ?.value
                    .trim() || "";


            const message =
                document
                    .getElementById("message")
                    ?.value
                    .trim() || "";


            /* ---------------------------------------------
               BASIC VALIDATION
            --------------------------------------------- */

            if (
                !name ||
                !eventType ||
                !eventDate ||
                !location
            ) {

                alert(
                    "Please complete your name, event type, event date and event location."
                );

                return;

            }


            /* ---------------------------------------------
               FORMAT DATE
            --------------------------------------------- */

            let formattedDate =
                eventDate;


            const parsedDate =
                new Date(
                    `${eventDate}T12:00:00`
                );


            if (
                !Number.isNaN(
                    parsedDate.getTime()
                )
            ) {

                formattedDate =
                    parsedDate.toLocaleDateString(
                        "en-ZA",
                        {
                            day:
                                "2-digit",

                            month:
                                "long",

                            year:
                                "numeric"
                        }
                    );

            }


            /* ---------------------------------------------
               WHATSAPP MESSAGE
            --------------------------------------------- */

            const whatsappMessage = [

                "Hi Ken NXT SA 👋",

                "",

                "I would like to make a DJ booking enquiry.",

                "",

                `Name: ${name}`,

                `Event Type: ${eventType}`,

                `Event Date: ${formattedDate}`,

                `Event Location: ${location}`,

                guests
                    ? `Guest / Crowd Size: ${guests}`
                    : "",

                "",

                message
                    ? `Additional Information: ${message}`
                    : "",

                "",

                "Please let me know your availability. Thank you."

            ]
                .filter(
                    (line, index, array) => {

                        /*
                           Keep intentional blank lines,
                           but remove unnecessary empty fields.
                        */

                        if (line !== "") {
                            return true;
                        }


                        const previousLine =
                            array[index - 1];


                        return (
                            index > 0 &&
                            previousLine !== ""
                        );

                    }
                )
                .join("\n");


            /* ---------------------------------------------
               WHATSAPP NUMBER
            --------------------------------------------- */

            const whatsappNumber =
                "27722301683";


            const whatsappURL =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;


            /* ---------------------------------------------
               OPEN WHATSAPP
            --------------------------------------------- */

            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );

}


/* =========================================================
   BACK TO TOP BUTTON
========================================================= */

function updateBackToTop() {

    if (!backToTop) {
        return;
    }


    if (window.scrollY > 600) {

        backToTop.classList.add(
            "visible"
        );

    } else {

        backToTop.classList.remove(
            "visible"
        );

    }

}


window.addEventListener(
    "scroll",
    updateBackToTop,
    {
        passive: true
    }
);


updateBackToTop();


if (backToTop) {

    backToTop.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior:
                    "smooth"

            });

        }
    );

}


/* =========================================================
   REVEAL CONTENT WHEN SCROLLING
========================================================= */

const revealTargets =
    document.querySelectorAll(
        [
            ".section-heading",
            ".about-text",
            ".quote-card",
            ".genre-card",
            ".mixes-panel",
            ".service-card",
            ".event-item",
            ".media-card",
            ".booking-information",
            ".booking-form",
            ".map-wrapper"
        ].join(",")
    );


if (
    "IntersectionObserver" in window &&
    revealTargets.length
) {

    const revealObserver =
        new IntersectionObserver(

            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "revealed"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },

            {
                threshold:
                    0.1,

                rootMargin:
                    "0px 0px -45px 0px"
            }

        );


    revealTargets.forEach(
        (target) => {

            target.classList.add(
                "reveal-item"
            );

            revealObserver.observe(
                target
            );

        }
    );

} else {

    revealTargets.forEach(
        (target) => {

            target.classList.add(
                "revealed"
            );

        }
    );

}


/* =========================================================
   ACTIVE NAVIGATION LINK WHILE SCROLLING
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        '.nav a[href^="#"]'
    );


function updateActiveNavigation() {

    if (
        !sections.length ||
        !navigationLinks.length
    ) {

        return;

    }


    let currentSection =
        "";


    const scrollPosition =
        window.scrollY + 160;


    sections.forEach(
        (section) => {

            const sectionTop =
                section.offsetTop;


            const sectionHeight =
                section.offsetHeight;


            if (
                scrollPosition >= sectionTop &&
                scrollPosition <
                    sectionTop +
                    sectionHeight
            ) {

                currentSection =
                    section.getAttribute(
                        "id"
                    );

            }

        }
    );


    navigationLinks.forEach(
        (link) => {

            link.classList.remove(
                "active-link"
            );


            const href =
                link.getAttribute(
                    "href"
                );


            if (
                href ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active-link"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNavigation,
    {
        passive: true
    }
);


updateActiveNavigation();


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

const mainDJPhoto =
    document.getElementById(
        "kenPhoto"
    );


if (mainDJPhoto) {

    mainDJPhoto.addEventListener(
        "error",
        () => {

            console.warn(
                "Ken NXT SA hero image could not be loaded. Check that ken-nxt-sa.jpg is in the GitHub root folder."
            );

        }
    );

}


/* =========================================================
   LOGO ERROR HANDLING
========================================================= */

const siteLogos =
    document.querySelectorAll(
        ".site-logo"
    );


siteLogos.forEach(
    (logo) => {

        logo.addEventListener(
            "error",
            () => {

                console.warn(
                    "Ken NXT logo could not be loaded. Check that KenNXT-wlogo.png is in the GitHub root folder and that the capitalization is correct."
                );

            }
        );

    }
);


/* =========================================================
   INITIAL PAGE LOAD
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
