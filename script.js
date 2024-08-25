function showDiv(div) {
    const container = document.querySelectorAll('.circulo');
    // Esconde todas as divs
    container.forEach(div => div.classList.remove('active'));

    // Mostra apenas a div selecionada
    const selectedDiv = document.getElementById(div);
    selectedDiv.classList.add('active');

}
const hamburgue = document.querySelector('.hambergue');
const nav = document.querySelector('.nav-mobile');



hamburgue.addEventListener('click', ()=>{
    nav.classList.toggle('mostrar');
    hamburgue.classList.toggle('ativado');
});