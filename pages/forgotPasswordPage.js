import styled from 'styled-components'
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import ForgotPasswordSection from './components/ForgotPasswordSection'


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Gallery() {
  return <>
  <AppHeader></AppHeader>
  <ForgotPasswordSection/>
  <AppFooter></AppFooter>
  </>
}