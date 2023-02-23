import { Asset } from 'expo-asset';
import { manipulateAsync } from 'expo-image-manipulator';

export const generateReport = async () => {
    const coverAsset = Asset.fromModule(require('../../assets/images/background_cover.jpg'));
    const coverImage = await manipulateAsync(coverAsset.localUri ?? coverAsset.uri, [], { base64: true });

    const pageAsset = Asset.fromModule(require('../../assets/images/background_page.jpg'));
    const pageImage = await manipulateAsync(pageAsset.localUri ?? pageAsset.uri, [], { base64: true });

    return `
        <!DOCTYPE html>
        <html lang="pt-br">
            <head>
                <meta charset="utf-8"/>
                <style>
                    @page {
                        size: A4;
                        margin: 0;
                    }

                    @media print {
                        html, body, section {
                            width: 210mm;
                            height: 297mm;
                        }
                    }

                    .cover {
                        background-image: url("data:image/jpeg;base64,${coverImage.base64}");
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center center; 
                        page-break-after: always;
                    }

                    .page {
                        background-image: url("data:image/jpeg;base64,${pageImage.base64}");
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center center;
                        page-break-after: always;
                    }

                    .container {
                        width: 210mm;
                        height: 297mm;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
            
                    .cover-title {
                        width: 500px;
                        height: 200px;
                        text-align: center;
                        font-size: 28px;
                        color: rgba(58, 67, 156);
                        font-weight: bold;
                        font-family: Arial, sans-serif;
                    }

                    .cover-footer {
                        width: 100%;
                        height: 10%;
                        background-color: #f2f2f2;
                        border-top: 1px solid #ccc;
                        text-align: center;
                        padding: 20px;
                    }
                </style>
            </head>
            <body>
                <section class="cover">
                    <div class="container">
                        <div class="cover-title">
                            [$num_vistoria$]º RELATÓRIO DE INSPEÇÃO DE SEGURANÇA REGULAR DA BARRAGEM [$nome_barragem$]
                        </div>
                    </div>

                    <p align=right style='margin-bottom:0cm;margin-bottom:.0001pt;
                        text-align:right;line-height:150%;mso-layout-grid-align:none;text-autospace:
                        none'><span style='font-size:12px;line-height:150%;font-family:
                        Arial;color:#94A8B3;'>Recife, [$data$].</span></p>
                </section>

                <section class="page">

                </section>
            </body>
        </html>
    `;
}

export const replaceKeywords = (relatorio, barragem, formulario) => {
    return relatorio
        .replaceAll("[$num_vistoria$]", "A DEFINIR")
        .replaceAll("[$nome_barragem$]", barragem.nome)
        .replaceAll("[$data$]", "A DEFINIR")
        .replaceAll("[$titularidade$]", barragem.titularidade)
        .replaceAll("[$localizacao_barragem$]", `${barragem.localizacao.municipio} - ${barragem.localizacao.estado}`)
        .replaceAll("[$outorga_captacao$]", barragem.outorgaCaptacao)
        .replaceAll("[$outorga_construcao$]", barragem.outorgaObraHidrica)
        .replaceAll("[$data_construcao$]", barragem.anoConstrucao)
        .replaceAll("[$responsavel_construcao$]", "A DEFINIR")
        .replaceAll("[$bacia_hidrografica$]", barragem.detalhes.bacia)
        .replaceAll("[$curso_de_agua_barrado$]", "A DEFINIR")
        .replaceAll("[$latitude$]", barragem.localizacao.latitude)
        .replaceAll("[$longitude$]", barragem.localizacao.longitude)
        .replaceAll("[$sistema_coordenadas$]", "A DEFINIR")
        .replaceAll("[$finalidade$]", "A DEFINIR")
        .replaceAll("[$volume$]", barragem.detalhes.capacidadeM3)
        .replaceAll("[$area_inundada$]", barragem.detalhes.areaInundadaM2)
        .replaceAll("[$cota$]", "A DEFINIR")
        .replaceAll("[$area_bacia_hidraulica$]", barragem.detalhes.areaBaciaHidraulicaM2)
        .replaceAll("[$area_bacia_hidrografica$]", barragem.detalhes.areaBaciaHidrograficaKm2)
        .replaceAll("[$tipo_de_barragem$]", barragem.detalhes.tipo)
        .replaceAll("[$cota_do_coroamento$]", barragem.detalhes.cotaCoroamentoM)
        .replaceAll("[$largura_crista$]", "A DEFINIR")
        .replaceAll("[$altura_maxima$]", barragem.detalhes.alturaM)
        .replaceAll("[$comprimento_barragem$]", barragem.detalhes.comprimentoM)
        .replaceAll("[$comprimento_vertedor$]", "A DEFINIR")
        .replaceAll("[$cota_soleira$]", "A DEFINIR")
        .replaceAll("[$risco$]", barragem.seguranca.classificacaoDeRisco)
        .replaceAll("[$dano_potencial_associado$]", barragem.seguranca.danoPotencialAssociado)
        .replaceAll("[$dados_inspecao$]", "A DEFINIR")
        .replaceAll("[$ficha_inspecao$]", body(formulario))
        .replaceAll("[$nivel_de_perigo_global$]", "A DEFINIR")
        .replaceAll("[$recomendacoes$]", "A DEFINIR")
        .replaceAll("[$nome_inspetor$]", "A DEFINIR")
        .replaceAll("[$ocupacao_inspetor$]", "A DEFINIR")
        .replaceAll("[$crea_inspetor$]", "A DEFINIR")
        .replaceAll("[$cpf_inspetor$]", "A DEFINIR")
        .replaceAll("[$nome_responsavel_tecnico$]", "A DEFINIR")
        .replaceAll("[$nome_diretor$]", "A DEFINIR")
        .replaceAll("[$diretoria_tecnica$]", "A DEFINIR")
        .replaceAll("[$anexos$]", anexos(formulario));
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