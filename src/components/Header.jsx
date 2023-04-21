import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';


const Header = () => {
  return (
    <MainHeader>
      <NavLink to='/' className='logo'>
        <img src="./images/good_cakes_logo.png" className='img-fluid' alt="my logo" />
        <span className='fs-2 m-3 float-end'>
          Good Cakes Cafe
        </span>
      </NavLink>
      <Nav />
    </MainHeader>
  )
};

const MainHeader = styled.header`
padding: 2rem;
background-color: ${({ theme }) => theme.colors.header_bg};
display: flex;
justify-content: space-between;
align-item: center;
position: relative;
 .logo {
    font-size: 1rem;
    color: #FFD200;
 }
 .logo img {
    height: 5rem;
 }
`;

export default Header

