console.log('Script carregado!');
const taxaMoeda = {
    BRL: 1,
    USD: 5.07,
    EUR: 5.45,
    GBP: 6.34,
    JPY: 0.033
};

function converterMoeda(quantia, daMoeda, paraMoeda) {
    const taxa = taxaMoeda[daMoeda] / taxaMoeda[paraMoeda] ;
    return quantia * taxa;
}


    document.getElementById('moedaConverter').addEventListener('submit', function(event) {
        event.preventDefault();

        const quantia = parseFloat(document.getElementById('quantia').value);
        const daMoeda = document.getElementById('daMoeda').value;
        const paraMoeda = document.getElementById('paraMoeda').value;

        if (isNaN(quantia) || quantia <= 0) {
            document.getElementById('result').innerText = 'Por favor, insira um valor válido.';
            return;
        }

        const quantiaConvertida = converterMoeda(quantia, daMoeda, paraMoeda);
        document.getElementById('result').innerHTML = 'Valor convertido: ' + quantiaConvertida.toFixed(2) + ' ' + paraMoeda;
    });

