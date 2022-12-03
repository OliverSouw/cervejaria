
function verificaIdade(valor) {
    document.getElementById('btn-sim');

    if (valor === 1) {
        window.location.href = 'home.html';
    } else {
        window.location.href = 'siteNegado.html';
    }
    
}