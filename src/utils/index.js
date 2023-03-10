// TODO: Remover
export const obterPaginasDoFormulario = (formulario) => {
    const paginas = []
    let id = 0

    formulario?.map((secao) => {
        if (secao.subsecoes) {
            secao.subsecoes.map((subsecao) => {
                id = id + 1;

                return (
                    paginas.push({
                        id: id,
                        titulo: `${secao.codigo} - ${secao.nome}`,
                        subtitulo: `${subsecao.codigo} - ${subsecao.nome}`,
                        itens: subsecao.itens
                    })
                )
            })
        } else {
            id = id + 1;
            return (
                paginas.push({
                    id: id,
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

export const formatarData = (data) => {
    let dia = data.getDate().toString().padStart(2, '0');
    let mes = (data.getMonth() + 1).toString().padStart(2, '0');
    let ano = data.getFullYear().toString();

    return dia + '/' + mes + '/' + ano;
}