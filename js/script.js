/*=========================================================
        D A PATIL & ASSOCIATES
        script.js
=========================================================*/


/*=========================
        STICKY NAVBAR
=========================*/

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }

    else{

        header.classList.remove("scrolled");

    }

});


/*=========================
      MOBILE MENU
=========================*/

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});


document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

    });

});


/*=========================
    SERVICES ACCORDION
=========================*/

const accordions=document.querySelectorAll(".service-accordion");

accordions.forEach(item=>{

    const header=item.querySelector(".accordion-header");

    header.addEventListener("click",()=>{

        item.classList.toggle("active");

    });

});


/*=========================
        FAQ
=========================*/

const faqItems=document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const question=item.querySelector(".faq-question");

    question.addEventListener("click",()=>{

        item.classList.toggle("active");

    });

});
/*=========================================================
        PART 2
COUNTER | BACK TO TOP | SCROLL EFFECTS
=========================================================*/


/*=========================
      COUNTER ANIMATION
=========================*/

const counters = document.querySelectorAll(".count");

const speed = 200;

const counterObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = +counter.getAttribute("data-target");

            const updateCounter = ()=>{

                const count = +counter.innerText;

                const increment = Math.ceil(target / speed);

                if(count < target){

                    counter.innerText = count + increment;

                    setTimeout(updateCounter,15);

                }

                else{

                    counter.innerText = target;

                }

            };

            updateCounter();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});


/*=========================
      BACK TO TOP BUTTON
=========================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================
      SMOOTH SCROLL
=========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*=========================
      SCROLL REVEAL
=========================*/

const revealElements=document.querySelectorAll(

".service-card,.why-card,.policy-card,.testimonial-card,.mission-card,.info-box,.timeline-item"

);

const revealObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

});

revealElements.forEach(item=>{

    item.style.opacity="0";

    item.style.transform="translateY(50px)";

    item.style.transition=".7s";

    revealObserver.observe(item);

});


/*=========================
      ACTIVE NAVIGATION
=========================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-menu a").forEach(link=>{

    const href = link.getAttribute("href");

    if(href === currentPage){

        link.classList.add("active");

    }

});
/*=========================================================
        WHATSAPP CONTACT FORM
=========================================================*/

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        const whatsappMessage =
`Hello D A Patil & Associates,

I would like to contact you regarding the following enquiry.

Name: ${name}
Email: ${email}
Phone: ${phone}
Subject: ${subject}

Message:
${message}`;


        const whatsappNumber = "919604794433";

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        window.open(whatsappURL, "_blank");

    });

}
