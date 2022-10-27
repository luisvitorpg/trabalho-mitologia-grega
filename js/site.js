audioFim = new Audio("audio/fim.mp3");

function true1() {
    alert("Acertou! Você é fera!");
    window.location = 'pagina2.html';
}
function false1() {
    alert("Errou! Não fique triste, tente denovo!");
}
function true2() {
    alert("Acertou! Você está de parabéns!");
    window.location = 'pagina3.html';
}
function false2() {
    alert("Não foi dessa vez, vacilou! :(");
}
function true3() {
    window.location = 'fim.html';
    audioFim.play();
    alert("Muito bom! Espetacular!");
}
function false3() {
    alert("Infelizmente, você não está com nada.");
}