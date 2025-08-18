/*=============== MENU SHOW/HIDDEN ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
	navToggle.addEventListener("click", () => navMenu.classList.add("show-menu"));
}
if (navClose) {
	navClose.addEventListener("click", () =>
		navMenu.classList.remove("show-menu"),
	);
}
const navLinks = document.querySelectorAll(".nav__link");
for (const link of navLinks) {
	link.addEventListener("click", () => navMenu.classList.remove("show-menu"));
}

/*=============== BACKGROUND HEADER ===============*/
function scrollHeader() {
	const header = document.getElementById("header");
	this.scrollY >= 50
		? header.classList.add("scroll-header")
		: header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER (CARROSSEL DEPOIMENTOS) ===============*/
const swiper = new Swiper(".testimonials__slider", {
	spaceBetween: 30,
	grabCursor: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		640: { slidesPerView: 1 },
		768: { slidesPerView: 2, spaceBetween: 40 },
		1024: { slidesPerView: 2, spaceBetween: 50 },
	},
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	distance: "60px",
	duration: 2500,
	delay: 400,
});
sr.reveal(".hero__title, .hero__description, .hero .button", {
	delay: 500,
	origin: "bottom",
	interval: 100,
});
sr.reveal(".about__data, .contact__container", { origin: "left" });
sr.reveal(".about__image", { origin: "right" });
sr.reveal(".services__grid .service-card, .gallery__grid .gallery__item", {
	interval: 100,
	origin: "top",
});
sr.reveal(".testimonials", { origin: "bottom" });

/*=============== DARK/LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bxs-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
	document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme) ? "bxs-sun" : "bxs-moon";

if (selectedTheme) {
	document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
		darkTheme,
	);
	themeButton.classList[selectedIcon === "bxs-sun" ? "add" : "remove"](
		iconTheme,
	);
	if (selectedIcon === "bxs-sun") {
		themeButton.classList.remove("bxs-moon");
	}
}

themeButton.addEventListener("click", () => {
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);

	if (themeButton.classList.contains(iconTheme)) {
		themeButton.classList.remove("bxs-moon");
	} else {
		themeButton.classList.add("bxs-moon");
	}

	localStorage.setItem("selected-theme", getCurrentTheme());
	localStorage.setItem("selected-icon", getCurrentIcon());
});
