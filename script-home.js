
function MudarTamanhoBaseFonte(e) {
	//Acessa a raiz do CSS e pega a variável global com tamanho base das fontes redimensionáveis
	var elemento = $(":root");
	var fontSize = parseInt(elemento.css("--base-font-size"));

	//Muda o tamanho da fonte dentro de um limite de acordo com o botão pressionado
	if (e == 'a' && fontSize < 24) {
		fontSize = fontSize + 2;
	} else if (e == 'd' && fontSize > 10) { 
		fontSize = fontSize - 2;
	} else if (e == 'n') {
		fontSize = 16;
	}

	//Aplica o valor alterado na variável global do CSS	
	elemento.css("--base-font-size", fontSize);
	alert(fontSize);
}

function FormularioEnviado() {
	//Alerta que o conteúdo do formulário foi enviado
	alert("Formulário Enviado");

	//Apaga o conteúdo do formulário
	document.getElementById("email").value = "";
	document.getElementById("assunto").value = "";
	document.getElementById("mensagem").value = "";
}
