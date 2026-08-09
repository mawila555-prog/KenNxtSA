/* =========================================================
   KEN NXT SA
   WEBSITE JAVASCRIPT
   ========================================================= */

"use strict";


/* =========================================================
   ELEMENTS
   ========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const nav =
    document.getElementById("nav");

const siteHeader =
    document.getElementById("siteHeader");

const bookingForm =
    document.getElementById("bookingForm");

const dateInput =
    document.getElementById("date");

const yearElement =
    document.getElementById("year");


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

if (menuToggle && nav) {

    menuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                nav.classList.toggle("active");

            menuToggle.classList.toggle(
                "active",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );


    /*
        Close menu after clicking a link
    */

    nav.querySelectorAll("a").forEach(
        (link) => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "active"
                    );

                    menuToggle.classList.remove(
                        "active"
                    );

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        }
    );


    /*
        Close menu with Escape
    */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                nav.classList.contains("active")
            ) {

                nav.classList.remove(
                    "active"
                );

                menuToggle.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

}


/* =========================================================
   HEADER SCROLL EFFECT
   ========================================================= */

function updateHeader() {

    if (!siteHeader) {
        return;
    }

    if (window.scrollY > 35) {

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
   SCROLL REVEAL
   ========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


if (
    "IntersectionObserver" in window
) {

    const revealObserver =
        new IntersectionObserver(
            (
                entries,
                observer
            ) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12,
                rootMargin:
                    "0px 0px -50px 0px"
            }
        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );

} else {

    revealElements.forEach(
        (element) => {

            element.classList.add(
                "visible"
            );

        }
    );

}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav a:not(.nav-book)"
    );


if (
    "IntersectionObserver" in window &&
    sections.length &&
    navLinks.length
) {

    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            navLinks.forEach(
                                (link) => {

                                    link.classList.remove(
                                        "active"
                                    );

                                    const href =
                                        link.getAttribute(
                                            "href"
                                        );

                                    if (
                                        href ===
                                        `#${entry.target.id}`
                                    ) {

                                        link.classList.add(
                                            "active"
                                        );

                                    }

                                }
                            );

                        }

                    }
                );

            },
            {
                rootMargin:
                    "-35% 0px -55% 0px"
            }
        );


    sections.forEach(
        (section) => {

            sectionObserver.observe(
                section
            );

        }
    );

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   BOOKING DATE
   ========================================================= */

if (dateInput) {

    const today =
        new Date();

    const year =
        today.getFullYear();

    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            today.getDate()
        ).padStart(2, "0");

    const minimumDate =
        `${year}-${month}-${day}`;

    dateInput.min =
        minimumDate;

}


/* =========================================================
   DATE FORMATTER
   ========================================================= */

function formatDate(
    dateString
) {

    if (!dateString) {
        return "Not specified";
    }

    const date =
        new Date(
            `${dateString}T12:00:00`
        );

    if (
        Number.isNaN(
            date.getTime()
        )
    ) {

        return dateString;

    }

    return date.toLocaleDateString(
        "en-ZA",
        {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );

}


/* =========================================================
   WHATSAPP BOOKING
   ========================================================= */

if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /*
                Get values
            */

            const name =
                document
                    .getElementById("name")
                    ?.value
                    .trim();

            const eventType =
                document
                    .getElementById("eventType")
                    ?.value
                    .trim();

            const date =
                document
                    .getElementById("date")
                    ?.value
                    .trim();

            const location =
                document
                    .getElementById("location")
                    ?.value
                    .trim();

            const message =
                document
                    .getElementById("message")
                    ?.value
                    .trim();


            /*
                Basic validation
            */

            if (
                !name ||
                !eventType ||
                !date ||
                !location
            ) {

                showFormMessage(
                    "Please complete all required fields."
                );

                return;

            }


            /*
                Prevent past dates
            */

            if (
                dateInput &&
                dateInput.value < dateInput.min
            ) {

                showFormMessage(
                    "Please select a future event date."
                );

                return;

            }


            /*
                Format event date
            */

            const readableDate =
                formatDate(date);


            /*
                Create WhatsApp message
            */

            const whatsappMessage =

`🔥 KEN NXT SA — BOOKING ENQUIRY

Hi Ken NXT SA,

I'd like to enquire about booking you for an event.

👤 Name:
${name}

🎧 Event Type:
${eventType}

📅 Event Date:
${readableDate}

📍 Event Location:
${location}

💬 Message:
${message || "No additional message provided."}

Looking forward to hearing from you.

— Sent via the Ken NXT SA website`;


            /*
                Encode message
            */

            const encodedMessage =
                encodeURIComponent(
                    whatsappMessage
                );


            /*
                WhatsApp URL
            */

            const whatsappURL =
                `https://wa.me/27722301683?text=${encodedMessage}`;


            /*
                Open WhatsApp
            */

            window.open(
                whatsappURL,
                "_blank",
                "noopener,noreferrer"
            );


            /*
                Visual confirmation
            */

            showFormMessage(
                "Opening WhatsApp with your booking enquiry..."
            );

        }
    );

}


/* =========================================================
   FORM MESSAGE
   ========================================================= */

function showFormMessage(
    text
) {

    const formNote =
        document.querySelector(
            ".form-note"
        );

    if (!formNote) {
        return;
    }


    const originalText =
        formNote.textContent;


    formNote.textContent =
        text;

    formNote.style.color =
        "#ed72ff";


    setTimeout(
        () => {

            formNote.textContent =
                originalText;

            formNote.style.color =
                "";

        },
        5000
    );

}


/* =========================================================
   SMOOTH ANCHOR SCROLL
   ========================================================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        (anchor) => {

            anchor.addEventListener(
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
                        85;

                    const targetPosition =
                        target.getBoundingClientRect()
                            .top
                        +
                        window.scrollY
                        -
                        headerOffset;


                    window.scrollTo(
                        {
                            top:
                                targetPosition,

                            behavior:
                                "smooth"
                        }
                    );

                }
            );

        }
    );


/* =========================================================
   BUTTON RIPPLE
   ========================================================= */

document
    .querySelectorAll(
        ".btn"
    )
    .forEach(
        (button) => {

            button.addEventListener(
                "pointerdown",
                function (event) {

                    const rect =
                        this.getBoundingClientRect();


                    const ripple =
                        document.createElement(
                            "span"
                        );


                    const size =
                        Math.max(
                            rect.width,
                            rect.height
                        );


                    ripple.style.position =
                        "absolute";

                    ripple.style.width =
                        `${size}px`;

                    ripple.style.height =
                        `${size}px`;

                    ripple.style.borderRadius =
                        "50%";

                    ripple.style.background =
                        "rgba(255,255,255,.18)";

                    ripple.style.pointerEvents =
                        "none";

                    ripple.style.left =
                        `${event.clientX - rect.left - size / 2}px`;

                    ripple.style.top =
                        `${event.clientY - rect.top - size / 2}px`;

                    ripple.style.transform =
                        "scale(0)";

                    ripple.style.opacity =
                        "1";

                    ripple.style.transition =
                        "transform .5s ease, opacity .5s ease";


                    this.style.overflow =
                        "hidden";

                    this.appendChild(
                        ripple
                    );


                    requestAnimationFrame(
                        () => {

                            ripple.style.transform =
                                "scale(2)";

                            ripple.style.opacity =
                                "0";

                        }
                    );


                    setTimeout(
                        () => {

                            ripple.remove();

                        },
                        600
                    );

                }
            );

        }
    );


/* =========================================================
   CARD TILT — DESKTOP ONLY
   ========================================================= */

const canHover =
    window.matchMedia(
        "(hover: hover) and (pointer: fine)"
    ).matches;


if (canHover) {

    document
        .querySelectorAll(
            ".genre-card, .event-card"
        )
        .forEach(
            (card) => {

                card.addEventListener(
                    "pointermove",
                    (event) => {

                        const rect =
                            card.getBoundingClientRect();


                        const x =
                            event.clientX -
                            rect.left;


                        const y =
                            event.clientY -
                            rect.top;


                        const rotateX =
                            ((y / rect.height) - .5) * -3;


                        const rotateY =
                            ((x / rect.width) - .5) * 3;


                        card.style.transform =
                            `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

                    }
                );


                card.addEventListener(
                    "pointerleave",
                    () => {

                        card.style.transform =
                            "";

                    }
                );

            }
        );

}


/* =========================================================
   ESCAPE EXTERNAL MENU
   ========================================================= */

window.addEventListener(
    "resize",
    () => {

        if (
            window.innerWidth > 850 &&
            nav
        ) {

            nav.classList.remove(
                "active"
            );

            if (menuToggle) {

                menuToggle.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    }
);


/* =========================================================
   CONSOLE BRANDING
   ========================================================= */

console.log(
    "%cKEN NXT SA",
    "font-size: 28px; font-weight: 900; color: #d000ff;"
);

console.log(
    "%cBringing the vibe. Creating the moment.",
    "font-size: 14px; color: #ed72ff;"
);
