function gerarPdf() {
    var element = document.getElementById('conteudo-curriculo');

    html2pdf(element, {
        margin: 15,
        filename: 'curriculo.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}