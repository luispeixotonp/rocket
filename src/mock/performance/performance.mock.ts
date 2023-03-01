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