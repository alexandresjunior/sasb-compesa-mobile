// TODO: Remover
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

export const filtrarBarragensPeloNome = (barragens, busca) => {
    if (!busca) {
        return barragens;
    }

    const regex = new RegExp(busca, 'i');
    return barragens.filter(barragem => regex.test(barragem.nome));
}