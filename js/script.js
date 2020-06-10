$(document).ready(function() {
    $('#precoproduto').priceFormat({
        prefix: 'R$ ',
        centsSeparator: ',',
        thousandsSeparator: '.'
    });

    $('.mascaraDataNasc').mask('00/00/0000');
    $('.mascaraCPF').mask('999.999.999-99');
    $('.mascaraCEP').mask('99999-999');
});