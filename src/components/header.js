import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import gatsbyLogo from '../images/gatsby-icon.png'

const Root = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
`

const Container = styled.div`
  margin: 0 auto;
  maxwidth: 960px;
  padding: 1rem;
  color: white;

  img {
    width: 80px;
    margin-bottom: 0;
    margin-left: 20px;
  }
`

const StyledLink = styled(Link)`
  color: white;
  textdecoration: none;
`
const StyledH1 = styled.h1`
  color: white;
`

const Header = ({ siteTitle }) => (
  <Root>
    <Container>
      <StyledH1>
        <StyledLink to="/">
          <img src={gatsbyLogo} alt="Gatsby Logo" />
          {siteTitle}
        </StyledLink>
      </StyledH1>
    </Container>
  </Root>
)

export default Header
