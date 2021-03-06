import React from 'react'
import Container from '../components/container'
import Content from '../components/content'
import BackgroundTitle from '../components/backgroundTitle'
import Header from '../components/header'
import styled, { css } from 'styled-components'
import Layout from '../components/layout'

const Styled = {
  SectionContainer: styled.div`
    position: relative;
    max-width: 100%;
    overflow: hidden;
    ${props =>
      props.backingColor &&
      css`
        background-color: ${props.backingColor};
      `};
  `,
}

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <React.Fragment>
          <Header data={this.props.data} />
          <Container
            render={sections =>
              sections.map((section, index) => (
                <Styled.SectionContainer
                  key={index}
                  backingColor={section.backingColor}
                >
                  <BackgroundTitle
                    text={section.title}
                    color={section.titleColor}
                  />
                  {section.content.map((content, index) => (
                    <Content
                      data={this.props.data}
                      key={index}
                      {...content}
                      rightAlign={index % 2 === 1}
                      textColor={section.textColor}
                    />
                  ))}
                </Styled.SectionContainer>
              ))
            }
          />
        </React.Fragment>
      </Layout>
    )
  }
}

export default IndexPage
