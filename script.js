/* =========================================================
   KEN NXT SA
   WEBSITE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       YEAR
    ===================================================== */

    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const nav =
        document.getElementById("nav");

    const body =
        document.body;


    if (menuToggle && nav) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                nav.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            body.classList.toggle(
                "menu-open",
                isOpen
            );

        });


        nav.querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    nav.classList.remove("open");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    body.classList.remove(
                        "menu-open"
                    );

                });

            });

    }


    /* =====================================================
       DJ PHOTO FALLBACK
       
       This means the website will try:
       ken-nxt-sa.jpg
       ken-nxt-sa.jpeg
       ken-nxt-sa.png
       ken-nxt-sa.webp
    ===================================================== */

    const kenPhoto =
        document.getElementById("kenPhoto");


    if (kenPhoto) {

        const imageOptions = [
            "./ken-nxt-sa.jpg",
            "./ken-nxt-sa.jpeg",
            "./ken-nxt-sa.png",
            "./ken-nxt-sa.webp"
        ];

        let imageIndex = 0;

        kenPhoto.addEventListener(
            "error",
            () => {

                imageIndex++;

                if (
                    imageIndex <
                    imageOptions.length
                ) {

                    kenPhoto.src =
                        imageOptions[imageIndex];

                } else {

                    console.warn(
                        "Ken NXT SA image could not be found. Please place ken-nxt-sa.jpg in the same folder as index.html."
                    );

                    kenPhoto.style.display =
                        "none";

                }

            }
        );

    }


    /* =====================================================
       BOOKING DATE
    ===================================================== */

    const dateInput =
        document.getElementById("date");


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

        dateInput.min =
            `${year}-${month}-${day}`;

    }


    /* =====================================================
       WHATSAPP BOOKING FORM
    ===================================================== */

    const bookingForm =
        document.getElementById("bookingForm");


    if (bookingForm) {

        bookingForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


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


                const guests =
                    document
                        .getElementById("guests")
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


                if (
                    !name ||
                    !eventType ||
                    !date ||
                    !location
                ) {

                    alert(
                        "Please complete your name, event type, event date and event location."
                    );

                    return;

                }


                const formattedDate =
                    formatDate(date);


                const whatsappMessage =
`🔥 KEN NXT SA BOOKING ENQUIRY

Hi Ken NXT SA,

I would like to enquire about booking you.

👤 Name:
${name}

🎧 Event Type:
${eventType}

📅 Event Date:
${formattedDate}

👥 Guest / Crowd Size:
${guests || "Not specified"}

📍 Event Location:
${location}

💬 Message:
${message || "No additional message."}

Looking forward to hearing from you.

— Sent from the Ken NXT SA website`;


                const encodedMessage =
                    encodeURIComponent(
                        whatsappMessage
                    );


                const whatsappURL =
                    `https://wa.me/27722301683?text=${encodedMessage}`;


                window.open(
                    whatsappURL,
                    "_blank",
                    "noopener,noreferrer"
                );

            }
        );

    }


    /* =====================================================
       DATE FORMATTER
    ===================================================== */

    function formatDate(dateString) {

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
                day: "numeric",
                month: "long",
                year: "numeric"
            }
        );

    }


    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".section-heading, .genre-card, .service-card, .event-item, .media-card, .mixes-panel, .quote-card, .booking-form"
        );


    revealElements.forEach(
        element => {
            element.classList.add("reveal");
        }
    );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

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
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            element => {

                observer.observe(
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
       BACK TO TOP
    ===================================================== */

    const backToTop =
        document.getElementById(
            "backToTop"
        );


    if (backToTop) {

        window.addEventListener(
            "scroll",
            () => {

                if (
                    window.scrollY > 700
                ) {

                    backToTop.classList.add(
                        "show"
                    );

                } else {

                    backToTop.classList.remove(
                        "show"
                    );

                }

            },
            {
                passive: true
            }
        );


        backToTop.addEventListener(
            "click",
            () => {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    /* =====================================================
       HERO MOUSE LIGHTING
    ===================================================== */

    const hero =
        document.querySelector(
            ".hero"
        );


    const heroGlow =
        document.querySelector(
            ".hero-glow"
        );


    if (
        hero &&
        heroGlow &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        hero.addEventListener(
            "mousemove",
            event => {

                const rect =
                    hero.getBoundingClientRect();

                const x =
                    event.clientX -
                    rect.left;

                const y =
                    event.clientY -
                    rect.top;

                heroGlow.style.transform =
                    `translate(
                        ${(x - rect.width / 2) * 0.04}px,
                        ${(y - rect.height / 2) * 0.04}px
                    ) scale(1.05)`;

            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                heroGlow.style.transform =
                    "";

            }
        );

    }


    /* =====================================================
       SMOOTH ANCHOR LINKS
    ===================================================== */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const targetID =
                        link.getAttribute(
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


                    if (target) {

                        event.preventDefault();

                        const headerHeight =
                            document
                                .querySelector(
                                    ".site-header"
                                )
                                ?.offsetHeight ||
                            0;


                        const targetPosition =
                            target.getBoundingClientRect()
                                .top +
                            window.scrollY -
                            headerHeight -
                            15;


                        window.scrollTo({
                            top:
                                targetPosition,
                            behavior:
                                "smooth"
                        });

                    }

                }
            );

        });


    /* =====================================================
       IMAGE ERROR HANDLING
    ===================================================== */

    document
        .querySelectorAll(
            "img"
        )
        .forEach(img => {

            img.addEventListener(
                "error",
                () => {

                    img.parentElement
                        ?.classList.add(
                            "image-missing"
                        );

                }
            );

        });


    console.log(
        "Ken NXT SA website loaded successfully 🔥"
    );

});
