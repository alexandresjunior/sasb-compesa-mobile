export const inspecoes = [
    {
        id: 1,
        nome: "1° Relátorio de Inspeção de Segurança Regular",
        data: "19/12/2018",
        inspetor: "Eng. Taianne Ellis",
        responsavel: "Eng. Hudson Pedrosa",
        status: "Concluída"
    },
    {
        id: 2,
        nome: "2° Relátorio de Inspeção de Segurança Regular",
        data: "17/12/2019",
        inspetor: "Eng. Taianne Ellis",
        responsavel: "Eng. Hudson Pedrosa",
        status: "Concluída"
    },
    {
        id: 3,
        nome: "3° Relátorio de Inspeção de Segurança Regular",
        data: "16/12/2020",
        inspetor: "Eng. Taianne Ellis",
        responsavel: "Eng. Hudson Pedrosa",
        status: "Concluída"
    },
    {
        id: 4,
        nome: "4° Relátorio de Inspeção de Segurança Regular",
        data: "17/12/2021",
        inspetor: "Eng. Taianne Ellis",
        responsavel: "Eng. Hudson Pedrosa",
        status: "Concluída"
    },
    {
        id: 5,
        nome: "5° Relátorio de Inspeção de Segurança Regular",
        data: "18/12/2022",
        inspetor: "Eng. Taianne Ellis",
        responsavel: "Eng. Hudson Pedrosa",
        status: "Em Andamento"
    }
]

export const inspecao = {
    data: "20/12/2022",
    numVistoria: "05",
    inspetor: "Eng. Taianne Ellis",
    responsavel: "Eng. Hudson Pedrosa"
}

export const barragem = {
    nome: "Jaime Nejaim",
    empreendedor: "COMPESA/GNR Agreste Central",
    bacia: "Olho d'Água/UP03 - Rio Ipojuca",
    cotaAtualNivelAgua: "-",
    municipio: "Caruaru",
    estado: "PE",
    latitude: "-8.357694",
    longitude: "-36.031853",
    sistemaCoordenadas: "SIRGAS 2000",
}

export const listaBarragens = [
    {
        "id": 1,
        "nome": "Bonitinho Novo",
        "diretoria": "DRI",
        "gerencia": "Agreste",
        "coordenacao": "CPR Russas",
        "anoConstrucao": "",
        "outorgaCaptacao": "001/2014_APAC",
        "outorgaObraHidrica": "GMA 087/2021",
        "titularidade": "COMPESA",
        "localizacao": {
            "estado": "PE",
            "municipio": "Bonito",
            "latitude": -8.47061111111111,
            "longitude": -35.6942777777778,
            "linkGoogleEarth": "https://goo.gl/maps/Cnow2QgiUcaGAPvXA"
        },
        "seguranca": {
            "statusPAE": "Em Elaboração",
            "dataEntregaPAE": "-",
            "statusPSB": "Em Elaboração",
            "dataEntregaPSB": "-",
            "classificacao": "A",
            "nivelPerigoGlobalBarragem": "1",
            "classificacaoDeRisco": "ALTO",
            "danoPotencialAssociado": "ALTO",
            "prioridade": 1,
            "possuiRelatorioDeInspecaoRegular": "-",
            "possuiVolume1DoPsb": "-"
        },
        "detalhes": {
            "capacidadeM3": 1836400,
            "alturaM": 10,
            "tipo": "-",
            "material": "-",
            "bacia": "Bacia do Rio Sirinhaém",
            "areaBaciaHidrograficaKm2": 0.35,
            "areaBaciaHidraulicaM2": 0,
            "areaInundadaM2": 0,
            "cotaCoroamentoM": 604,
            "comprimentoM": 105
        },
        "inspecao": {
            "prioridade": 1,
            "frequencia": "ANUAL",
            "mes": "",
            "status": "EM DIA",
            "inspecoes": [
                {
                    "id": 1,
                    "data": "08-07-2019",
                    "anexos": ""
                }
            ]
        },
        "outros": {
            "ana": "SIM",
            "snisb": 7811,
            "pnsb": "SIM",
            "dadosInternos": "-",
            "utiliza": "SIM"
        }
    },
    {
        "id": 2,
        "nome": "Brejinho (Pajeú)",
        "diretoria": "DRI",
        "gerencia": "Agreste",
        "coordenacao": "GPR SERTÃO",
        "anoConstrucao": 1970,
        "outorgaCaptacao": "041/2020_APAC",
        "outorgaObraHidrica": "AND",
        "titularidade": "COMPESA",
        "localizacao": {
            "estado": "PE",
            "municipio": "Triunfo",
            "latitude": -7.86447222222222,
            "longitude": -38.1193888888889,
            "linkGoogleEarth": "https://goo.gl/maps/VADSzPmW9YLAz2qZ9"
        },
        "seguranca": {
            "statusPAE": "Em Elaboração",
            "dataEntregaPAE": "-",
            "statusPSB": "Em Elaboração",
            "dataEntregaPSB": "-",
            "classificacao": "A",
            "nivelPerigoGlobalBarragem": "1",
            "classificacaoDeRisco": "ALTO",
            "danoPotencialAssociado": "ALTO",
            "prioridade": 2,
            "possuiRelatorioDeInspecaoRegular": "-",
            "possuiVolume1DoPsb": "-"
        },
        "detalhes": {
            "capacidadeM3": 283762,
            "alturaM": 16,
            "tipo": "-",
            "material": "Alvenaria de Pedra",
            "bacia": "UP9 - Rio Pajeú",
            "areaBaciaHidrograficaKm2": 0,
            "areaBaciaHidraulicaM2": 0,
            "areaInundadaM2": 58492,
            "cotaCoroamentoM": 909,
            "comprimentoM": 150
        },
        "inspecao": {
            "prioridade": 2,
            "frequencia": "ANUAL",
            "mes": "",
            "status": "PENDENTE",
            "inspecoes": [
                {
                    "id": 1,
                    "data": "19-10-2021",
                    "anexos": ""
                },
                {
                    "id": 2,
                    "data": "20-04-2020",
                    "anexos": ""
                },
                {
                    "id": 3,
                    "data": "02-07-2019",
                    "anexos": ""
                }
            ]
        },
        "outros": {
            "ana": "SIM",
            "snisb": 7811,
            "pnsb": "SIM",
            "dadosInternos": "-",
            "utiliza": "SIM"
        }
    }
]

export var formulario = [
    {
        indice: 1,
        pagina: 1,
        codigo: "A",
        nome: "INFRAESTRUTURA OPERACIONAL",
        itens: [
            {
                indice: 1,
                descricao: "Falta de documentação sobre a barragem",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 2,
                descricao: "Falta de material para manutenção",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 3,
                descricao: "Falta de treinamento do pessoal",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 4,
                descricao: "Precariedade no acesso de veículos",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 5,
                descricao: "Falta de energia elétrica",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 6,
                descricao: "Falta de sistema de comunicação eficiente",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 7,
                descricao: "Falta ou deficiência de cercas de proteção",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 8,
                descricao: "Falta ou deficiência nas placas de aviso",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 9,
                descricao: "Falta de acompanhamento da Administração Regional",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 10,
                descricao: "Falta de manual de operação dos equipamentos hidro e eletromecânicos",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            }
        ]
    },
    {
        indice: 2,
        codigo: "B",
        nome: "BARRAGEM",
        subsecoes: [
            {
                indice: 1,
                pagina: 2,
                codigo: "B.1",
                nome: "PARAMENTO DE MONTANTE",
                itens: [
                    {
                        indice: 1,
                        descricao: "Presença de vegetação",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 2,
                        descricao: "Erosão nos encontros das ombreiras",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 3,
                        descricao: "Ocorrência de fissuras e rachaduras",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 4,
                        descricao: "Ferragem da barragem exposta",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 5,
                        descricao: "Deterioração",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 6,
                        descricao: "Abertura de juntas de dilatação",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    }
                ]
            },
            {
                indice: 2,
                pagina: 3,
                codigo: "B.2",
                nome: "CRISTA",
                itens: [
                    {
                        indice: 1,
                        descricao: "Movimentos diferenciais entre blocos (nas juntas)",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 2,
                        descricao: "Ocorrência de fissuras e rachaduras",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 3,
                        descricao: "Ferragem da barragem exposta",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 4,
                        descricao: "Deterioração da superfície",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 5,
                        descricao: "Juntas de dilatação danificadas",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 6,
                        descricao: "Desalinhamento e/ou ferrugem do guarda-corpo",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 7,
                        descricao: "Corrosão nos postes de iluminação",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 8,
                        descricao: "Corrosão no pórtico",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 9,
                        descricao: "Danos na estrutura do guarda-corpo",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 10,
                        descricao: "Drenos entupidos ou danificados",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 11,
                        descricao: "Vegetação",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 12,
                        descricao: "Guarda-corpo incompleto ou ausente",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    }
                ]
            },
            {
                indice: 3,
                pagina: 4,
                codigo: "B.3",
                nome: "PARAMENTO DE JUSANTE",
                itens: [
                    {
                        indice: 1,
                        descricao: "Presença de vegetação",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 2,
                        descricao: "Sinais de movimento",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 3,
                        descricao: "Ocorrência de fissuras, trincas e rachaduras",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 4,
                        descricao: "Ferragem da barragem exposta",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 5,
                        descricao: "Deterioração",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 6,
                        descricao: "Juntas de dilatação danificadas",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 7,
                        descricao: "Sinais de percolação ou áreas úmidas",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 8,
                        descricao: "Carreamento de material na água dos drenos",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 9,
                        descricao: "Vazão nos drenos de controle",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 10,
                        descricao: "Erosão nos encontros das ombreiras",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    }
                ]
            },
            {
                indice: 4,
                pagina: 5,
                codigo: "B.4",
                nome: "PLATAFORMAS DE JUSANTE",
                itens: [
                    {
                        indice: 1,
                        descricao: "Árvores de grande porte",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 2,
                        descricao: "Sinais de movimento",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 3,
                        descricao: "Ferragem da barragem exposta",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 4,
                        descricao: "Deterioração",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 5,
                        descricao: "Ocorrência de fissuras e rachaduras",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 6,
                        descricao: "Juntas de dilatação danificadas",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 7,
                        descricao: "Sinais de percolação ou áreas úmidas",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 8,
                        descricao: "Banheiros desativados deteriorados e rachados",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 9,
                        descricao: "Guarda-corpo incompleto e/ou ausente e enferrujado",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    }
                ]
            },
            {
                indice: 5,
                pagina: 6,
                codigo: "B.5",
                nome: "INSTRUMENTAÇÃO",
                itens: [
                    {
                        indice: 1,
                        descricao: "Acesso precário aos instrumentos",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 2,
                        descricao: "Piezômetros entupidos ou defeituosos",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 3,
                        descricao: "Marcos de referência defeituosos",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 4,
                        descricao: "Medidores de vazão defeituosos",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 5,
                        descricao: "Outros instrumentos danificados",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 6,
                        descricao: "Falta de instrumentação",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 7,
                        descricao: "Falta de registro de leituras da instrumentação",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 8,
                        descricao: "Marcos superficiais defeituosos ou ausentes",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    }
                ]
            }
        ]
    },
    {
        indice: 3,
        codigo: "C",
        nome: "VERTEDOURO",
        subsecoes: [
            {
                indice: 1,
                pagina: 7,
                codigo: "C.1",
                nome: "CANAL DE APROXIMAÇÃO E RESTITUIÇÃO",
                itens: [
                    {
                        indice: 1,
                        descricao: "Presença de vegetação",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 2,
                        descricao: "Obstrução ou entulhos",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 3,
                        descricao: "Desalinhamento dos muros laterais ou taludes",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 4,
                        descricao: "Ferragem do concreto exposta",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 5,
                        descricao: "Erosão ou escorregamentos nos taludes laterais",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 6,
                        descricao: "Erosão na base dos canais escavados",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 7,
                        descricao: "Erosão na área a jusante do vertedor",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 8,
                        descricao: "Construções irregulares (aterro, estrada, casa, cerca)",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    }
                ]
            },
            {
                indice: 2,
                pagina: 8,
                codigo: "C.2",
                nome: "ESTRUTURA DO VERTEDOURO",
                itens: [
                    {
                        indice: 1,
                        descricao: "Fissuras (trincas ou rachaduras)",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 2,
                        descricao: "Ferragem do concreto exposta",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 3,
                        descricao: "Deterioração",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 4,
                        descricao: "Descalçamento da estrutura",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 5,
                        descricao: "Juntas de dilatação danificadas",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 6,
                        descricao: "Sinais de deslocamento da estrutura",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 7,
                        descricao: "Vegetação e entulho",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 8,
                        descricao: "Erosão nos contatos dos muros",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 9,
                        descricao: "Sinais de percolação ou áreas úmidas",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 10,
                        descricao: "Carreamento de material na água dos drenos",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 11,
                        descricao: "Vazão nos drenos de controle",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    }
                ]
            },
            {
                indice: 3,
                pagina: 9,
                codigo: "C.3",
                nome: "MUROS LATERAIS",
                itens: [
                    {
                        indice: 1,
                        descricao: "Erosão na fundação",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 2,
                        descricao: "Erosão nos contatos dos muros",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 3,
                        descricao: "Fissuras",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 4,
                        descricao: "Ferragem do concreto exposta",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 5,
                        descricao: "Deterioração",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 6,
                        descricao: "Erosão no talude",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 7,
                        descricao: "Rip-rap incompleto, destruído ou deslocado no contato",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 8,
                        descricao: "Vegetação",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 9,
                        descricao: "Drenos operantes",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    }
                ]
            },
            {
                indice: 4,
                pagina: 10,
                codigo: "C.4",
                nome: "BACIA DE DISSIPAÇÃO",
                itens: [
                    {
                        indice: 1,
                        descricao: "Fissuras, trincas ou rachaduras",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 2,
                        descricao: "Ferragem do concreto exposta",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 3,
                        descricao: "Deterioração",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 4,
                        descricao: "Ocorrência de buracos na soleira",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 5,
                        descricao: "Erosão",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 6,
                        descricao: "Presença de entulho na bacia",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 7,
                        descricao: "Presença de vegetação na bacia",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 8,
                        descricao: "Falha no enrocamento de protação",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    }
                ]
            }
        ]
    },
    {
        indice: 4,
        codigo: "D",
        nome: "TOMADA D'ÁGUA E DESCARGA DE FUNDO",
        subsecoes: [
            {
                indice: 1,
                pagina: 11,
                codigo: "D.1",
                nome: "BOCA DE MONTANTE",
                itens: [
                    {
                        indice: 1,
                        descricao: "Assoreamento",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 2,
                        descricao: "Obstrução e entulhos",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 3,
                        descricao: "Ferragem exposta na estrutura de concreto",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 4,
                        descricao: "Deterioração no concreto",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 5,
                        descricao: "Falta de grade de proteção",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 6,
                        descricao: "Defeitos na grade",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 7,
                        descricao: "Problemas na estrutura elétrica",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 8,
                        descricao: "Presença de animais peçonhentos",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 9,
                        descricao: "Peças enferrujadas ou corroídas",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    }
                ]
            },
            {
                indice: 2,
                pagina: 12,
                codigo: "D.2",
                nome: "ESTRUTURA DE SAÍDA",
                itens: [
                    {
                        indice: 1,
                        descricao: "Corrosão e vazamentos na tubulação",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 2,
                        descricao: "Sinais de abrasão ou cavitação",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 3,
                        descricao: "Ruídos estranhos",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 4,
                        descricao: "Defeitos nos dispositivos de controle",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 5,
                        descricao: "Surgências de água na caixa de concreto",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 6,
                        descricao: "Precariedade de acesso (vegetação)",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 7,
                        descricao: "Vazamento nos dispositivos de controle",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 8,
                        descricao: "Falta de manutenção",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 9,
                        descricao: "Construções irregulares a jusante",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 10,
                        descricao: "Falta ou deficiência de drenagem da caixa de válvulas",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 11,
                        descricao: "Presença de entulho dentro da caixa de válvulas",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 12,
                        descricao: "Defeitos na caixa de concreto",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 13,
                        descricao: "Defeitos na cerca de proteção",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 14,
                        descricao: "Elementos hidromecânicos enferrujados",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    },
                    {
                        indice: 15,
                        descricao: "Defeito no bloco de ancoragem da tubulação",
                        resposta: {
                            situacao: "NA",
                            magnitude: "I",
                            nivelPerigo: 0,
                            anexos: [],
                            comentarios: ""
                        }
                    }
                ]
            }
        ]
    },
    {
        indice: 5,
        pagina: 13,
        codigo: "E",
        nome: "MUROS DE CONTENÇÃO",
        itens: [
            {
                indice: 1,
                descricao: "Presença de vegetação",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 2,
                descricao: "Sinais de movimento",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 3,
                descricao: "Ocorrência de fissuras, trincas e rachaduras",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 4,
                descricao: "Ferragem da barragem exposta",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 5,
                descricao: "Deterioração",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 6,
                descricao: "Juntas de dilatação danificadas",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 7,
                descricao: "Sinais de percolação ou áreas úmidas",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 8,
                descricao: "Carreamento de material na água dos drenos",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 9,
                descricao: "Vazão nos drenos de controle",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 10,
                descricao: "Erosão no encontro com o terreno natural",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            }
        ]
    },
    {
        indice: 6,
        pagina: 14,
        codigo: "F",
        nome: "RESERVATÓRIO",
        itens: [
            {
                indice: 1,
                descricao: "Réguas danificadas ou faltantes",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 2,
                descricao: "Construções em áreas de proteção",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 3,
                descricao: "Poluição por esgoto, lixo, pesticidas etc.",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 4,
                descricao: "Indícios de má qualidade da água",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 5,
                descricao: "Erosões",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 6,
                descricao: "Assoreamento",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 7,
                descricao: "Desmoronamento nas margens",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 8,
                descricao: "Existência de vegetação aquática excessiva",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 9,
                descricao: "Desmatamentos na área de proteção",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 10,
                descricao: "Presença de animais e peixes mortos",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 11,
                descricao: "Animais pastando",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 12,
                descricao: "Árvores na área do reservatório e próximas ao paramento",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            }
        ]
    },
    {
        indice: 7,
        pagina: 15,
        codigo: "G",
        nome: "REGIÃO A JUSANTE DA BARRAGEM",
        itens: [
            {
                indice: 1,
                descricao: "Sinais de movimentos na rocha de fundação",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 2,
                descricao: "Desintegração/decomposição da rocha",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 3,
                descricao: "Piping nas juntas rochosas",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 4,
                descricao: "Construções irregulares próximas ao leito do rio",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 5,
                descricao: "Vazamento (fuga d'água) nas ombreiras",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 6,
                descricao: "Árvores/arbustos e vegetação na faixa de 10m da barragem",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 7,
                descricao: "Erosão nos encontros das ombreiras",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 8,
                descricao: "Cavernas e buracos nas ombreiras",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            }
        ]
    },
    {
        indice: 8,
        pagina: 16,
        codigo: "H",
        nome: "MEDIDORES DE VAZÃO",
        itens: [
            {
                indice: 1,
                descricao: "Ausência de placa medidora de vazão",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 2,
                descricao: "Corrosão da placa",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 3,
                descricao: "Defeito no concreto",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 4,
                descricao: "Falta de escala de leitura de vazão",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 5,
                descricao: "Assoreamento da câmara de medição",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 6,
                descricao: "Erosão a jusante do medidor",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            }
        ]
    },
    {
        indice: 9,
        pagina: 17,
        codigo: "I",
        nome: "ESTRADAS DE ACESSO",
        itens: [
            {
                indice: 1,
                descricao: "Estado do pavimento",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            },
            {
                indice: 2,
                descricao: "Condições de drenagem (com água estagnada)",
                resposta: {
                    situacao: "NA",
                    magnitude: "I",
                    nivelPerigo: 0,
                    anexos: [],
                    comentarios: ""
                }
            }
        ]
    }
]

export const respostas = {
    situacao: [
        {
            sigla: "NA",
            opcao: "",
            significado: "Este item não é aplicável."
        },
        {
            sigla: "NE",
            opcao: "",
            significado: "Anomalia não existente."
        },
        {
            sigla: "PV",
            opcao: "",
            significado: "Anomalia constatada pela primeira vez."
        },
        {
            sigla: "DS",
            opcao: "",
            significado: "Anomalia desapareceu."
        },
        {
            sigla: "DI",
            opcao: "",
            significado: "Anomalia diminuiu."
        },
        {
            sigla: "PC",
            opcao: "",
            significado: "Anomalia permaneceu constante."
        },
        {
            sigla: "AU",
            opcao: "",
            significado: "Anomalia aumentou."
        },
        {
            sigla: "NI",
            opcao: "",
            significado: "Este item não foi inspecionado."
        }
    ],
    magnitude: [
        {
            sigla: "I",
            opcao: "Insignificante",
            significado: "Anomalia que pode simplesmente ser mantida sob observação pela Administração Local."
        },
        {
            sigla: "P",
            opcao: "Pequena",
            significado: "Quando a anomalia pode ser resolvida pela própria Administração Local."
        },
        {
            sigla: "T",
            opcao: "Média",
            significado: "Anomalia que só pode ser resolvida pela Administração Local com apoio da Administração Regional."
        },
        {
            sigla: "G",
            opcao: "Grande",
            significado: "Anomalia que só pode ser resolvida pela Administração Regional com apoio da Administração Central."
        }
    ],
    nivelPerigo: [
        {
            sigla: "0",
            opcao: "Nenhum",
            significado: "Não compromete a segurança da barragem, mas pode ser entendida como descaso e má conservação."
        },
        {
            sigla: "1",
            opcao: "Atenção",
            significado: "Não compromete a segurança da barragem a curto prazo, mas deve ser controlada e monitorada ao longo do tempo."
        },
        {
            sigla: "2",
            opcao: "Alerta",
            significado: "Risco à segurança da barragem, devendo ser tomadas providências para a eliminação do problema."
        },
        {
            sigla: "3",
            opcao: "Emergência",
            significado: "Risco de ruptura iminente, situação fora de controle."
        }
    ]
}

export const usuario = {
    nome: "Alexandre de Souza Jr.",
    cargo: "Engenheiro Civil",
    instituicao: "COMPESA",
    email: "alexandresouzajr@compesa.com.br",
    telefone: "(81) 99999-8877"
}