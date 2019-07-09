function $(query) { return document.querySelector(query); }
function $$(query) { return document.querySelectorAll(query); }

let activeContainer = $(".container.active");

$(".menu").addEventListener("click", (e) => {
	activeContainer.classList.remove("active");
	activeContainer = $(`#${e.target.dataset.to}`);
	console.log(e.target.dataset.to);
	activeContainer.classList.add("active");
});