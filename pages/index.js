import styled from 'styled-components'
import AppHeader from './components/AppHeader'
import AppHome from './components/AppHome/AppHome'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return <>
  <AppHeader></AppHeader>
  <AppHome></AppHome>
  </>
}
