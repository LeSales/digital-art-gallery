import styled from 'styled-components'
import AppHeader from './components/AppHeader'
import AppHighlights from './components/AppHighlights'
import AppHome from './components/AppHome/AppHome'
import AppSobre from './components/AppSobre/AppSobre'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return <>
  <AppHeader></AppHeader>
  <AppHome></AppHome>
  <AppSobre></AppSobre>
  <AppHighlights></AppHighlights>
  </>
}
