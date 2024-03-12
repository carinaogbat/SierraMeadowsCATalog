let spinner = document.getElementById('spinner');
let spinnerText = document.getElementById('spinner-text');
hideSpinner();

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		stagePadding: 50,
		loop:true,
		margin: 10,
		items: 2,
		}
	)
})

function hideSpinner() {
	if (spinner && spinnerText) {
	window.onload = function() {
		spinner.style.display = "none";
		spinnerText.style.display = "none";
		}
	}
}