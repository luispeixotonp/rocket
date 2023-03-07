export const chartDataMock = [
  {
    type: 'comparative',
    data: [
      {
        label: 'Acumuladas',
        value: 'R$ 122.568',
      },
      {
        label: 'Realizado cumulado',
        value: 'R$ 636.568',
      },
    ],
  },
  {
    type: 'valueCard',
    name: 'Ticket Médio de Vendas',
    data: [
      {
        value: 'R$ 123 mil',
      },
    ],
  },
  {
    type: 'bar',

    // legend: ['Meta', 'Realizado'],
    name: 'Vendas mês a mês',
    data: [
      {
        label: 'Jan',
        value: 50,
      },
      {
        label: 'Fev',
        value: 58,
      },
      {
        label: 'Mar',
        value: 80,
      },
      {
        label: 'Abr',
        value: 13,
      },
      {
        label: 'Mai',
        value: 78,
      },
    ],
  },
  {
    type: 'colunaComparativa',
    name: 'Meta x Realizado',
    data: [
      {
        label: 'Meta',
        data: [
          {
            label: 'Jan',
            value: 50,
          },
          {
            label: 'Fev',
            value: 58,
          },
          {
            label: 'Mar',
            value: 80,
          },
          {
            label: 'Abr',
            value: 53,
          },
          {
            label: 'Mai',
            value: 78,
          },
        ],
      },
      {
        label: 'Realizado',
        data: [
          {
            label: 'Jan',
            value: 112,
          },
          {
            label: 'Fev',
            value: 123,
          },
          {
            label: 'Mar',
            value: 100,
          },
          {
            label: 'Abr',
            value: 83,
          },
          {
            label: 'Mai',
            value: 124,
          },
        ],
      }
    ],
  },
  {
    type: 'linha',
    name: 'Total de desconto acumulado',
    subname: 'Meta x Realizado',
    data: [
      {
        title: 'Meta Acumulada',
        data: [
          { value: 0, label: 'Jan' },
          { value: 10, label: 'Fev' },
          { value: 65, label: 'Mar' },
          { value: 18, label: 'Abr' },
          { value: 6, label: 'Mai' },
          { value: 78, label: 'Jun' },
          { value: 54, label: 'Jul' },
          { value: 98, label: 'Ago' },
        ],
      },

      {
        title: 'Realizado Acumulado',
        data: [
          { value: 1, label: 'Jan' },
          { value: 20, label: 'Fev' },
          { value: 18, label: 'Mar' },
          { value: 40, label: 'Abr' },
          { value: 76, label: 'Mai' },
          { value: 80, label: 'Jun' },
          { value: 89, label: 'Jul' },
          { value: 85, label: 'Ago' },
        ],
      },

      {
        title: 'Realizado Acumulado 2',
        data: [
          { value: 0, label: 'Jan' },
          { value: 60, label: 'Fev' },
          { value: 18, label: 'Mar' },
          { value: 40, label: 'Abr' },
          { value: 36, label: 'Mai' },
          { value: 60, label: 'Jun' },
          { value: 54, label: 'Jul' },
          { value: 85, label: 'Ago' },
        ],
      },
    ],
  },
  {
    type: 'area',
    name: 'Total de desconto acumulado',
    subname: 'Meta x Realizado',
    data: [
      {
        title: 'Meta Acumulada',
        data: [
          { value: 0, label: 'Jan' },
          { value: 10, label: 'Fev' },
          { value: 65, label: 'Mar' },
          { value: 18, label: 'Abr' },
          { value: 6, label: 'Mai' },
          { value: 78, label: 'Jun' },
          { value: 54, label: 'Jul' },
          { value: 98, label: 'Ago' },
        ],
      },

      {
        title: 'Realizado Acumulado',
        data: [
          { value: 1, label: 'Jan' },
          { value: 20, label: 'Fev' },
          { value: 18, label: 'Mar' },
          { value: 40, label: 'Abr' },
          { value: 76, label: 'Mai' },
          { value: 80, label: 'Jun' },
          { value: 89, label: 'Jul' },
          { value: 85, label: 'Ago' },
        ],
      },
    ],
  },
  {
    type: 'pizza',
    name: 'Grupos de produtos mais vendidos',
    data: [
      {
        label: 'Item 1',
        value: 23,
      },
      {
        label: 'Item 2',
        value: 12,
      },
      {
        label: 'Item 3',
        value: 15,
      },
      {
        label: 'Item 4',
        value: 8,
      },
      {
        label: 'Item 5',
        value: 5,
      },
      {
        label: 'Item 9',
        value: 5,
      },
      {
        label: 'Item 7',
        value: 5,
      },
      {
        label: 'Item 11',
        value: 5,
      },
      {
        label: 'Item 12',
        value: 5,
      },
      {
        label: 'Item 13',
        value: 15,
      },
      {
        label: 'Item 15',
        value: 25,
      },
    ],
  },
  {
    type: 'bar',
    name: 'Top 5 clientes mais inadimplentes',
    color: '#F25F33',
    data: [
      {
        label: 'Pedro',
        value: 20,
      },
      {
        label: 'Bazar sJ',
        value: 18,
      },
      {
        label: 'Moura e Moura',
        value: 16,
      },
      {
        label: 'João',
        value: 15,
      },
      {
        label: 'Antônio',
        value: 12,
      },
    ],
  },
  {
    type: 'bar',
    name: 'Produtos Ativos X Produtos Vendidos ',
    data: [
      {
        label: 'Ativos',
        value: 8,
      },
      {
        label: 'Vendidos',
        value: 7,
      },
    ],
  },

  {
    type: 'table',
    name: 'Top 10 clientes com menos descontos',
    fields: [
      {
        label: 'Nome',
      },
      {
        label: 'Valor',
      },
      {
        label: 'Valor',
      },
      {
        label: 'Valor',
      },
    ],
    data: [
      {
        columns1: 'Total de vendas',
        columns2: 'R$ 1.000,00',
        columns3: 'R$ 1.000,00',
        columns4: 'R$ 1.000,00',
      },
      {
        columns1: 'Total de pedidos',
        columns2: 'R$ 1.000,00',
        columns3: 'R$ 1.000,00',
        columns4: 'R$ 1.000,00',
      },
      {
        columns1: 'Total de pedidos',
        columns2: 'R$ 1.000,00',
        columns3: 'R$ 1.000,00',
        columns4: 'R$ 1.000,00',
      },
      {
        columns1: 'Total de pedidos',
        columns2: 'R$ 1.000,00',
        columns3: 'R$ 1.000,00',
        columns4: 'R$ 1.000,00',
      },
      {
        columns1: 'Total de pedidos',
        columns2: 'R$ 1.000,00',
        columns3: 'R$ 1.000,00',
        columns4: 'R$ 1.000,00',
      },
      {
        columns1: 'Total de pedidos',
        columns2: 'R$ 1.000,00',
        columns3: 'R$ 1.000,00',
        columns4: 'R$ 1.000,00',
      },
      {
        columns1: 'Total de pedidos',
        columns2: 'R$ 1.000,00',
        columns3: 'R$ 1.000,00',
        columns4: 'R$ 1.000,00',
      },
    ],
  },
];

export const monthlySalesTargetMock = [
  {
    type: 'comparative',
    data: [
      {
        label: 'Acumuladas',
        value: 'R$ 122.568',
      },
      {
        label: 'Realizado cumulado',
        value: 'R$ 636.568',
      },
    ],
  },
  {
    type: 'valueCard',
    name: 'Ticket Médio de Vendas',
    data: [
      {
        value: 'R$ 123 mil',
      },
    ],
  },
  {
    type: 'colunaComparativa',
    name: 'Vendas mês a mês',
    data: [
      {
        label: 'Meta',
        data: [
          {
            label: 'Jan',
            value: 50,
          },
          {
            label: 'Fev',
            value: 58,
          },
          {
            label: 'Mar',
            value: 80,
          },
          {
            label: 'Abr',
            value: 53,
          },
          {
            label: 'Mai',
            value: 78,
          },
          {
            label: 'Jun',
            value: 78,
          },
        ],
      },
      {
        label: 'Realizado',
        data: [
          {
            label: 'Jan',
            value: 112,
          },
          {
            label: 'Fev',
            value: 123,
          },
          {
            label: 'Mar',
            value: 100,
          },
          {
            label: 'Abr',
            value: 83,
          },
          {
            label: 'Mai',
            value: 124,
          },
          {
            label: 'Jun',
            value: 124,
          },
        ],
      }
    ],
  },
  {
    type: 'table',
    name: 'Top 10 - Ranking das maiores vendas',
    fields: [
      {
        label: 'Pedido',
      },
      {
        label: 'Cliente',
      },
      {
        label: 'Valor',
      },
      {
        label: 'Data',
      },
    ],
    data: [
      {
        columns1: '0001',
        columns2: 'Loja Real ltda',
        columns3: 'R$ 10.000',
        columns4: '01/01/2023',
      },
      {
        columns1: '0002',
        columns2: 'Rei do Baião',
        columns3: 'R$ 8.500',
        columns4: '02/01/2023',
      },
      {
        columns1: '0003',
        columns2: 'RGK  Recife',
        columns3: 'R$ 7.200',
        columns4: '03/01/2023',
      },
      {
        columns1: '0004',
        columns2: 'Moura e cia',
        columns3: 'R$ 6.500',
        columns4: '04/01/2023',
      },
      {
        columns1: '0005',
        columns2: 'Supermercado Santa Rita',
        columns3: 'R$ 5.800',
        columns4: '05/01/2023',
      },
      {
        columns1: '0006',
        columns2: 'Delikata',
        columns3: 'R$ 4.900',
        columns4: '06/01/2023',
      },
      {
        columns1: '0007',
        columns2: 'Petronas',
        columns3: 'R$ 4.300',
        columns4: '07/01/2023',
      },
      {
        columns1: '0008',
        columns2: 'Silva e cia',
        columns3: 'R$ 3.800',
        columns4: '08/01/2023',
      },
      {
        columns1: '0009',
        columns2: 'Hortifruti do João',
        columns3: 'R$ 3.200',
        columns4: '09/01/2023',
      },
      {
        columns1: '0010',
        columns2: 'Supermercado do Zé',
        columns3: 'R$ 2.700',
        columns4: '10/01/2023',
      }
    ],
  },
  {
    type: 'table',
    name: 'Top 10 - Ranking das menores vendas',
    fields: [
      {
        label: 'Pedido',
      },
      {
        label: 'Valor',
      },
      {
        label: 'Número de pedidos',
      },
    ],
    data: [
      {
        columns1: 'Loja Real ltda',
        columns2: 'R$ 10.000',
        columns3: '122',
      },
      {
        columns1: 'Rei do Baião',
        columns2: 'R$ 8.500,00',
        columns3: '103'
      },
      {
        columns1: 'RGK  Recife',
        columns2: 'R$ 7.200,00',
        columns3: '100',
      },
      {
        columns1: 'Moura e cia',
        columns2: 'R$ 6.500,00',
        columns3: '89',
      },
      {
        columns1: 'Supermercado Santa Rita',
        columns2: 'R$ 5.800,00',
        columns3: '78',
      },
      {
        columns1: 'Delikata',
        columns2: 'R$ 4.900,00',
        columns3: '67',
      },
      {
        columns1: 'Petronas',
        columns2: 'R$ 4.300,00',
        columns3: '56',
      },
      {
        columns1: 'Silva e cia',
        columns2: 'R$ 3.800,00',
        columns3: '45',
      },
      {
        columns1: 'Hortifruti do João',
        columns2: 'R$ 3.200,00',
        columns3: '34',
      },
      {
        columns1: 'Supermercado do Zé',
        columns2: 'R$ 2.700,00',
        columns3: '23',
      }
    ],
  },
  {
    type: 'table',
    name: 'Vendas no mês',
    fields: [
      {
        label: 'Pedido',
      },
      {
        label: 'Cliente',
      },
      {
        label: 'Desconto',
      },
      {
        label: 'Valor',
      },
      {
        label: 'Data',
      },
    ],
    data: [
      {
        columns1: '0001',
        columns2: 'Loja Real ltda',
        columns3: 'R$ 12,98',
        columns4: 'R$ 10.000',
        columns5: '01/01/2023',
      },
      {
        columns1: '0002',
        columns2: 'Rei do Baião',
        columns3: 'R$ 22,99',
        columns4: 'R$ 8.500',
        columns5: '02/01/2023',
      },
      {
        columns1: '0003',
        columns2: 'RGK  Recife',
        columns3: 'R$ 6,99',
        columns4: 'R$ 7.200',
        columns5: '03/01/2023',
      },
      {
        columns1: '0004',
        columns2: 'Moura e cia',
        columns3: 'R$ 76,19',
        columns4: 'R$ 6.500',
        columns5: '04/01/2023',
      },
      {
        columns1: '0005',
        columns2: 'Supermercado Santa Rita',
        columns3: 'R$ 32,98',
        columns4: 'R$ 5.800',
        columns5: '05/01/2023',
      },
      {
        columns1: '0006',
        columns2: 'Delikata',
        columns3: 'R$ 12,98',
        columns4: 'R$ 4.900',
        columns5: '06/01/2023',
      },
      {
        columns1: '0007',
        columns2: 'Petronas',
        columns3: 'R$ 61,99',
        columns4: 'R$ 4.300',
        columns5: '07/01/2023',
      },
      {
        columns1: '0008',
        columns2: 'Silva e cia',
        columns3: 'R$ 13,98',
        columns4: 'R$ 3.800',
        columns5: '08/01/2023',
      },
      {
        columns1: '0009',
        columns2: 'Hortifruti do João',
        columns3: 'R$ 71,99',
        columns4: 'R$ 3.200',
        columns5: '09/01/2023',
      },
      {
        columns1: '0010',
        columns2: 'Supermercado do Zé',
        columns3: 'R$ 34,98',
        columns4: 'R$ 2.700',
        columns5: '10/01/2023',
      }
    ],
  },
];

export const salesMixMock = [
  {
    type: 'pizza',
    name: 'Grupos de produtos mais vendidos',
    data: [
      {
        label: 'Kits',
        value: 23,
      },
      {
        label: 'Decoração',
        value: 12,
      },
      {
        label: 'Artigo festas',
        value: 15,
      },
      {
        label: 'Embalagens',
        value: 8,
      },
      {
        label: 'Sacolas',
        value: 5,
      },
    ],
  },
  {
    type: 'bar',
    name: 'Produtos Ativos X Produtos Vendidos',
    color: '#F25F33',
    data: [
      {
        label: 'Ativos',
        value: 2589,
      },
      {
        label: 'Vendidos',
        value: 1034,
      },
    ],
  },
  {
    type: 'table',
    name: 'Produtos mais vendidos',
    fields: [
      {
        label: 'Produtos',
      },
      {
        label: 'Vendas',
      },
      {
        label: 'Valor Total',
      },
      {
        label: 'Valor Médio',
      },
    ],
    data: [
      {
        columns1: 'Copo descartável 200ml ...',
        columns2: '921',
        columns3: 'R$ 12.981',
        columns4: 'R$ 1,98',
      },
      {
        columns1: 'Pote descartável branco...',
        columns2: '812',
        columns3: 'R$ 2221,99',
        columns4: 'R$ 2,98',
      },
      {
        columns1: 'Prato quadrado cristal',
        columns2: '701',
        columns3: 'R$ 6.991',
        columns4: 'R$ 9,98',
      },
      {
        columns1: 'Pote descartável branco...',
        columns2: '612',
        columns3: 'R$ 4.991',
        columns4: 'R$ 8,98',
      },
      {
        columns1: 'Prato redondo cristal',
        columns2: '501',
        columns3: 'R$ 3.991',
        columns4: 'R$ 7,98',
      },
    ],
  },
  {
    type: 'table',
    name: 'Produtos sem vendas no mês',
    fields: [
      {
        label: 'Produtos',
      },
      {
        label: 'Valor Unitário',
      },
      {
        label: 'Data da última venda',
      },
    ],
    data: [
      {
        columns1: 'Conj. de talheres descartável com 6 peças',
        columns2: 'R$ 4,98',
        columns3: '01/01/2023',
      },
      {
        columns1: 'Kit Festa 8 peças',
        columns2: 'R$ 68,50',
        columns3: '02/01/2023',
      },
      {
        columns1: 'Forminha p/ doces 12 unid.',
        columns2: 'R$ 73,98',
        columns3: '03/01/2023',
      },
      {
        columns1: 'Painel redondo glitter',
        columns2: 'R$ 12,98',
        columns3: '04/01/2023',
      },
      {
        columns1: 'Forminha salgados 12 unid.',
        columns2: 'R$ 33,98',
        columns3: '05/01/2023',
      },
    ],
  },

]

export const profitabilityMock = [
  {
    type: 'coluna',
    name: 'Rentabilidade mês a mês',
    data: [
      {
        label: 'Jan',
        value: 50,
      },
      {
        label: 'Fev',
        value: 58,
      },
      {
        label: 'Mar',
        value: 80,
      },
      {
        label: 'Abr',
        value: 13,
      },
      {
        label: 'Mai',
        value: 78,
      },
      {
        label: 'Jun',
        value: 45,
      },
      {
        label: 'Jul',
        value: 23,
      },
      {
        label: 'Ago',
        value: 67,
      },
      {
        label: 'Set',
        value: 90,
      },
    ],
  },
  {
    type: 'table',
    name: 'Vendas de maior rentabilidade',
    fields: [
      {
        label: 'Pedido',
      },
      {
        label: 'Cliente',
      },
      {
        label: 'Valor',
      },
      {
        label: 'Rentabilidade',
      },
    ],
    data: [
      {
        columns1: '0001',
        columns2: 'Loja Real ltda',
        columns3: 'R$ 10.000',
        columns4: '35%',
      },
      {
        columns1: '0002',
        columns2: 'Rei do Baião',
        columns3: 'R$ 8.500',
        columns4: '30%',
      },
      {
        columns1: '0003',
        columns2: 'RGK  Recife',
        columns3: 'R$ 7.200',
        columns4: '25%',
      },
      {
        columns1: '0004',
        columns2: 'Moura e cia',
        columns3: 'R$ 6.500',
        columns4: '20%',
      },
      {
        columns1: '0005',
        columns2: 'Supermercado Santa Rita',
        columns3: 'R$ 5.800',
        columns4: '15%',
      },
      {
        columns1: '0006',
        columns2: 'Delikata',
        columns3: 'R$ 4.900',
        columns4: '10%',
      },
      {
        columns1: '0007',
        columns2: 'Petronas',
        columns3: 'R$ 4.300',
        columns4: '07%',
      },
      {
        columns1: '0008',
        columns2: 'Silva e cia',
        columns3: 'R$ 3.800',
        columns4: '05%',
      },
      {
        columns1: '0009',
        columns2: 'Hortifruti do João',
        columns3: 'R$ 3.200',
        columns4: '03%',
      },
      {
        columns1: '0010',
        columns2: 'Supermercado do Zé',
        columns3: 'R$ 2.700',
        columns4: '01%',
      }
    ],
  },
  {
    type: 'table',
    name: 'Vendas de menor rentabilidade',
    fields: [
      {
        label: 'Pedido',
      },
      {
        label: 'Cliente',
      },
      {
        label: 'Valor',
      },
      {
        label: 'Rentabilidade',
      },
    ],
    data: [
      {
        columns1: '0001',
        columns2: 'Loja Real ltda',
        columns3: 'R$ 10.000',
        columns4: '15%',
      },
      {
        columns1: '0002',
        columns2: 'Rei do Baião',
        columns3: 'R$ 8.500',
        columns4: '13%',
      },
      {
        columns1: '0003',
        columns2: 'RGK  Recife',
        columns3: 'R$ 7.200',
        columns4: '11%',
      },
      {
        columns1: '0004',
        columns2: 'Moura e cia',
        columns3: 'R$ 6.500',
        columns4: '09%',
      },
      {
        columns1: '0005',
        columns2: 'Supermercado Santa Rita',
        columns3: 'R$ 5.800',
        columns4: '07%',
      },
    ],
  },
]

export const averageTicketMock = [
  {
    type: 'pizza',
    name: '10 produtos com maior ticket médio',
    data: [
      {
        label: 'Toalhas',
        value: 23,
      },
      {
        label: 'Iluminação',
        value: 12,
      },
      {
        label: 'Plasticos',
        value: 15,
      },
      {
        label: 'Utensilios',
        value: 8,
      },
      {
        label: 'Bebidas',
        value: 5,
      },

      {
        label: 'Kits',
        value: 23,
      },
      {
        label: 'Decoração',
        value: 12,
      },
      {
        label: 'Sacolas',
        value: 15,
      },
      {
        label: 'Artigo festas',
        value: 8,
      },
      {
        label: 'Embalagens',
        value: 5,
      },
    ],
  },
  {
    type: 'coluna',
    name: 'Ticket médio mês a mês',
    data: [
      {
        label: 'Jan',
        value: 50,
      },
      {
        label: 'Fev',
        value: 58,
      },
      {
        label: 'Mar',
        value: 80,
      },
      {
        label: 'Abr',
        value: 13,
      },
      {
        label: 'Mai',
        value: 78,
      },
      {
        label: 'Jun',
        value: 45,
      },
      {
        label: 'Jul',
        value: 23,
      },
      {
        label: 'Ago',
        value: 67,
      },
      {
        label: 'Set',
        value: 90,
      },
    ],
  },
  {
    type: 'table',
    name: 'Ticket médio de pedidos',
    fields: [
      {
        label: 'Pedido',
      },
      {
        label: 'Cliente',
      },
      {
        label: 'Ticket médio',
      },
      {
        label: 'Data',
      },
    ],
    data: [
      {
        columns1: '0001',
        columns2: 'Loja Real ltda',
        columns3: 'R$ 10.000',
        columns4: '01/01/2020',
      },
      {
        columns1: '0002',
        columns2: 'Rei do Baião',
        columns3: 'R$ 8.500',
        columns4: '20/01/2020',
      },
      {
        columns1: '0003',
        columns2: 'RGK  Recife',
        columns3: 'R$ 7.200',
        columns4: '30/01/2020',
      },
      {
        columns1: '0004',
        columns2: 'Moura e cia',
        columns3: 'R$ 6.500',
        columns4: '15/02/2020',
      },
      {
        columns1: '0005',
        columns2: 'Supermercado Santa Rita',
        columns3: 'R$ 5.800',
        columns4: '10/03/2020',
      },
      {
        columns1: '0006',
        columns2: 'Delikata',
        columns3: 'R$ 4.900',
        columns4: '05/04/2020',
      },
      {
        columns1: '0007',
        columns2: 'Petronas',
        columns3: 'R$ 4.300',
        columns4: '10/04/2020',
      },
      {
        columns1: '0008',
        columns2: 'Silva e cia',
        columns3: 'R$ 3.800',
        columns4: '15/04/2020',
      },
      {
        columns1: '0009',
        columns2: 'Hortifruti do João',
        columns3: 'R$ 3.200',
        columns4: '20/04/2020',
      },
      {
        columns1: '0010',
        columns2: 'Supermercado do Zé',
        columns3: 'R$ 2.700',
        columns4: '01/05/2020',
      }
    ],
  },
]

export const positivityMock = [
  {
    type: 'pizza',
    name: '5 produtos com maior positivação',
    data: [
      {
        label: 'Toalhas',
        value: 23,
      },
      {
        label: 'Iluminação',
        value: 12,
      },
      {
        label: 'Plasticos',
        value: 15,
      },
      {
        label: 'Utensilios',
        value: 8,
      },
      {
        label: 'Bebidas',
        value: 5,
      },
    ],
  },
  {
    type: 'coluna',
    name: 'Positivação mês a mês',
    data: [
      {
        label: 'Jan',
        value: 50,
      },
      {
        label: 'Fev',
        value: 58,
      },
      {
        label: 'Mar',
        value: 80,
      },
      {
        label: 'Abr',
        value: 13,
      },
      {
        label: 'Mai',
        value: 78,
      },
      {
        label: 'Jun',
        value: 45,
      },
      {
        label: 'Jul',
        value: 23,
      },
      {
        label: 'Ago',
        value: 67,
      },
      {
        label: 'Set',
        value: 90,
      },
    ],
  },
  {
    type: 'table',
    name: 'Positividade de pedidos',
    fields: [
      {
        label: 'Pedido',
      },
      {
        label: 'Cliente',
      },
      {
        label: 'Positivação',
      },
      {
        label: 'Data',
      },
    ],
    data: [
      {
        columns1: '0001',
        columns2: 'Loja Real ltda',
        columns3: '30%',
        columns4: '01/01/2020',
      },
      {
        columns1: '0002',
        columns2: 'Rei do Baião',
        columns3: '28%',
        columns4: '20/01/2020',
      },
      {
        columns1: '0003',
        columns2: 'RGK  Recife',
        columns3: '25%',
        columns4: '30/01/2020',
      },
      {
        columns1: '0004',
        columns2: 'Moura e cia',
        columns3: '22%',
        columns4: '15/02/2020',
      },
      {
        columns1: '0005',
        columns2: 'Supermercado Santa Rita',
        columns3: '20%',
        columns4: '10/03/2020',
      },
    ],
  },
]


export const discountMock = [
  {
    type: 'coluna',
    name: 'Evolução de desconto mês a mês',
    data: [
      {
        label: 'Jan',
        value: 50,
      },
      {
        label: 'Fev',
        value: 58,
      },
      {
        label: 'Mar',
        value: 80,
      },
      {
        label: 'Abr',
        value: 13,
      },
      {
        label: 'Mai',
        value: 78,
      },
      {
        label: 'Jun',
        value: 45,
      },
      {
        label: 'Jul',
        value: 23,
      },
      {
        label: 'Ago',
        value: 67,
      },
      {
        label: 'Set',
        value: 90,
      },
    ],
  },
  {
    type: 'linha',
    name: 'Total de desconto acumulado',
    subname: 'Meta x Realizado',
    data: [
      {
        title: 'Meta Acumulada',
        data: [
          { value: 0, label: 'Jan' },
          { value: 10, label: 'Fev' },
          { value: 65, label: 'Mar' },
          { value: 18, label: 'Abr' },
          { value: 6, label: 'Mai' },
          { value: 78, label: 'Jun' },
          { value: 54, label: 'Jul' },
          { value: 98, label: 'Ago' },
        ],
      },

      {
        title: 'Realizado Acumulado',
        data: [
          { value: 1, label: 'Jan' },
          { value: 20, label: 'Fev' },
          { value: 18, label: 'Mar' },
          { value: 40, label: 'Abr' },
          { value: 76, label: 'Mai' },
          { value: 80, label: 'Jun' },
          { value: 89, label: 'Jul' },
          { value: 85, label: 'Ago' },
        ],
      },
    ],
  },
  {
    type: 'table',
    name: 'Clientes com mais descontos',
    fields: [
      {
        label: 'Pedido',
      },
      {
        label: 'Cliente',
      },
      {
        label: 'Total de descontos',
      },
      {
        label: 'Data',
      },
    ],
    data: [
      {
        columns1: '0001',
        columns2: 'Loja Real ltda',
        columns3: 'R$ 1.230',
        columns4: '01/01/2020',
      },
      {
        columns1: '0002',
        columns2: 'Rei do Baião',
        columns3: 'R$ 1.100',
        columns4: '20/01/2020',
      },
      {
        columns1: '0003',
        columns2: 'RGK  Recife',
        columns3: 'R$ 1.000',
        columns4: '30/01/2020',
      },
      {
        columns1: '0004',
        columns2: 'Moura e cia',
        columns3: 'R$ 900',
        columns4: '15/02/2020',
      },
      {
        columns1: '0005',
        columns2: 'Supermercado Santa Rita',
        columns3: 'R$ 800',
        columns4: '10/03/2020',
      },
    ],
  },
  {
    type: 'table',
    name: 'Clientes com menos descontos',
    fields: [
      {
        label: 'Pedido',
      },
      {
        label: 'Cliente',
      },
      {
        label: 'Total de descontos',
      },
      {
        label: 'Data',
      },
    ],
    data: [
      {
        columns1: '0001',
        columns2: 'Supermercado do seu Zé',
        columns3: 'R$ 210',
        columns4: '01/01/2020',
      },
      {
        columns1: '0002',
        columns2: 'Laço de Ouro',
        columns3: 'R$ 100',
        columns4: '20/01/2020',
      },
      {
        columns1: '0003',
        columns2: 'Papelaria do João',
        columns3: 'R$ 98',
        columns4: '30/01/2020',
      },
      {
        columns1: '0004',
        columns2: 'Açougue do Três Irmãos',
        columns3: 'R$ 56',
        columns4: '15/02/2020',
      },
      {
        columns1: '0005',
        columns2: 'Varejão do Wilson',
        columns3: 'R$ 12',
        columns4: '10/03/2020',
      },
    ],
  },
]


export const newSalesMock = [
  {
    type: 'coluna',
    name: 'Evolução de desconto mês a mês',
    data: [
      {
        label: 'Jan',
        value: 50,
      },
      {
        label: 'Fev',
        value: 58,
      },
      {
        label: 'Mar',
        value: 80,
      },
      {
        label: 'Abr',
        value: 13,
      },
      {
        label: 'Mai',
        value: 78,
      },
      {
        label: 'Jun',
        value: 45,
      },
      {
        label: 'Jul',
        value: 23,
      },
      {
        label: 'Ago',
        value: 67,
      },
      {
        label: 'Set',
        value: 90,
      },
    ],
  },
  {
    type: 'table',
    name: 'Lista dos novos clientes',
    fields: [
      {
        label: 'Pedido',
      },
      {
        label: 'Cliente',
      },
      {
        label: 'Valor',
      },
      {
        label: 'Data',
      },
    ],
    data: [
      {
        columns1: '0001',
        columns2: 'Loja Real ltda',
        columns3: 'R$ 1.230',
        columns4: '01/01/2020',
      },
      {
        columns1: '0002',
        columns2: 'Rei do Baião',
        columns3: 'R$ 1.100',
        columns4: '20/01/2020',
      },
      {
        columns1: '0003',
        columns2: 'RGK  Recife',
        columns3: 'R$ 1.000',
        columns4: '30/01/2020',
      },
      {
        columns1: '0004',
        columns2: 'Moura e cia',
        columns3: 'R$ 900',
        columns4: '15/02/2020',
      },
      {
        columns1: '0005',
        columns2: 'Supermercado Santa Rita',
        columns3: 'R$ 800',
        columns4: '10/03/2020',
      },
    ],
  },
  {
    type: 'table',
    name: 'Novos clientes acumulado ano',
    fields: [
      {
        label: 'Pedido',
      },
      {
        label: 'Cliente',
      },
      {
        label: 'Valor',
      },
      {
        label: 'Data',
      },
    ],
    data: [
      {
        columns1: '0001',
        columns2: 'Supermercado do seu Zé',
        columns3: 'R$ 2.110',
        columns4: '01/01/2020',
      },
      {
        columns1: '0002',
        columns2: 'Laço de Ouro',
        columns3: 'R$ 1.200',
        columns4: '20/01/2020',
      },
      {
        columns1: '0003',
        columns2: 'Papelaria do João',
        columns3: 'R$ 988',
        columns4: '30/01/2020',
      },
      {
        columns1: '0004',
        columns2: 'Açougue do Três Irmãos',
        columns3: 'R$ 562',
        columns4: '15/02/2020',
      },
      {
        columns1: '0005',
        columns2: 'Varejão do Wilson',
        columns3: 'R$ 121',
        columns4: '10/03/2020',
      },
    ],
  },
]

export const bonusMock = [
  {
    type: 'pizza',
    name: '5 Produtos mais bonificados',
    data: [
      {
        label: 'Toalhas',
        value: 23,
      },
      {
        label: 'Iluminação',
        value: 12,
      },
      {
        label: 'Plasticos',
        value: 15,
      },
      {
        label: 'Utensilios',
        value: 8,
      },
      {
        label: 'Bebidas',
        value: 5,
      },
    ],
  },
  {
    type: 'coluna',
    name: 'Bonificação mês a mês',
    data: [
      {
        label: 'Jan',
        value: 50,
      },
      {
        label: 'Fev',
        value: 58,
      },
      {
        label: 'Mar',
        value: 80,
      },
      {
        label: 'Abr',
        value: 13,
      },
      {
        label: 'Mai',
        value: 78,
      },
      {
        label: 'Jun',
        value: 45,
      },
      {
        label: 'Jul',
        value: 23,
      },
      {
        label: 'Ago',
        value: 67,
      },
      {
        label: 'Set',
        value: 90,
      },
    ],
  },
  {
    type: 'table',
    name: 'Bonificação do Período',
    fields: [
      {
        label: 'Pedido',
      },
      {
        label: 'Cliente',
      },
      {
        label: 'VAlor',
      },
      {
        label: 'Data',
      },
    ],
    data: [
      {
        columns1: '0001',
        columns2: 'Loja Real ltda',
        columns3: 'R$ 1.230',
        columns4: '01/01/2020',
      },
      {
        columns1: '0002',
        columns2: 'Rei do Baião',
        columns3: 'R$ 1.100',
        columns4: '20/01/2020',
      },
      {
        columns1: '0003',
        columns2: 'RGK  Recife',
        columns3: 'R$ 1.000',
        columns4: '30/01/2020',
      },
      {
        columns1: '0004',
        columns2: 'Moura e cia',
        columns3: 'R$ 900',
        columns4: '15/02/2020',
      },
      {
        columns1: '0005',
        columns2: 'Supermercado Santa Rita',
        columns3: 'R$ 800',
        columns4: '10/03/2020',
      },
    ],
  },
]