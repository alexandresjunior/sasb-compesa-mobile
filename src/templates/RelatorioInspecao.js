export const header = `
    <!DOCTYPE html>
    <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
        </head>
        
    <body>
        <h1>RELATÓRIO DE INSPEÇÃO</h1>
`;

export const body = (formulario) => {
    formulario?.map((questao) => {
        return `<h2>${questao.codigo} - ${questao.nome}</h2>`

    //     questao.subsecoes ? (
    //         questao.subsecoes?.map((subsecao) => {
    //             `<h3>${subsecao.codigo} - ${subsecao.nome}}</h3>`;

    //             subsecao.itens.map((item) => {
    //                 return (
    //                     `<p>${item.descricao}</p>
    //                      <p>Situação: <b>${item.resposta.situacao}</b></p>
    //                      <p>Magnitude: <b>${item.resposta.magnitude}</b></p>
    //                      <p>Nível de Perigo: <b>${item.resposta.nivelPerigo}</b></p>`
    //                 )
    //             })
    //         })
    //     ) : (
    //         questao.itens.map((item) => {
    //             `<p>${item.descricao}</p>
    //                      <p>Situação: <b>${item.resposta.situacao}</b></p>
    //                      <p>Magnitude: <b>${item.resposta.magnitude}</b></p>
    //                      <p>Nível de Perigo: <b>${item.resposta.nivelPerigo}</b></p>`
    //         })
    //     )
    })
};

export const footer = `
</body>
</html>
`;

