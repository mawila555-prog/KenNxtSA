/* =========================================
   KEN NXT SA
   WEBSITE JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuButton =
    document.querySelector(".menu-toggle");

const navigation =
    document.querySelector(".nav");


if (menuButton) {

    menuButton.addEventListener(
        "click",
        function () {

            navigation.classList.toggle("open");

            const isOpen =
                navigation.classList.contains("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );

}


/* Close menu when clicking a link */

const navigationLinks =
    document.querySelectorAll(".nav a");


navigationLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navigation.classList.remove(
                    "open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    }
);


/* =========================================
   FOOTER YEAR
========================================= */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =========================================
   BOOKING FORM
========================================= */

const bookingForm =
    document.getElementById(
        "bookingForm"
    );


if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* Get form information */

            const name =
                document.getElementById(
                    "name"
                ).value.trim();


            const eventType =
                document.getElementById(
                    "eventType"
                ).value;


            const date =
                document.getElementById(
                    "date"
                ).value;


            const location =
                document.getElementById(
                    "location"
                ).value.trim();


            const message =
                document.getElementById(
                    "message"
                ).value.trim();


            /* Format date */

            let formattedDate =
                "Not specified";


            if (date) {

                const dateObject =
                    new Date(
                        date + "T12:00:00"
                    );


                formattedDate =
                    dateObject.toLocaleDateString(
                        "en-ZA",
                        {
                            day: "2-digit",
                            month: "long",
                            year: "numeric"
                        }
                    );

            }


            /* Create WhatsApp message */

            const whatsappMessage =

`Hi Ken NXT SA 👋

I'd like to enquire about a booking.

Name:
${name}

Event:
${eventType}

Date:
${formattedDate}

Location:
${location}

Message:
${message || "No additional details provided."}

Sent from the Ken NXT SA website.`;


            /* WhatsApp number */

            const phoneNumber =
                "27722301683";


            /* Create WhatsApp URL */

            const whatsappURL =
                "https://wa.me/" +
                phoneNumber +
                "?text=" +
                encodeURIComponent(
                    whatsappMessage
                );


            /* Open WhatsApp */

            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}
