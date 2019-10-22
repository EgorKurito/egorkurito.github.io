import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"


const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
            github
            vk
            linkedin
            facebook
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>{data.site.siteMetadata.subtitle}</Description>
            <div align="center" class="socialbtns">
              <ul>
                <li><a href={data.site.siteMetadata.facebook} class="fa fa-lg fa-facebook" target="_blank"></a></li>
                <li><a href={data.site.siteMetadata.vk} class="fa fa-lg fa-vk" target="_blank"></a></li>
                <li><a href={data.site.siteMetadata.github} class="fa fa-lg fa-github" target="_blank"></a></li>
                <li><a href={data.site.siteMetadata.linkedin} class="fa fa-lg fa-linkedin" target="_blank"></a></li>
              </ul>
            </div>
        </Container>
      </OuterContainer>
    )}
  />
)



NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
  github: PropTypes.string,
  vk: PropTypes.string,
  facebook: PropTypes.string,
  linkedin: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
  github: ``,
  vk: ``,
  facebook: ``,
  linkedin: ``,
}

export default LandingBio
