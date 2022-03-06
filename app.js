/* Fait disparaitre la bar de navigation en scrollant vers le bas */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myNav-bar").style.top = "0";
  } else {
    document.getElementById("myNav-bar").style.top = "-430px";
  }
  prevScrollpos = currentScrollPos;
};

/* remplace la classe "navbar" avec la classe "responsive" pour la bar de navigation */
function myFunction() {
  var x = document.getElementById("myNav-bar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}


/* section-3 de la page acceuil */
/* MontionPath du svg rider avec la librery gsap */
gsap.registerPlugin(MotionPathPlugin);

var riding = gsap
  .timeline({
    repeat: -1,
  })

  /* rider sur le tracé 1 */
  .to("#rider", {
    ease: "none",
    motionPath: {
      path: "#tracé_1",
      align: "tracé_1",
      alignOrigin: [0.5, 0.75],
      autoRotate: true,
    },
    transformOrigin: "0% 100%",
    duration: 8,
    ease: CustomEase.create(
      "custom",
      "M0,0,C0,0,0,0.014,0.026,0.04,0.049,0.064,0.092,0.096,0.132,0.135,0.146,0.15,0.173,0.189,0.19,0.206,0.256,0.272,0.262,0.267,0.344,0.348,0.355,0.359,0.379,0.37,0.398,0.386,0.413,0.399,0.429,0.402,0.438,0.41,0.447,0.418,0.461,0.439,0.468,0.444,0.482,0.454,0.524,0.509,0.532,0.518,0.777,0.761,1,1,1,1"
    ),
  })

  /* tourner le rider sur 180° */
  .to("#rider", { scaleX: -1, duration: 0.2 })
  /* rider su le tracé 2 */
  .to("#rider", {
    motionPath: {
      path: "#tracé_2",
      align: "tracé_2",
      autoRotate: 180,
    },
    transformOrigin: "0% 100%",
    duration: 8,
    ease: CustomEase.create(
      "custom",
      "M0,0 C0,0 0.335,0.339 0.576,0.58 0.59,0.594 0.635,0.604 0.65,0.618 0.671,0.64 0.685,0.657 0.706,0.678 0.926,0.898 1,1 1,1 "
    ),
  });


/* Mouvement de la foule et de l'herbe avec la function GSAP ScrollTrigger */
gsap.registerPlugin(ScrollTrigger);

/* public qui bouge verticalement en scrollant */
gsap.to("#front-crowd", {
  scrollTrigger: {
    trigger: "#front-crowd",
    start: "100px bottom",
    scrub: 1,
  },
  y: -200,
  duration: 2,
});

/* herbe qui bouge verticalement en scrollant */
gsap.to("#front-grass", {
  scrollTrigger: {
    trigger: "#front-grass",
    start: "80% bottom",
    /* markers: true, */
    scrub: 1,
  },
  y: -200,
  duration: 2,
});

/* section-4 de la page acceuil */
/* apparence du text en scrollent */
gsap.to("#origine", {
  scrollTrigger: {
    trigger: "#origine",
    start: "100px bottom",
    /* markers: true, */
    toggleActions: "restart none none none",
  },
  x: 800,
  duration: 1,
});

/* apparence du text en scrollent */
gsap.to("#histoire", {
  scrollTrigger: {
    trigger: "#histoire",
    start: "100px bottom",
    /* markers: true, */
    toggleActions: "restart none none none",
  },
  x: 800,
  duration: 1,
});


/* apparence du text en scrollent sur la page règle */
/* text reveal du texte de la section-1 */
gsap.to(".text-reveal-droite-1", {
  scrollTrigger: {
    trigger: ".text-reveal-droite-1",
    toggleActions: "restart none none none",
  },
  opacity: 1,
  stagger: 0.3,
  duration: 1,
});

gsap.to("#image-background-gauche-1", {
  scrollTrigger: {
    trigger: "#image-background-gauche-1",
    toggleActions: "restart none none none",
  },
  opacity: 1,
  duration: 2,
});

/* text reveal du texte de la section-2 */
gsap.to(".text-reveal-gauche-1", {
  scrollTrigger: {
    trigger: ".text-reveal-gauche-1",
    toggleActions: "restart none none none",
  },
  opacity: 1,
  stagger: 0.2,
  duration: 1,
});

gsap.to("#image-background-droite-1", {
  scrollTrigger: {
    trigger: "#image-background-droite-1",
    toggleActions: "restart none none none",
  },
  opacity: 1,
  duration: 2,
});

/* text reveal du texte de la section-3 */
gsap.to(".text-reveal-droite-2", {
  scrollTrigger: {
    trigger: ".text-reveal-droite-2",
    toggleActions: "restart none none none",
  },
  opacity: 1,
  stagger: 0.2,
  duration: 1,
});

gsap.to("#image-background-gauche-2", {
  scrollTrigger: {
    trigger: "#image-background-gauche-2",
    toggleActions: "restart none none none",
  },
  opacity: 1,
  duration: 2,
});

/* text reveal du texte de la section-4 */
gsap.to(".text-reveal-gauche-2", {
  scrollTrigger: {
    trigger: ".text-reveal-gauche-2",
    toggleActions: "restart none none none",
  },
  opacity: 1,
  stagger: 0.3,
  duration: 1,
});

gsap.to("#image-background-droite-2", {
  scrollTrigger: {
    trigger: "#image-background-droite-2",
    toggleActions: "restart none none none",
  },
  opacity: 1,
  duration: 2,
});


/* section-5 de la page acceuil */
/* création du carrousel */
var slideIndex = 1;
showSlides(slideIndex);

// contrôle de l'avant/après 
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// vignette du contrôle des images
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
