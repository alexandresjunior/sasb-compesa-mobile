export const replaceKeywords = (relatorio, barragem, formulario) => {
    return relatorio
        .replace("[$num_vistoria$]", "A DEFINIR")
        .replace("[$nome_barragem$]", barragem.nome)
        .replace("[$data$]", "A DEFINIR")
        .replace("[$titularidade$]", barragem.titularidade)
        .replace("[$localizacao_barragem$]", `${barragem.localizacao.municipio} - ${barragem.localizacao.estado}`)
        .replace("[$outorga_captacao$]", barragem.outorgaCaptacao)
        .replace("[$outorga_construcao$]", barragem.outorgaObraHidrica)
        .replace("[$data_construcao$]", barragem.anoConstrucao)
        .replace("[$responsavel_construcao$]", "A DEFINIR")
        .replace("[$bacia_hidrografica$]", barragem.detalhes.bacia)
        .replace("[$curso_de_agua_barrado$]", "A DEFINIR")
        .replace("[$latitude$]", barragem.localizacao.latitude)
        .replace("[$longitude$]", barragem.localizacao.longitude)
        .replace("[$sistema_coordenadas$]", "A DEFINIR")
        .replace("[$finalidade$]", "A DEFINIR")
        .replace("[$volume$]", barragem.detalhes.capacidadeM3)
        .replace("[$area_inundada$]", barragem.detalhes.areaInundadaM2)
        .replace("[$cota$]", "A DEFINIR")
        .replace("[$area_bacia_hidraulica$]", barragem.detalhes.areaBaciaHidraulicaM2)
        .replace("[$area_bacia_hidrografica$]", barragem.detalhes.areaBaciaHidrograficaKm2)
        .replace("[$tipo_de_barragem$]", barragem.detalhes.tipo)
        .replace("[$cota_do_coroamento$]", barragem.detalhes.cotaCoroamentoM)
        .replace("[$largura_crista$]", "A DEFINIR")
        .replace("[$altura_maxima$]", barragem.detalhes.alturaM)
        .replace("[$comprimento_barragem$]", barragem.detalhes.comprimentoM)
        .replace("[$comprimento_vertedor$]", "A DEFINIR")
        .replace("[$cota_soleira$]", "A DEFINIR")
        .replace("[$risco$]", barragem.seguranca.classificacaoDeRisco)
        .replace("[$dano_potencial_associado$]", barragem.seguranca.danoPotencialAssociado)
        .replace("[$dados_inspecao$]", "A DEFINIR")
        .replace("[$ficha_inspecao$]", body(formulario))
        .replace("[$nivel_de_perigo_global$]", "A DEFINIR")
        .replace("[$recomendacoes$]", "A DEFINIR")
        .replace("[$nome_inspetor$]", "A DEFINIR")
        .replace("[$ocupacao_inspetor$]", "A DEFINIR")
        .replace("[$crea_inspetor$]", "A DEFINIR")
        .replace("[$cpf_inspetor$]", "A DEFINIR")
        .replace("[$nome_responsavel_tecnico$]", "A DEFINIR")
        .replace("[$nome_diretor$]", "A DEFINIR")
        .replace("[$diretoria_tecnica$]", "A DEFINIR")
        .replace("[$anexos$]", anexos(formulario));
}

export const body = (formulario) => {
    var html = '<h1>FICHA DE INSPEÇÃO</h1>';

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
                                <td style="text-align: center;">${item.resposta.situacao.sigla}</td>
                                <td style="text-align: center;">${item.resposta.magnitude.sigla}</td>
                                <td style="text-align: center;">${item.resposta.nivelPerigo.sigla}</td>
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
                        <td style="text-align: center;">${item.resposta.situacao?.sigla}</td>
                        <td style="text-align: center;">${item.resposta.magnitude?.sigla}</td>
                        <td style="text-align: center;">${item.resposta.nivelPerigo?.sigla}</td>
                    </tr>
                `
            }

            html = html + `</table>`
        }

        html = html + `</div>`
    }

    return html;
};

export const anexos = (formulario) => {
    var indiceFigura = 1;
    var html = '<h1>ANEXOS</h1>';

    for (let i in formulario) {
        const questao = formulario[i];

        html = html + `
            <div style="page-break-inside: avoid; page-break-after: auto;">
            `

        if (!!questao.subsecoes) {
            for (let j in questao.subsecoes) {
                const subsecao = questao.subsecoes[j];

                html = html + `
                `

                if (!!subsecao.itens) {
                    html = html + `
                        
                        `
                    for (let k in subsecao.itens) {
                        const item = subsecao.itens[k];

                        const descricao = item.descricao;
                        const situacao = item.resposta.situacao;
                        const magnitude = item.resposta.magnitude;
                        const nivelPerigo = item.resposta.nivelPerigo;

                        for (let l in item.resposta.anexos) {
                            const anexo = item.resposta.anexos[l];

                            const source = `data:image/jpg;base64,${anexo.base64}`;

                            const legenda = `<b>Figura ${indiceFigura}: </b>${descricao} com situação classificada como ${situacao?.sigla}, magnitude como ${magnitude?.sigla} e nível de perigo igual a ${nivelPerigo?.sigla}.`;

                            html = html + `
                            <div style="display: flex; align-items: center; justify-content: center; flex-direction: column; margin-bottom: 10px;">
                                <img src="${source}" alt="${legenda}" width="300" height="300" />
                                <small>${legenda}</small>
                            </div>
                            `

                            indiceFigura = indiceFigura + 1
                        }

                        html = html + `
                            
                        `
                    }

                }

                html = html + `</div>`
            }
        }

        if (!!questao.itens) {
            html = html + `

            `

            for (let j in questao.itens) {
                const item = questao.itens[j];

                const descricao = item.descricao;
                const situacao = item.resposta.situacao;
                const magnitude = item.resposta.magnitude;
                const nivelPerigo = item.resposta.nivelPerigo;

                for (let l in item.resposta.anexos) {
                    const anexo = item.resposta.anexos[l];

                    const source = `data:image/jpg;base64,${anexo.base64}`;

                    const legenda = `<b>Figura ${indiceFigura}: </b>${descricao} com situação classificada como ${situacao?.sigla}, magnitude como ${magnitude?.sigla} e nível de perigo igual a ${nivelPerigo?.sigla}.`;

                    html = html + `
                    <div style="display: flex; align-items: center; justify-content: center; flex-direction: column; margin-bottom: 10px;">
                        <img src="${source}" alt="${legenda}" width="300" height="300" />
                        <small>${legenda}</small>
                    </div>
                    `

                    indiceFigura = indiceFigura + 1
                }

                html = html + `

                `
            }
        }

        html = html + `</div>`
    }

    return html;
}