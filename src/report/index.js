import { Asset } from 'expo-asset';
import { manipulateAsync } from 'expo-image-manipulator';

export const generateReport = async (barragem, formulario) => {
    const coverAsset = Asset.fromModule(require('../../assets/images/background_cover.jpg'));
    const coverImage = await manipulateAsync(coverAsset.localUri ?? coverAsset.uri, [], { base64: true });

    const pageAsset = Asset.fromModule(require('../../assets/images/background_page.jpg'));
    const pageImage = await manipulateAsync(pageAsset.localUri ?? pageAsset.uri, [], { base64: true });

    const cover = await generateReportCover(barragem, formulario)
    const summary = await generateReportSummary(barragem, formulario)
    const presentation = await generateReportPresentationSection(barragem, formulario)
    const inspection = await generateReportInspectionSection(barragem, formulario)
    const dangerEvaluation = await generateReportDangerEvaluationSection(barragem, formulario)
    const recommendation = await generateReportRecommendationSection(barragem, formulario)
    const attachments = await generateReportAttachmentsSection(barragem, formulario)

    let content = `
        <!DOCTYPE html>
        <html lang="pt-br">
            <head>
                <meta charset="utf-8"/>
                <style>
                    @page {
                        size: A4;
                    }

                    @media print {
                        html, body {
                            font-family: Arial, sans-serif;
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

                    p {
                        font-size: 14px;
                        text-align: justify;
                    }

                    h1 {
                        font-size: 14px;
                        font-weight: bold;
                        color: rgba(58, 67, 156);
                    }

                    h2 {
                        font-size: 12px;
                        font-weight: bold;
                        color: rgba(58, 67, 156);
                    }

                    .report-section {
                        margin: 30mm;
                        page-break-after: always;
                    }

                    .report-container {
                        width: 210mm;
                        height: 297mm;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .report-title {
                        width: 500px;
                        height: 200px;
                        text-align: center;
                        font-size: 28px;
                        color: rgba(58, 67, 156);
                        font-weight: bold;
                        font-family: Arial, sans-serif;
                    }
                </style>
            </head>

            <body>
        `;

    content = content + cover

    content = content + summary

    content = content + presentation

    content = content + inspection

    content = content + dangerEvaluation

    content = content + recommendation

    content = content + attachments

    content = content + `
                </body>
            </html>
        `;

    return replaceKeywords(content, barragem, formulario)
}

export const pageTest = async () => {
    const coverAsset = Asset.fromModule(require('../../assets/images/background_cover.jpg'));
    const coverImage = await manipulateAsync(coverAsset.localUri ?? coverAsset.uri, [], { base64: true });

    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Exemplo de página HTML com imagem de fundo</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    background-image: url("data:image/jpeg;base64,${coverImage.base64}");
                    background-repeat: no-repeat;
                    background-size: cover;
                }

                .container {
                    max-width: 210mm;
                    max-height: 297mm;
                    margin: 0 auto;
                    padding: 2.5cm;
                    box-sizing: border-box;
                }

                p {
                    margin: 1.5em 0;
                    line-height: 1.5;
                    text-align: justify;
                    text-indent: 1.5em;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Título da Página</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tortor quis tortor accumsan vestibulum. Maecenas sagittis pharetra neque, sit amet eleifend velit sollicitudin ut. Duis pellentesque rhoncus finibus. Nullam in bibendum urna. Fusce non elit et odio convallis rutrum. Sed hendrerit justo et dolor aliquam, vel ullamcorper mi luctus. Aenean sed luctus velit. Sed et interdum metus. Sed tristique semper nisl in convallis. Curabitur placerat, massa eget auctor viverra, lectus tellus consequat augue, in cursus dolor nulla vel nulla. Integer pharetra enim eget elit iaculis, quis rhoncus arcu gravida. Vestibulum aliquet sit amet nisl in congue.</p>
                <p>Aliquam erat volutpat. Nunc nec ipsum massa. Maecenas faucibus, quam nec suscipit finibus, quam purus euismod odio, in pharetra velit velit vitae nibh. Nullam et mauris mauris. Suspendisse potenti. Sed eu consectetur elit. Vestibulum ac elit quis felis tristique mollis quis a erat. Duis consectetur velit sit amet libero gravida, quis maximus metus rutrum. Sed in lectus ac velit vehicula pharetra. Nam ac lorem nisl. Integer non facilisis orci. Fusce hendrerit sollicitudin tellus, ut feugiat ipsum bibendum sed.</p>
                <p>Aliquam erat volutpat. Nunc nec ipsum massa. Maecenas faucibus, quam nec suscipit finibus, quam purus euismod odio, in pharetra velit velit vitae nibh. Nullam et mauris mauris. Suspendisse potenti. Sed eu consectetur elit. Vestibulum ac elit quis felis tristique mollis quis a erat. Duis consectetur velit sit amet libero gravida, quis maximus metus rutrum. Sed in lectus ac velit vehicula pharetra. Nam ac lorem nisl. Integer non facilisis orci. Fusce hendrerit sollicitudin tellus, ut feugiat ipsum bibendum sed.</p>
                <p>Aliquam erat volutpat. Nunc nec ipsum massa. Maecenas faucibus, quam nec suscipit finibus, quam purus euismod odio, in pharetra velit velit vitae nibh. Nullam et mauris mauris. Suspendisse potenti. Sed eu consectetur elit. Vestibulum ac elit quis felis tristique mollis quis a erat. Duis consectetur velit sit amet libero gravida, quis maximus metus rutrum. Sed in lectus ac velit vehicula pharetra. Nam ac lorem nisl. Integer non facilisis orci. Fusce hendrerit sollicitudin tellus, ut feugiat ipsum bibendum sed.</p>
            </div>
        </body>
        </html>
    `
}

export const generateReportCover = async (barragem, formulario) => {
    const html = `
        <section class="cover">
            <div class="report-container">
                <div class="report-title">
                    [$num_vistoria$]º RELATÓRIO DE INSPEÇÃO DE SEGURANÇA REGULAR DA BARRAGEM [$nome_barragem$]
                </div>
            </div>
            <p>Recife, [$data$].</p>
        </section>
    `

    return replaceKeywords(html, barragem, formulario)
}

export const generateReportSummary = async (barragem, formulario) => {
    const html = `
        <div class="report-section">
            <h1>SUMÁRIO</h1>
            <p>1. Apresentação</p>
            <p>1.1 Objetivo</p>
            <p>1.2 Dados da Barragem</p>
            <p>1.3 Principais Características</p>
            <p>2. Ficha de Inspeção</p>
            <p>3. Avaliação do Nível de Perigo da Barragem</p>
            <p>4. Recomendações</p>
            <p>5. Anexos</p>
        </div>
    `

    return replaceKeywords(html, barragem, formulario)
}

export const generateReportPresentationSection = async (barragem, formulario) => {
    const html = `
        <div class="report-section">
            <h1>1. APRESENTAÇÃO</h1>
            <h2>1.1 OBJETIVO</h2>
            <p>O presente relatório tem por objetivo apresentar os resultados da [$num_vistoria%]ª inspeção de segurança regular da barragem [$nome_barragem$], sob a responsabilidade da [$titularidade$]. A vistoria foi realizada no dia [$data$].</p>
            <p>A Resolução APAC Nº 03/2017-DC, de 28 de dezembro de 2017, estabelece a periodicidade de execução ou atualização, a qualificação dos responsáveis técnicos, o conteúdo mínimo e o nível de detalhamento do Plano de Segurança da Barragem, das Inspeções de Segurança Regular e Especial, da Revisão Periódica de Segurança de Barragem e do Plano de Ação de Emergência, conforme art. 8º, 9º, 10º, 11º e 12º da Lei nº 12.334, de 20 de setembro de 2010, que estabelece a Política Nacional de Segurança de Barragens – PNSB.</p>
            <p>Os empreendedores, em face da sua experiência acumulada, têm a liberdade de adotar seus próprios modelos de ficha de inspeção e relatório, devendo, no entanto, levar em consideração os normativos emitidos pelas suas entidades fiscalizadoras.</p>
            <p>A inspeção foi realizada visando à verificação das condições estruturais e operacionais do empreendimento após o período construtivo, e a avaliação das ações corretivas e investigativas recomendadas na vistoria anterior.</p>
        
            <h2>1.2 DADOS DA BARRAGEM</h2>
            <p><b>Nome: </b>Barragem [$nome_barragem$].</p>
            <p><b>Empreendedor ou Responsável Legal: </b>Companhia Pernambucana de Saneamento.</p>
            <p><b>Localização: </b>[$localizacao_barragem$].</p>
            <p><b>Outorga de Captação: </b>[$outorga_captacao$].</p>
            <p><b>Outorga de Construção: </b>[$outorga_construcao$].</p>
            <p><b>Data da Construção: </b>[$data_construcao$].</p>
            <p><b>Responsável pela Construção: </b>[$responsavel_construcao$].</p>

            <h2>1.3 PRINCIPAIS CARACTERÍSTICAS</h2>
            <p><b>Bacia: </b>[$bacia_hidrografica$].</p>
            <p><b>Curso d’água barrado:  </b>[$curso_de_agua_barrado$].</p>
            <p><b>Coordenadas:</b></p>
            <p>Latitude: [$latitude$]   Longitude: [$longitude$]</p>
            <p>Sistema de coordenadas: [$sistema_coordenadas$]</p>
            <p><b>Finalidade:</b> [$finalidade$].</p>
            <p><b>Capacidade do Reservatório:</b> [$volume$]. Fonte: Volume I do Plano de Segurança da Barragem (PSB).</p>
            <p><b>Área Inundada:</b> [$volume$]. aproximadamente [$area_inundada$] (cota [$cota$]). Fonte: Volume I do Plano de Segurança da Barragem (PSB).</p>
            <p><b>Área da Bacia Hidráulica:</b> [$area_bacia_hidraulica$].</p>
            <p><b>Área da Bacia Hidrográfica:</b> [$area_bacia_hidrografica$]. Fonte: Volume I do PSB.</p>
            <p><b>Tipo de Barragem:</b> [$tipo_de_barragem$].</p>
            <p><b>Cota do Coroamento:</b> aproximadamente [$cota_do_coroamento$]. Fonte: Volume I do PSB.</p>
            <p><b>Largura da Crista:</b> [$largura_crista$].</p>
            <p><b>Altura Máxima:</b> aproximadamente [$altura_maxima$], não considerando a fundação. Fonte: PE3D.</p>
            <p><b>Comprimento da Barragem:</b> [$comprimento_vertedor$] (medida realizada em campo com uma trena).</p>
            <p><b>Comprimento do Vertedor:</b> [$comprimento_barragem$] (medida realizada em campo com uma trena).</p>
            <p><b>Cota da Soleira:</b> aproximadamente [$cota_soleira$]. Fonte: Volume I do PSB.</p>
            <p><b>Classificação da Barragem Segundo Órgão Fiscalizador:</b> Risco [$risco$], Dano Potencial [$dano_potencial_associado$] (conforme Resolução CNRH nº 143/2012).</p>
        </div>
    `

    return replaceKeywords(html, barragem, formulario)
}

export const generateReportInspectionSection = async (barragem, formulario) => {
    const html = `
        <div class="report-section">
            <h1>2. FICHA DE INSPEÇÃO</h1>
            <p>Apresenta-se, a seguir, a Ficha de Inspeção da Barragem [$nome_barragem$]. O registro fotográfico das anomalias identificadas será apresentado sequencialmente.</p>
            <div>[$dados_inspecao$]</div>
            <div>[$ficha_inspecao$]</div>
        </div>
    `

    return replaceKeywords(html, barragem, formulario)
}

export const generateReportDangerEvaluationSection = async (barragem, formulario) => {
    const html = `
        <div class="report-section">
            <h1>3. AVALIAÇÃO DO NÍVEL DE PERIGO DA BARRAGEM</h1>
            <p>O Nível de Perigo Global da Barragem (NPGB) é [$nivel_de_perigo_global$], consoante com o Art.12º da Resolução nº 03/2017-DC de 28/12/2017, elaborada pela Agência Pernambucana de Águas e Climas – APAC.</p>
        </div>
    `

    return replaceKeywords(html, barragem, formulario)
}

export const generateReportRecommendationSection = async (barragem, formulario) => {
    const html = `
        <div class="report-section">
            <h1>4. RECOMENDAÇÕES</h1>
            <p>[$recomendacoes$]</p>

            <p>Recife, [$data$].</p>

            <p>Ciente,</p>
            <table cellpadding="1" cellspacing="1">
                <tbody>
                    <tr>
                        <td>
                            <p align="center">_______________________________________</p>
                            <p align="center">[$nome_inspetor$]</p>
                            <p align="center">[$ocupacao_inspetor$]</p>
                            <p align="center">[$crea_inspetor$] &ndash; [$cpf_inspetor$]</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p align="center">_______________________________________</p>
                            <p align="center">[$nome_responsavel_tecnico$]</p>
                            <p align="center">Respons&aacute;vel T&eacute;cnico pela Barragem</p>
                            <p align="center">Gerente de Seguran&ccedil;a de Barragens</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p align="center">_______________________________________</p>
                            <p align="center">[$nome_diretor$]</p>
                            <p align="center">[$diretoria_tecnica$]</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `

    return replaceKeywords(html, barragem, formulario)
}

export const generateReportAttachmentsSection = async (barragem, formulario) => {
    const html = `
        <div class="report-section">
            <h1>5. ANEXOS</h1>
            <p>[$anexos$]</p>
        </div>
    `

    return replaceKeywords(html, barragem, formulario)
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