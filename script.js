
function fonte(e) {

	var elemento = $(".acessibilidade");
	var fonte = parseInt(elemento.css('font-size'));
  
	if (e == 'a' && fonte < 32) {
		fonte++;
	} else if (e == 'd' && fonte > 10) { 
		fonte--;
	} else if (e == 'n') {
		fonte = 16;
	}

	elemento.css("fontSize", fonte);
}
