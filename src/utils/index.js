export const obterPaginasDoFormulario = (formulario) => {
    const paginas = [];

    formulario?.map((secao) => {
        if (secao.subsecoes) {
            secao.subsecoes.map((subsecao) => {
                return (
                    paginas.push({
                        titulo: `${secao.codigo} - ${secao.nome}`,
                        subtitulo: `${subsecao.codigo} - ${subsecao.nome}`,
                        itens: subsecao.itens
                    })
                )
            })
        } else {
            return (
                paginas.push({
                    titulo: `${secao.codigo} - ${secao.nome}`,
                    subtitulo: "",
                    itens: secao.itens
                })
            )
        }
    })

    return paginas;
}