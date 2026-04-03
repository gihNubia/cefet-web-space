// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

let calcularEl = document.querySelector('#calcular');
let resultadoEl = document.querySelector('#resultado');

f_calc = function() {
    let m1 = document.querySelector('#massa1').value;
    let m2 = document.querySelector('#massa2').value;
    let g = document.querySelector('#constante').value;
    let d = document.querySelector('#distancia').value;

    f_grav = (g*m1 * m2) / d**2;
    resultadoEl.value = f_grav;
}

calcularEl.addEventListener('click', f_calc);