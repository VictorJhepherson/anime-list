import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

export const NavBarStyles = styled.header`
  ${() => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.primary};
    padding: 20px;
  `}
`;

export const BackContainer = styled.nav`
  ${() => css`
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 32px;
      line-height: 55px;
      color: ${theme.colors.ternary};
      &:hover {
        filter: brightness(115%);
        transform: scale(1.02);
      }
    }
  `}
`;

export const RightContainer = styled.div`
  ${() => css`
    width: 250px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `}
`;

export const Text = styled.h2`
  ${() => css`
    font-size: 24px;
    color: ${theme.colors.ternary};
    transition: all 300ms ease-in-out;

    &:hover {
      transform: scale(1, 0.5);
    }
  `}
`;
