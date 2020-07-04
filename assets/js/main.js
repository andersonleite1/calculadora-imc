function meuEscopo() {

    const formulario = document.querySelector('.formulario');
    const resultado  = document.querySelector('.resultado');

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');
        let imc = (peso.value / altura.value **2).toFixed(1);
        let mensagemImc = '';
        let classeImc = '';

        if(isNaN(imc) || peso.value > 500 || altura.value > 3) {
            imc = "Inválido"
            mensagemImc = "Os dados informados não são válidos";
        } else {

            if(imc < 18.5){
                mensagemImc = "Abaixo do peso";
                classeImc = "imc-abaixo";
            } else if(imc <24.9){
                mensagemImc = "Peso normal";
                classeImc = "imc-normal";
            } else if(imc < 29.9){
                mensagemImc = "Sobrepeso";
                classeImc = "imc-sobrepeso";
            } else if(imc < 34.9){
                mensagemImc = "Obsidade grau 1";
                classeImc = "imc-obsidade-leve";
            } else if(imc < 39.9){
                mensagemImc = "Obsidade grau 2";
                classeImc = "imc-obsidade";
            } else {
                mensagemImc = "Obsidade grau 3";
                classeImc = "imc-obsidade";
            }
        }   

        resultado.innerHTML = `<p>IMC: ${imc}</p><p class="${classeImc}">${mensagemImc}</p>`;

    }

    formulario.addEventListener('submit', recebeEventoForm);

}

meuEscopo();
