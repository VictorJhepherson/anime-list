import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
  ${() => css`
    min-width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: url('/img/bgAnime-1.svg') no-repeat center center fixed;
    background-color: ${theme.colors.white};
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;

    h1 {
      font-size: 60px;
      font-weight: ${theme.font.bold};
      color: ${theme.colors.darkBlue};
    }

    img:hover {
      filter: brightness(115%);
      transform: scale(1.02);
    }
  `}
`;
