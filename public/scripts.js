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

	var save = document.getElementById('save_button');
	save.addEventListener('click', function(){
		var paintColors = [];
		for (var i = 0; i < rows.length; i++) {
			paintColors.push(rows[i].style.backgroundColor.charAt(0));
		}
		row1 = [paintColors[0], paintColors[1], paintColors[2], paintColors[3]]
		row2 = [paintColors[4], paintColors[5], paintColors[6], paintColors[7]]
		row3 = [paintColors[8], paintColors[9], paintColors[10], paintColors[11]]
		row4 = [paintColors[12], paintColors[13], paintColors[14], paintColors[15]]

		var request = new XMLHttpRequest();
		request.open("GET", "/save_painting?savedArt=" + row1 + "," + row2 + "," + row3 + "," + row4);
		request.send();
		request.addEventListener("load", alert_Success);
	});


	var alert_Success = function(event){
		alert("Success! Your painting was saved.");
		var request = event.target;
	}

});