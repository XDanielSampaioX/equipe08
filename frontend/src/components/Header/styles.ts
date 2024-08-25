import styled from "styled-components"

import { Link } from "../Link/styles"

import { remCalc } from "../../utils/remCalc"
import { colors } from "../../styles"
import { breakpoints } from "../../styles"

export const LoginIcon = styled.div`
  width: 26px;
  height: 25px;
  border: 2px solid ${colors.red};
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${remCalc(10)};
  transition: all 0.5s ease-in-out 0.1s;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border: 2px solid ${colors.red};
    border-radius: 50%;
    position: absolute;
    top: 3.5px;
    transition: all 0.5s ease-in-out 0.1s;
  }

  &::after {
    content: "";
    width: 14px;
    height: 5px;
    border: 2px solid ${colors.red};
    border-top: none;
    border-radius: 0 0 12px 12px;
    position: absolute;
    bottom: 1px;
    transform: rotate(180deg);
    transition: all 0.5s ease-in-out 0.1s;
  }
`

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${colors.black};
  padding: ${remCalc(24)} 0;
  z-index: 3;

  @media (max-width: ${breakpoints.desktop}) {
    padding: ${remCalc(16)} ${remCalc(32)};
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${remCalc(1160)};
  width: 100%;
  margin: 0 auto;
`;


export const Logo = styled.img`
  height: ${remCalc(80)};
  cursor: pointer;

  @media (max-width: ${breakpoints.desktop}) {
    height: ${remCalc(56)};
    width: ${remCalc(77)};
    cursor: auto;
  }
`

export const ButtonMobile = styled.button`
      @media (min-width: ${breakpoints.tablet}) {
        display: none;
      }
` 

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${colors.red};
  padding: ${remCalc(6)} ${remCalc(12)};
  border: ${remCalc(2)} solid ${colors.red};
  border-radius: ${remCalc(8)};
  text-decoration: none; /* Remove o sublinhado padrão de links */
  transition: all 0.5s ease-out;
  font-size: ${remCalc(18)};
  font-weight: 400;
  background: transparent;

  &::before {
    content: "";
    display: inline-block;
    width: ${remCalc(32)};
    height: ${remCalc(32)};
    margin-right: ${remCalc(10)};
    transition: all 0.5s ease-out;
  }

  &:hover {
    color: ${colors.white};
    border-color: ${colors.white};

    &::before {
    }
  }
  
  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 30vw;

  ${Link} {
    margin-left: ${remCalc(48)};
    color: ${colors.white};
    font-size: ${remCalc(18)};
    font-weight: 400;
    line-height: ${remCalc(32)};
    position: relative;
    padding: 0 10px;
    transition: color 0.6s ease-out;

    &:nth-of-type(1),
    &:nth-of-type(2) {
      &:after {
        content: "";
        position: absolute;
        background-color: ${colors.red};
        height: 3px;
        width: 0;
        left: 0;
        bottom: ${remCalc(-7)};
        transition: 0.6s ease-out;
        border-radius: ${remCalc(6)};
      }

      &:hover {
        color: ${colors.red};
      }

      &:hover:after {
        width: 100%;
      }
    }    
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: 40vw;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Hamburguer = styled.div`
  display: none;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    width: ${remCalc(36)};

    span {
      height: ${remCalc(4)};
      display: block;
      width: 100%;
      background-color: ${colors.white};
      border-radius: ${remCalc(8)};
      margin-bottom: ${remCalc(6)};
    }
  }
`

export const NavMobile = styled.nav`
  position: absolute;
  background-color: ${colors.gray4};
  top: 100%;
  right: 0;
  width: 100%;
  height: 0;
  transition: height 0.3s ease-in, padding 0.3s ease-in;
  pointer-events: none;
  z-index: 2;
  border-bottom-left-radius: ${remCalc(8)};
  border-bottom-right-radius: ${remCalc(8)};

  ${Link} {
    color: ${colors.white};
    background-color: ${colors.gray3};
    padding: ${remCalc(12)} 0;
    margin: ${remCalc(8)} ${remCalc(12)};
    font-size: ${remCalc(14)};
    font-weight: 400;
    line-height: ${remCalc(18)};
    text-align: center;
    display: block;
    opacity: 0;
    transition: all 0.3s ease;
    transform: translateY(${remCalc(-30)});
    transition: 0.3s ease-in;
    cursor: auto;

    &:nth-of-type(1) {
      margin: ${remCalc(0)} ${remCalc(12)} ${remCalc(8)};
      border-top-left-radius: ${remCalc(8)};
      border-top-right-radius: ${remCalc(8)};
    }

    &:last-child {
      margin: ${remCalc(8)} ${remCalc(12)} ${remCalc(0)};
      border-bottom-left-radius: ${remCalc(8)};
      border-bottom-right-radius: ${remCalc(8)};
    }
  }

  &.is-open {
    height: auto;
    padding: ${remCalc(12)} 0 ${remCalc(8)};
    pointer-events: auto;

    ${Link} {
      opacity: 1;
      transform: translateY(0);
      transition-delay: calc(0.15s * var(--i));
    }
  }
`

export const CloseButton = styled.img`
  height: ${remCalc(36)};

  @media (min-width: ${breakpoints.desktop}) {
    display: none;
  }
`
