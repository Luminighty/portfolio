function $(query) { return document.querySelector(query); }
function $$(query) { return document.querySelectorAll(query); }

let activeContainer = $(".container.active");

$(".menu").addEventListener("click", (e) => {
	if(e.target.dataset.to !== undefined) {
		activeContainer.classList.remove("active");
		activeContainer = $(`#${e.target.dataset.to}`);
		console.log(e.target.dataset.to);
		activeContainer.classList.add("active");
	}
});


const age = new Date(Date.now() - new Date(1998, 09, 22).getTime()).getFullYear() - 1970;
$$(".age").forEach(element => {
	element.innerText = age;
});