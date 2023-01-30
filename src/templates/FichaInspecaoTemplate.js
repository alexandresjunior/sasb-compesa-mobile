export const header = `
    <!DOCTYPE html>
    <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        </head>
        
    <body>
        <h1>FICHA DE INSPEÇÃO</h1>
`;

export const body = (formulario) => {
    var html = '';

    for (let i in formulario) {
        const questao = formulario[i];

        html = html + `
            <div style="page-break-inside: avoid; page-break-after: auto;">
                <h2>${questao.codigo} - ${questao.nome}</h2>
            `

        if (!!questao.subsecoes) {
            for (let j in questao.subsecoes) {
                const subsecao = questao.subsecoes[j];

                html = html + `
                    <div style="page-break-inside: avoid;">
                        <h3>${subsecao.codigo} - ${subsecao.nome}</h3>
                `

                if (!!subsecao.itens) {
                    html = html + `
                        <table style="page-break-inside: avoid; width: 100%;">
                            <tr>
                                <th>Item</th>
                                <th style="text-align: left; padding: 1px 5px;">Localização / Anomalia</th>
                                <th>Situação</th>
                                <th>Magnitude</th>
                                <th>NP</th>
                            </tr>
                        `
                    for (let k in subsecao.itens) {
                        const item = subsecao.itens[k];

                        html = html + `
                            <tr>
                                <td style="text-align: center;">${item.indice}</td>
                                <td style="padding: 1px 5px;">${item.descricao}</td>
                                <td style="text-align: center;">${item.resposta.situacao}</td>
                                <td style="text-align: center;">${item.resposta.magnitude}</td>
                                <td style="text-align: center;">${item.resposta.nivelPerigo}</td>
                            </tr>
                        `
                    }

                    html = html + `</table>`
                }

                html = html + `</div>`
            }
        }

        if (!!questao.itens) {
            html = html + `
                <table style="page-break-inside: avoid; width: 100%;">
                    <tr>
                        <th>Item</th>
                        <th style="text-align: left; padding: 1px 5px;">Localização / Anomalia</th>
                        <th>Situação</th>
                        <th>Magnitude</th>
                        <th>NP</th>
                    </tr>
                `

            for (let j in questao.itens) {
                const item = questao.itens[j];

                html = html + `
                    <tr>
                        <td style="text-align: center;">${item.indice}</td>
                        <td style="padding: 1px 5px;">${item.descricao}</td>
                        <td style="text-align: center;">${item.resposta.situacao}</td>
                        <td style="text-align: center;">${item.resposta.magnitude}</td>
                        <td style="text-align: center;">${item.resposta.nivelPerigo}</td>
                    </tr>
                `
            }

            html = html + `</table>`
        }

        html = html + `</div>`
    }

    return html;
};

export const footer = `
</body>
</html>
`;
