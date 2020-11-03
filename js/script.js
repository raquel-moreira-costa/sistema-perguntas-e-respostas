//Método GET

let url = 'https://api.sheety.co/c6b8a44bdd3e942f91045f9aed02cd8c/formularioApi/perguntas';
fetch(url, {
	method: "GET"
})
.then(response => response.json())
.then(json => {
	console.log(json);
});

//Garantindo que não haverá mais do que um checkbox selecionado ao mesmo tempo

function SetSel(elem)
{
  var elems = document.getElementsByClassName("cb");
  var currentState = elem.checked;
  var elemsLength = elems.length;
  
  for(i=0; i<elemsLength; i++)
  {
    if(elems[i].type === "checkbox")
    {
       elems[i].checked = false;   
    }
  }
  
  elem.checked = currentState;
}

function criar() {

    //Pegando valores do input

    var input_pergunta = document.getElementById('pergunta_input').value
    var input_resposta_a = document.getElementById('resposta_a').value
    var input_resposta_b = document.getElementById('resposta_b').value
    var input_resposta_c = document.getElementById('resposta_c').value
    var input_resposta_d = document.getElementById('resposta_d').value
    
    //Pegando valores do checkbox

    var alt_correta_A = document.getElementById('respostaA')
    var alt_correta_B = document.getElementById('respostaB')
    var alt_correta_C = document.getElementById('respostaC')
    var alt_correta_D = document.getElementById('respostaD')

    var resposta_correta = ""

    //Vereficando qual checkbox foi selecionado

    if(alt_correta_A.checked){
        resposta_correta = "A"
    }

    if(alt_correta_B.checked){
        resposta_correta = "B"
    }
    
    if(alt_correta_C.checked){
        resposta_correta = "C"
    }
    
    if(alt_correta_D.checked){
        resposta_correta = "D"
    }

    //Escrevendo valores da API

    const body = {
        
        pergunta:{
            "pergunta": input_pergunta,
            "a": input_resposta_a,
            "b": input_resposta_b,
            "c": input_resposta_c,
            "d": input_resposta_d,
            "respostaCerta" : resposta_correta
        }

    
    };

    //Método POST

    fetch('https://api.sheety.co/c6b8a44bdd3e942f91045f9aed02cd8c/formularioApi/perguntas', {
        method: 'POST',
        headers:{
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    .then((response) => response.json())
    .then((pergunta) => {
        console.log('Success:', pergunta);
    })
    .catch((error) => {
    console.error('Error:', pergunta);
    });
}


