import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Performance',
      path: '/',
      isSection: true
    },
    {
      title: 'Metas venda mensal',
      path: '/performance/meta-venda',
    },
    {
      title: 'Mix de vendas',
      path: '/performance/mix-vendas',
    },
    {
      title: 'Rentabilidade',
      path: '/performance/rentabilidade',
    },
    {
      title: 'Ticket médio',
      path: '/performance/ticket-medio',
    },
    {
      title: 'Positivação',
      path: '/performance/positivacao',
    },
    {
      title: 'Novas vendas',
      path: '/performance/novas-vendas',
    },
    {
      title: 'Desconto',
      path: '/performance/desconto',
    },
    {
      title: 'Bonificação',
      path: '/performance/bonificacao',
    },

    // {
    //   title: 'Engajamento',
    //   path: '/engajamento',
    //   isSection: true
    // },
    // {
    //   title: 'Typography',
    //   path: '/typography'
    // },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    // },
    // {
    //   title: 'Cards',
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   path: '/tables'
    // },
    // {
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
  ]
}

export default navigation
