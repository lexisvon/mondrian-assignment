window.addEventListener('load', function() {
	var colors = document.getElementsByClassName("color");
	for (var i = 0; i < colors.length; i++) {
		colors[i].addEventListener("click", function(event){
			currrentColor = event.target.id;
		});
	}
	var rows = document.getElementsByClassName("row");
	for (var i = 0; i < rows.length; i++) {
		rows[i].addEventListener("click", function(event){
			event.target.style.backgroundColor = currrentColor;
		});
	}
});