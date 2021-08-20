import styled from 'styled-components'
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import AppHighlights from './components/AppHighlights'
import AppHome from './components/AppHome/AppHome'
import AppLoginArea from './components/AppLoginArea'
import AppSobre from './components/AppSobre/AppSobre'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home() {
  return <>
  <AppHeader login={true} register={true} gallery={true}></AppHeader>
  <AppHome></AppHome>
  <AppSobre></AppSobre>
  <AppHighlights></AppHighlights>
  <AppLoginArea></AppLoginArea>
  <AppFooter></AppFooter>
  </>
}
