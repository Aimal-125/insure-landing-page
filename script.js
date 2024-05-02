const mobileMenuBtn = document.querySelector(".nav-links-mobile");
const mobileMenu = document.querySelector(".mobile-menu");
const bgPatternRight = document.querySelector("#right-img");
const bgPatternLeft = document.querySelector("#left-img");
const hdDiv = document.querySelector(".hd-div");
const findContainer = document.querySelector(".find-out-container");
const footer = document.querySelector("footer");

mobileMenuBtn.addEventListener("click", () => {
	mobileMenuBtn.classList.toggle("nav-links-mobile-open");
	mobileMenu.classList.toggle("mobile-menu-open");
	hdDiv.classList.toggle("zero-index");
});

let media = window.matchMedia("(max-width: 700px)");
let mediaQueryChecker = (media) => {
	if(media.matches) {
		bgPatternRight.src = "./images/bg-pattern-intro-right-mobile.svg";
		bgPatternLeft.src = "./images/bg-pattern-intro-left-mobile.svg";
		findContainer.style.background = "url(./images/bg-pattern-how-we-work-mobile.svg) no-repeat hsl(256, 26%, 20%) right top";
		footer.style.background = "url(./images/bg-pattern-footer-mobile.svg) no-repeat hsl(0, 0%, 98%) left top";
	} else {
		bgPatternRight.src = "./images/bg-pattern-intro-right-desktop.svg";
		bgPatternLeft.src = "./images/bg-pattern-intro-left-desktop.svg";
		findContainer.style.background = "url(./images/bg-pattern-how-we-work-desktop.svg) no-repeat hsl(256, 26%, 20%) right top";
		footer.style.background = "url(./images/bg-pattern-footer-desktop.svg) no-repeat hsl(0, 0%, 98%) left top";
	}
};
mediaQueryChecker(media);
media.addEventListener("change", () => mediaQueryChecker(media));