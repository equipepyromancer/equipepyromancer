
function MudarTamanhoBaseFonte(e) {
	var elemento = $(":root");
	var fontSize = parseInt(elemento.css("--base-font-size"));
  
	if (e == 'a' && fontSize < 32) {
		fontSize = fontSize + 2;
	} else if (e == 'd' && fontSize > 10) { 
		fontSize = fontSize - 2;
	} else if (e == 'n') {
		fontSize = 16;
	}

	elemento.css("--base-font-size", fontSize);
}
