import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  ${() => css`
    width: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    transition: opacity 20s ease-in;
  `}
`;

export const CharacterImage = styled.img`
  ${() => css`
    width: 220px;
    height: 300px;
    border: 2px solid ${theme.typeColors.movie};
    background: ${theme.colors.empty};
    transition: all 300ms ease-in-out;

    &:hover {
      transform: translate(-3%, 3%) scale(1.1);
    }
  `}
`;

export const CharacterName = styled.h2`
  ${() => css`
    height: 60px;
    font-size: 18px;
    text-align: center;
    color: ${theme.colors.darkBlue};
  `}
`;
