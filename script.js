```javascript
/* =========================================================
   KEN NXT SA — MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const nav =
        document.querySelector(".nav");


    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                nav.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation"
                    : "Open navigation"
            );

            menuToggle.textContent =
                isOpen ? "✕" : "☰";

        });


        /* Close menu after clicking a link */

        nav.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                nav.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

                menuToggle.textContent = "☰";

            });

        });


        /* Close menu when clicking outside */

        document.addEventListener("click", event => {

            if (
                nav.classList.contains("active") &&
                !nav.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                nav.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

                menuToggle.textContent = "☰";

            }

        });

    }



    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    const year =
        document.getElementById("year");


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }



    /* =====================================================
       BOOKING DATE
       Prevent users from selecting dates in the past.
       ===================================================== */

    const dateInput =
        document.getElementById("date");


    if (dateInput) {

        const today =
            new Date();

        const yearValue =
            today.getFullYear();

        const monthValue =
            String(today.getMonth() + 1)
                .padStart(2, "0");

        const dayValue =
            String(today.getDate())
                .padStart(2, "0");

        const todayString =
            `${yearValue}-${monthValue}-${dayValue}`;

        dateInput.min =
            todayString;

    }



    /* =====================================================
       WHATSAPP BOOKING FORM
       ===================================================== */

    const bookingForm =
        document.getElementById("bookingForm");


    if (bookingForm) {

        bookingForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                /* -----------------------------------------
                   Get form values
                ----------------------------------------- */

                const name =
                    document
                        .getElementById("name")
                        ?.value
                        .trim() || "";

                const eventType =
                    document
                        .getElementById("eventType")
                        ?.value || "";

                const date =
                    document
                        .getElementById("date")
                        ?.value || "";

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


                /* -----------------------------------------
                   Basic validation
                ----------------------------------------- */

                if (!name) {

                    showFormMessage(
                        "Please enter your name.",
                        "error"
                    );

                    document
                        .getElementById("name")
                        ?.focus();

                    return;

                }


                if (!eventType) {

                    showFormMessage(
                        "Please select your event type.",
                        "error"
                    );

                    document
                        .getElementById("eventType")
                        ?.focus();

                    return;

                }


                if (!date) {

                    showFormMessage(
                        "Please select your event date.",
                        "error"
                    );

                    document
                        .getElementById("date")
                        ?.focus();

                    return;

                }


                if (!location) {

                    showFormMessage(
                        "Please enter your event location.",
                        "error"
                    );

                    document
                        .getElementById("location")
                        ?.focus();

                    return;

                }


                /* -----------------------------------------
                   Format date nicely
                ----------------------------------------- */

                const formattedDate =
                    formatDate(date);


                /* -----------------------------------------
                   Create WhatsApp message
                ----------------------------------------- */

                const whatsappMessage =

`Hi Ken NXT SA 👋

I'd like to make a booking enquiry.

━━━━━━━━━━━━━━━━━━

👤 Name:
${name}

🎉 Event Type:
${eventType}

📅 Event Date:
${formattedDate}

📍 Event Location:
${location}

💬 Message:
${message || "I'd like to discuss my event with you."}

━━━━━━━━━━━━━━━━━━

Looking forward to connecting!

Ken NXT SA`;



                /* -----------------------------------------
                   WhatsApp URL
                ----------------------------------------- */

                const phoneNumber =
                    "27722301683";


                const whatsappURL =
                    `https://wa.me/${phoneNumber}?text=` +
                    encodeURIComponent(
                        whatsappMessage
                    );


                /* -----------------------------------------
                   Open WhatsApp
                ----------------------------------------- */

                window.open(
                    whatsappURL,
                    "_blank",
                    "noopener,noreferrer"
                );


                /* -----------------------------------------
                   Optional success feedback
                ----------------------------------------- */

                showFormMessage(
                    "Your WhatsApp booking message is ready.",
                    "success"
                );

            }
        );

    }



    /* =====================================================
       FORMAT DATE
       ===================================================== */

    function formatDate(dateString) {

        if (!dateString) {
            return "Not specified";
        }


        const date =
            new Date(
                `${dateString}T00:00:00`
            );


        if (Number.isNaN(date.getTime())) {
            return dateString;
        }


        return date.toLocaleDateString(
            "en-ZA",
            {
                weekday: "long",
                day: "2-digit",
                month: "long",
                year: "numeric"
            }
        );

    }



    /* =====================================================
       FORM FEEDBACK
       ===================================================== */

    function showFormMessage(
        message,
        type = "success"
    ) {

        const existingMessage =
            document.querySelector(
                ".form-feedback"
            );


        if (existingMessage) {
            existingMessage.remove();
        }


        const feedback =
            document.createElement("div");


        feedback.className =
            `form-feedback ${type}`;


        feedback.textContent =
            message;


        const formNote =
            bookingForm?.querySelector(
                ".form-note"
            );


        if (formNote) {

            formNote.insertAdjacentElement(
                "afterend",
                feedback
            );

        } else if (bookingForm) {

            bookingForm.appendChild(
                feedback
            );

        }


        /* Remove feedback after a few seconds */

        setTimeout(() => {

            feedback.classList.add(
                "fade-out"
            );

            setTimeout(() => {
                feedback.remove();
            }, 400);

        }, 5000);

    }



    /* =====================================================
       SCROLL REVEAL ANIMATIONS
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        revealElements.length &&
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList
                                .add("visible");


                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );


        revealElements.forEach(
            element => {

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            element => {

                element.classList.add(
                    "visible"
                );

            }
        );

    }



    /* =====================================================
       NAVBAR SCROLL EFFECT
       ===================================================== */

    const header =
        document.querySelector(
            ".site-header"
        );


    if (header) {

        const handleHeaderScroll =
            () => {

                if (
                    window.scrollY > 40
                ) {

                    header.classList.add(
                        "scrolled"
                    );

                } else {

                    header.classList.remove(
                        "scrolled"
                    );

                }

            };


        window.addEventListener(
            "scroll",
            handleHeaderScroll,
            {
                passive: true
            }
        );


        handleHeaderScroll();

    }



    /* =====================================================
       ACTIVE NAVIGATION LINK
       Highlights the section currently visible.
       ===================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            '.nav a[href^="#"]'
        );


    if (
        sections.length &&
        navLinks.length &&
        "IntersectionObserver" in window
    ) {

        const sectionObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            const sectionId =
                                entry.target.id;


                            navLinks.forEach(
                                link => {

                                    link.classList.remove(
                                        "active"
                                    );


                                    if (
                                        link.getAttribute(
                                            "href"
                                        ) ===
                                        `#${sectionId}`
                                    ) {

                                        link.classList.add(
                                            "active"
                                        );

                                    }

                                }
                            );

                        }

                    });

                },
                {
                    threshold: 0.25,
                    rootMargin:
                        "-20% 0px -60% 0px"
                }
            );


        sections.forEach(
            section => {

                sectionObserver.observe(
                    section
                );

            }
        );

    }



    /* =====================================================
       SMOOTH ANCHOR SCROLL
       ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    const headerHeight =
                        header
                            ? header.offsetHeight
                            : 0;


                    const targetPosition =
                        target.getBoundingClientRect()
                            .top +
                        window.scrollY -
                        headerHeight -
                        10;


                    window.scrollTo({
                        top:
                            targetPosition,
                        behavior:
                            "smooth"
                    });

                }
            );

        });



    /* =====================================================
       BUTTON RIPPLE EFFECT
       ===================================================== */

    const buttons =
        document.querySelectorAll(
            ".btn"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            event => {

                const ripple =
                    document.createElement(
                        "span"
                    );


                ripple.className =
                    "button-ripple";


                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                ripple.style.left =
                    `${x}px`;

                ripple.style.top =
                    `${y}px`;


                button.appendChild(
                    ripple
                );


                setTimeout(() => {

                    ripple.remove();

                }, 600);

            }
        );

    });



    /* =====================================================
       IMAGE LOADING EFFECT
       ===================================================== */

    const images =
        document.querySelectorAll(
            "img"
        );


    images.forEach(image => {

        if (image.complete) {

            image.classList.add(
                "loaded"
            );

        } else {

            image.addEventListener(
                "load",
                () => {

                    image.classList.add(
                        "loaded"
                    );

                }
            );

        }

    });



    /* =====================================================
       ESCAPE KEY
       Closes mobile navigation.
       ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                nav?.classList.contains(
                    "active"
                )
            ) {

                nav.classList.remove(
                    "active"
                );


                menuToggle?.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle?.setAttribute(
                    "aria-label",
                    "Open navigation"
                );


                if (menuToggle) {
                    menuToggle.textContent =
                        "☰";
                }

            }

        }
    );

});



/* =========================================================
   EXTRA CSS CLASSES CREATED BY JS

   These styles are injected here so you don't have to
   change styles.css immediately.
   ========================================================= */

const dynamicStyles =
    document.createElement("style");


dynamicStyles.textContent = `

    /* Header scroll state */

    .site-header.scrolled {
        background:
            rgba(8, 5, 13, .88);
        box-shadow:
            0 10px 35px rgba(0,0,0,.18);
    }


    /* Active navigation */

    .nav a.active {
        color:
            #c58cff;
    }


    /* Form feedback */

    .form-feedback {
        margin-top: 12px;
        padding: 12px 14px;
        border-radius: 10px;
        font-size: .85rem;
        font-weight: 600;
        animation:
            feedbackIn .3s ease forwards;
    }


    .form-feedback.success {
        color: #b9ffd0;
        background:
            rgba(37, 211, 102, .10);
        border:
            1px solid rgba(37, 211, 102, .25);
    }


    .form-feedback.error {
        color: #ffd0d0;
        background:
            rgba(255, 70, 70, .10);
        border:
            1px solid rgba(255, 70, 70, .25);
    }


    .form-feedback.fade-out {
        opacity: 0;
        transform:
            translateY(-5px);
        transition:
            opacity .4s ease,
            transform .4s ease;
    }


    /* Button ripple */

    .btn {
        position: relative;
        overflow: hidden;
    }


    .button-ripple {
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        pointer-events: none;

        background:
            rgba(255,255,255,.35);

        transform:
            translate(-50%, -50%)
            scale(0);

        animation:
            buttonRipple .6s ease-out;
    }


    /* Image loading */

    img {
        opacity: 0;
        transition:
            opacity .5s ease;
    }


    img.loaded {
        opacity: 1;
    }


    /* Animations */

    @keyframes buttonRipple {

        to {
            transform:
                translate(-50%, -50%)
                scale(30);
            opacity: 0;
        }

    }


    @keyframes feedbackIn {

        from {
            opacity: 0;
            transform:
                translateY(8px);
        }

        to {
            opacity: 1;
            transform:
                translateY(0);
        }

    }


    /* Respect reduced motion */

    @media (prefers-reduced-motion: reduce) {

        html {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration:
                .01ms !important;

            animation-iteration-count:
                1 !important;

            transition-duration:
                .01ms !important;

            scroll-behavior:
                auto !important;
        }

    }

`;


document.head.appendChild(
    dynamicStyles
);
```
