
fetch('https://api.sheety.co/f08f23a0d16453456d974293ec3a9f2c/formularioApi/perguntas')
	.then(function(response) {
		if (!response.ok) throw new Error('Erro ao executar a requisição, status ' + response.status);
		return response.json();
	})
	.then(function(data){


		data = JSON.stringify(data)
		data = JSON.parse(data)

		const corpo_pergunta = `
			<p>Teste1</p>
			<p>${data}</p>
		`
		console.log(corpo_pergunta)
	})
	.catch(function(error){
		console.error(error.message)
	}); 