// Obtém a data atual
var dataAtual = new Date();

// Formata a data como string (por exemplo: "28 de outubro de 2023")
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var dataFormatada = dataAtual.toLocaleDateString('pt-BR', options);

// Atualiza o conteúdo do elemento HTML com a data formatada
document.getElementById('dataHoje').innerHTML = dataFormatada;

//######################################################################

// Obtém a hora atual
var dataAtual = new Date();

// Obtém a hora e o minuto
var hora = dataAtual.getHours();
var minuto = dataAtual.getMinutes();

// Formata a hora e o minuto com dois dígitos
var horaFormatada = hora < 10 ? '0' + hora : hora;
var minutoFormatado = minuto < 10 ? '0' + minuto : minuto;

// Atualiza o conteúdo do elemento HTML com a hora e o minuto formatados
document.getElementById('horaAtual').innerHTML = horaFormatada + ':' + minutoFormatado;

//######################################################################

//alteração do tamanho da fonte
var tamanhoFonte = 16; // Tamanho inicial da fonte

function aumentarFonte() {
    tamanhoFonte += 2;
    atualizarTamanhoFonte();
}

function diminuirFonte() {
    tamanhoFonte -= 2;
    atualizarTamanhoFonte();
}

function atualizarTamanhoFonte() {
    document.getElementById('editor').style.fontSize = tamanhoFonte + 'px';
}

//alteração do estilo da fonte

function mudarFonte() {
    var editor = document.getElementById('editor');
    var novaFonte = document.getElementById('fontSelect').value;
    editor.style.fontFamily = novaFonte;
}

//alteração da cor da fonte

function mudarFonte() {
    var editor = document.getElementById('editor');
    var novaFonte = document.getElementById('fontSelect').value;
    editor.style.fontFamily = novaFonte;
}

function mudarCorFonte() {
    var editor = document.getElementById('editor');
    var novaCor = document.getElementById('corFonte').value;
    editor.style.color = novaCor;
}


//salvar pdf

function salvarPDF() {
    window.print();
}

