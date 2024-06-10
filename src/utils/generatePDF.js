// generatePdf.js
const PDFPrinter = require('pdfmake');
const moment = require('moment');
const fs = require('fs');

// Função para gerar o PDF de vendas
const generatePDF = (sales, startDate, endDate) => {
    // Configuração de fontes para pdfmake
    const fonts = {
        Roboto: {
            normal: 'node_modules/roboto-font/fonts/Roboto/roboto-regular-webfont.ttf',
            bold: 'node_modules/roboto-font/fonts/Roboto/roboto-bold-webfont.ttf',
            italics: 'node_modules/roboto-font/fonts/Roboto/roboto-italic-webfont.ttf',
            bolditalics: 'node_modules/roboto-font/fonts/Roboto/roboto-bolditalic-webfont.ttf'
        }
    };

    const printer = new PDFPrinter(fonts);

    // Estrutura do documento PDF
    const docDefinition = {
        content: [
            {
                text: `Relatório de Vendas de ${startDate} até ${endDate}`,
                style: 'header'
            },
            {
                table: {
                    headerRows: 1,
                    widths: ['*', '*', '*', '*', '*'],
                    body: [
                        // Cabeçalho da tabela
                        [
                            { text: 'ID', style: 'tableHeader' },
                            { text: 'Nome do Cliente', style: 'tableHeader' },
                            { text: 'Produto', style: 'tableHeader' },
                            { text: 'Valor', style: 'tableHeader' },
                            { text: 'Data da Venda', style: 'tableHeader' }
                        ],
                        // Linhas da tabela
                        ...sales.map(sale => [
                            sale.id,
                            sale.nome_cliente,
                            sale.produto,
                            sale.valor,
                            moment(sale.data_venda).format('DD-MM-YYYY')
                        ])
                    ]

                },
                layout: 'lightHorizontalLines'
            }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                align: center,
                margin: [0, 0, 0, 10]
            },
            tableHeader: {
                bold: true,
                fontSize: 13,
                color: 'black'
            }
        }
    };

    const pdfDoc = printer.createPdfKitDocument(docDefinition);
    pdfDoc.pipe(fs.createWriteStream(`Relatório_de_Vendas_${startDate}_${endDate}.pdf`));
    pdfDoc.end();
};

module.exports = generatePDF;