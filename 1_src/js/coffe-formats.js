@include('functions/smooth-scroll.js')



const links = document.querySelectorAll(".page-heading__link");

for (const link of links) {
	link.addEventListener("click", clickHandler);
}