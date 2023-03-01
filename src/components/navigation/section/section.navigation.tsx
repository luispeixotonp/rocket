import React from 'react'
import { ChevronRight } from 'mdi-material-ui'
import { NavLink } from 'src/@core/layouts/types'
import { Container, Content, Title } from './styles'
import { ChartBox, BullseyeArrow } from 'mdi-material-ui'
import Button from 'src/components/buttons/button-without-style/button-without-style'
import { useRouter } from 'next/router'


interface Props {
  item: NavLink
  isActive?: boolean
  route?: string | undefined
}

const SectionNavigation = (props: Props) => {
  const { item, route } = props
  const router = useRouter()

  const getIcon = () => {
    const style = { color: props.isActive ? '#fff' : '#184485' }
    const icons = {
      'Performance': <ChartBox sx={style} />,
      'Engajamento': <BullseyeArrow sx={style} />
    } as any

    return icons[item.title] || <ChartBox sx={style} />
  }

  const handleClick = () => {
    if (route) router.push(route)
  }

  return (
    <Container onClick={handleClick}>
      <Button>
        <Content active={props.isActive}>
          {getIcon()}
          <Title active={props.isActive}>{item.title}</Title>
          <ChevronRight sx={{ color: props.isActive ? '#fff' : '#000' }} />
        </Content>
      </Button>
    </Container>
  )
}

export default SectionNavigation
