import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

import phone1 from '../../assets/imgs/header-phone@1x.jpg';
import phone2 from '../../assets/imgs/header-phone@2x.jpg';
import tablet1 from '../../assets/imgs/header-tablet@1x.jpg';
import tablet2 from '../../assets/imgs/header-tablet@2x.jpg';
import desktop1 from '../../assets/imgs/header-desktop@1x.jpg';
import desktop2 from '../../assets/imgs/header-desktop@2x.jpg';


export const StyledHeader = styled.header`
    padding: 40px 20px;  
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (min-width: 768px) {
        padding: 40px 32px;   
    }

    background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
    url(${phone1});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 2dppx),
    (min-resolution: 2dpi) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
    url(${phone2});
  }

  @media screen and (min-width: 768px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
    url(${tablet1});
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 2dppx),
      (min-resolution: 2dpi) {
      background-image: linear-gradient(
          rgba(0, 0, 0, 0.56),
          rgba(0, 0, 0, 0.56)
        ),
        url(${tablet2});
    }
  }
  @media screen and (min-width: 1280px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
    url(${desktop1});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 2dppx),
      (min-resolution: 2dpi) {
      background-image: linear-gradient(
          rgba(0, 0, 0, 0.56),
          rgba(0, 0, 0, 0.56)
        ),
        url(${desktop2});
    }
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 54px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`

export const LogoWrapper = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`

export const Title = styled.h1`
 font-weight: 600;
 font-size: 30px;
 margin-left: 8px;
 color: var(--text-color);
 display: inline;
 display: none;

 @media screen and (min-width: 768px) {
    display: block;
 }
`

export const Nav = styled.nav`
 display: flex;
 gap: 12px;

 @media screen and (min-width: 768px) {
  gap: 18px;
}
`

export const StyledNavLink = styled(NavLink)`
  position: relative;
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  color: var(--text-color);
  text-decoration: none;

  @media screen and (min-width: 768px) {
    font-size: 16px;
 }
 &:focus,
 &:hover {
   color: var(--hover-color);
 }

 &.active::after {
    position: absolute;
    display: block;
    content: '';
    bottom: -2;
    left: 0;
    width: 100%;
    height: 2px;
    border-radius: 2px;
    background-color: currentColor;
 }
`



