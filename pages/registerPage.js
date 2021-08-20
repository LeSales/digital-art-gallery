import styled from 'styled-components'
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import RegisterSection from './components/RegisterSection/'



const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Gallery() {
  return <>
  <AppHeader login={true} register={true} gallery={true}></AppHeader>
  <RegisterSection/>
  <AppFooter></AppFooter>
  </>
}