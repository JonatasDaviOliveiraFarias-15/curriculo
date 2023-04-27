function mostra1(id) {
    var conteudo = document.querySelector(id);
    conteudo.classList.toggle('ativo1');
}
function mostra2(id) {
    var conteudo = document.querySelector(id);
    conteudo.classList.toggle('ativo2');
}
function mostra3(id) {
    var conteudo = document.querySelector(id);
    conteudo.classList.toggle('ativo3');
}
function mostra4(id) {
    var conteudo = document.querySelector(id);
    conteudo.classList.toggle('ativo4');
}
function mostra5(id) {
    var conteudo = document.querySelector(id);
    conteudo.classList.toggle('ativo5');
}
var imgbaixo1 = "seta_baixo1.jpg"
var imgcima1 = "seta_cima1.jpg"
function trocar1() {
    document.getElementById("seta1").src=imgcima1;
    let aux = imgcima1;
    imgcima1 = imgbaixo1;
    imgbaixo1 = aux;
}
var imgbaixo2 = "seta_baixo2.jpg"
var imgcima2 = "seta_cima2.jpg"
function trocar2() {
    document.getElementById("seta2").src=imgcima2;
    let aux = imgcima2;
    imgcima2 = imgbaixo2;
    imgbaixo2 = aux;
}
var imgbaixo3 = "seta_baixo3.jpg"
var imgcima3 = "seta_cima3.jpg"
function trocar3() {
    document.getElementById("seta3").src=imgcima3;
    let aux = imgcima3;
    imgcima3 = imgbaixo3;
    imgbaixo3 = aux;
}
var imgbaixo4 = "seta_baixo4.jpg"
var imgcima4 = "seta_cima4.jpg"
function trocar4() {
    document.getElementById("seta4").src=imgcima4;
    let aux = imgcima4;
    imgcima4 = imgbaixo4;
    imgbaixo4 = aux;
}
var imgbaixo5 = "seta_baixo5.jpg"
var imgcima5 = "seta_cima5.jpg"
function trocar5() {
    document.getElementById("seta5").src=imgcima5;
    let aux = imgcima5;
    imgcima5 = imgbaixo5;
    imgbaixo5 = aux;
}