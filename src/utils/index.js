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

export const formatarData = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return { data: formattedDate, hora: formattedTime };
}
