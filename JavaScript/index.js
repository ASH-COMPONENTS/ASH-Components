let gotop = document.querySelector(".go-top");

window.onscroll = function () {
	// console.log(this.scrollY); // show number scroll
	if (this.scrollY >= 900) {
		gotop.classList.add("show")
	} else {
		gotop.classList.remove("show")
	}
};

// go to top
gotop.onclick = function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	})
}