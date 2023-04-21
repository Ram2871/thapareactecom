import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Wrapper>
    <h1 className='test'>About</h1>
    </Wrapper>
  )
}

const Wrapper = styled.section`
background-color: ${({theme}) => theme.colors.bg};
`;

export default About
