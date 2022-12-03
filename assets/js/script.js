
function verificaIade(valor) {
    document.getElementById('btn-sim');

    if (valor === 1) {
        window.location.href = 'home.html?valor=1';
    } else {
        window.location.href = 'siteNegado.html';
    }
    
}